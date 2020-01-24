const Store = require('electron-store');

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
      _.runtime.lastError = err
    }

    callback()
  }

  return {get: get, set: set, _store: store}
}

function BuildStorageApi(extensionName) {
  const storage = {
    local: _.newStore(`${extensionName}-local`),
    managed: _.newStore(`${extensionName}-managed`)
  }

  delete storage.managed.set

  return storage
}

module.exports = {
  config: _,
  BuildStorageApi: BuildStorageApi
}
