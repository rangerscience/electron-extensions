const Store = require('electron-store');
const TraceError = require('trace-error')

const _ = {}

_.newStore = function(name){
  const store = new Store({name: name})

  const get = function(keys, callback) {

    callback(
      keys.map(k => store.get(k))
    )
  }

  const set = function(obj, callback) {
    try{
      Object.entries(obj).forEach(([key, value]) => {
        store.set(key, value)
      })
    } catch (err) {
      throw new TraceError("Storage error handling not implemented", obj, err)
    }

    if( callback ) { callback() }
  }

  return {get: get, set: set, _store: store}
}

class StorageApi {
  constructor(extensionName) {
    this.local = _.newStore(`${extensionName}-local`)
    this.managed = _.newStore(`${extensionName}-managed`)
    delete this.managed.set
  }

  _clear() {
    this.local._store.clear()
    this.managed._store.clear()
  }
}

module.exports = {
  config: _,
  StorageApi: StorageApi
}
