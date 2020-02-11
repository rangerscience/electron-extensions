const Store = require('electron-store');
const TraceError = require('trace-error')


/**
 * Module partially implementing the Google Chrome storage API
 * https://developer.chrome.com/extensions/storage
 */

// TODO: An actual sync behaviour
const _ = {}

/**
 * newStore - Produces a new wrapped Electron Store to mimic Chrome storage APIs
 *
 * @param  {string} name Namespace to use for the storage. All processes accessing
 *   storage with the same name will get the same storage.
 * @return {object} A simple storage object
 */
_.newStore = function newStore(name){
  const store = new Store({name: name})

  /**
   * get - Fetches objects from the storage
   *
   * @param  {Array[string]} keys A list of keys to fetch
   * @param  {function} callback A function to receive the fetched object. Will
   *   be passed an object containing the fetched values: {k1: v1, k2: v2}
   */
  const get = function(keys, callback) {
    const res = {}
    keys.map(k => res[k] = store.get(k) )
    callback(res)
  }

  /**
   * set - Sets key/value pairs in storage
   *
   * @param  {object} obj An object containing the key/value pairs to be sent to storage
   * @param  {function} [callback] A callback to be called after all values have been stored
   *
   * @modifies Adds values to the persistent storage
   */
  const set = function(obj, callback = () => {}) {
    try{
      Object.entries(obj).forEach(([key, value]) => store.set(key, value) )
    } catch (err) {
      throw new TraceError("Storage error handling not implemented", obj, err)
    }

    callback()
  }

  return {get: get, set: set, _store: store}
}


/**
 * A class containing a storage API
 * @property {Object} local "Local" storage with getter & setter
 * @property {Object} managed "Managed" storage with only getter
 * @property {Object} sync Storage that syncs between apps. Note: Sync behaviour
 *   unimplemented; this is just another local storage, differing only by name
 *
 * @property {function} _clear Clears all items from storage. (For use in tests)
 */
class StorageApi {
  constructor(extensionName) {
    this.local = _.newStore(`${extensionName}-local`)
    this.managed = _.newStore(`${extensionName}-managed`)
    this.sync = _.newStore(`${extensionName}-sync`)
    delete this.managed.set
  }

  _clear() {
    this.local._store.clear()
    this.managed._store.clear()
    this.sync._store.clear()
  }
}

module.exports = {
  config: _,
  StorageApi: StorageApi
}
