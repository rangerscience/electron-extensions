const EventEmitter = require('events');

const Store = require('electron-store');

const _ = {}

_.buildStorage = function(name){
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

  return {get: get, set: set}
}

_.storage = {
  local: _.buildStorage("local"),
  managed: _.buildStorage("managed")
}
delete _.storage.managed.set

_.buildSimpleEventer = function() {
  const emitter = new EventEmitter();

  return {
    addListener: (handler) =>  emitter("*", handler)
  }
}

_.createAlarmBuilder = function(emitter, alarmDictionary) {
  return function (name, alarmInfo) {
    alarmDictionary[name] = alarmInfo

    const firstTimeDelayMillis =
      Date.now() - alarmInfo.when ||
      (alarmInfo.delayInMinutes * 60 * 1000) ||
      (alarmInfo.periodInMinutes * 60 * 1000)

    const event = (time) => {return {
      name: name,
      scheduledTime: scheduledTime,
      periodInMinutes: alarmInfo.periodInMinutes
    }}

    var scheduledTime = Date.now() + firstTimeDelayMillis
    alarmDictionary[name].timeout = setTimeout(() => {
      delete alarmDictionary[name].timeout
      emitter.emit("*", event(scheduledTime))

      scheduledTime = Date.now() + firstTimeDelayMillis
      if(alarmInfo.periodInMinutes) {
        alarmDictionary[name].interval = setInterval(() => {
          emitter.emit("*", event(scheduledTime))

          scheduledTime = Date.now() + firstTimeDelayMillis
        }, (alarmInfo.periodInMinutes * 60 * 1000))
      }
    }, firstTimeDelayMillis)

  }
}

_.buildAlarms = function() {
  const emitter = _.buildSimpleEventer()
  const alarmDictionary = {}

  return {
    addListener: (handler) =>  emitter("*", handler),
    create: _.createAlarmBuilder(emitter, alarmDictionary),
    get: (key, callback) => callback(alarmDictionary[key]),
    clear: (key, callback) => {
      const wasPresent = !!(alarmDictionary[key].timeout || alarmDictionary[key].interval)
      clearTimeout(alarmDictionary[key].timeout)
      clearInterval(alarmDictionary[key].interval)
      callback(wasPresent)
    }
  }
}

_.runtime = {
  lastError: null,
  onMessageExternal: _.buildSimpleEventer(),
  onConnectExternal: _.buildSimpleEventer(), // TODO: Connections to websites
}

function Preload() {
  process.once('loaded', () => {
    global.chrome = {
        storage: _.storage,
        runtime: _.runtime,
        alarms: _.buildAlarms(),
    }
    window.foo = () => console.log("foo")
  })
}

module.exports = {
  config: _,
  Preload: Preload
}
