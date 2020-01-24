const { Event } = require("../lib/event.js")

const _ = {}

_.getInitialTimeDelay = (alarmInfo) => {
  return Date.now() - alarmInfo.when ||
    (alarmInfo.delayInMinutes * 60 * 1000) ||
    (alarmInfo.periodInMinutes * 60 * 1000)
}

_.newEventInfoBuilder = (alarmName, alarmInfo) => {
  return (scheduledTime) => {
    return {
      name: name,
      scheduledTime: scheduledTime,
      periodInMinutes: alarmInfo.periodInMinutes
    }
  }
}

_.createAlarmBuilder = (emitter, alarmDictionary) => {
  return function alarmBuilder(name, alarmInfo) {
    alarmDictionary[name] = alarmInfo

    const newEventInfo = _.newEventInfoBuilder(name, alarmInfo)
    const firstTimeDelayMillis = _.getInitialTimeDelay(alarmInfo)

    var scheduledTime = Date.now() + firstTimeDelayMillis
    const alarm = () => {
      delete alarmDictionary[name].timeout
      emitter.emit(newEventInfo(scheduledTime))

      if(alarmInfo.periodInMinutes) {
        scheduledTime = Date.now() + (alarmInfo.periodInMinutes * 60 * 1000)
        alarmDictionary[name].timeout = setTimeout(alarm, scheduledTime)
      }
    }

    alarmDictionary[name].timeout = setTimeout(alarm, firstTimeDelayMillis)
  }
}

_.getAlarmBuilder = (alarmDictionary) => {
  return (key, callback) => callback(alarmDictionary[key])
}

_.clearAlarmBuilder = (alarmDictionary) => {
  return (key, callback) => {
    const wasPresent = !!(alarmDictionary[key].timeout)
    clearTimeout(alarmDictionary[key].timeout)
    callback(wasPresent)
  }
}

function BuildAlarmsApi() {
  const emitter = new Event()
  const alarmDictionary = {}

  return {
    addListener: emitter.addListener,
    create: _.createAlarmBuilder(emitter, alarmDictionary),
    get: _.getAlarmBuilder(alarmDictionary),
    clear: _.clearAlarmBuilder(alarmDictionary)
  }
}
