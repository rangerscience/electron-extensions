const { Event } = require("../event.js")

const _ = {}

_.getInitialTimeDelay = (alarmInfo) => {
  if( alarmInfo.when ) {
    return alarmInfo.when - Date.now()
  } else if ( alarmInfo.delayInMinutes ) {
    return (alarmInfo.delayInMinutes * 60 * 1000)
  } else {
    return (alarmInfo.periodInMinutes * 60 * 1000)
  }
}

_.newEventInfoBuilder = (alarmInfo) => {
  return (scheduledTime) => {
    return {
      name: alarmInfo.name,
      scheduledTime: scheduledTime,
      periodInMinutes: alarmInfo.periodInMinutes
    }
  }
}

// TODO: Cancel and replace
_.createAlarmBuilder = (emitter, alarmDictionary) => {
  return function alarmBuilder(name, alarmInfo) {
    alarmDictionary[name] = alarmInfo

    const newEventInfo = _.newEventInfoBuilder(alarmInfo)
    const firstTimeDelayMillis = _.getInitialTimeDelay(alarmInfo)

    var scheduledTime = Date.now() + firstTimeDelayMillis
    const alarm = () => {
      delete alarmDictionary[name].timeout
      emitter.emit(newEventInfo(scheduledTime))

      if(alarmInfo.periodInMinutes) {
        scheduledTime = scheduledTime + (alarmInfo.periodInMinutes * 60 * 1000)
        // TODO: This'll break if it's negative
        alarmDictionary[name].timeout = setTimeout(alarm, scheduledTime - Date.now())
      }
    }

    alarmDictionary[name].timeout = setTimeout(alarm, firstTimeDelayMillis)
  }
}

_.getAlarmBuilder = (alarmDictionary) => {
  return (key, callback) => callback(alarmDictionary[key])
}

_.clearAlarmBuilder = (alarmDictionary) => {
  return (key, callback = () => {} ) => {
    if( alarmDictionary[key] && alarmDictionary[key].timeout ) {
      clearTimeout(alarmDictionary[key].timeout)
      delete alarmDictionary[key]
      callback(true)
    } else {
      callback(false)
    }
  }
}

// TODO: Should be `function onAlarm` so that it's findable through search.
//    Also this pattern is ugly.
class AlarmsApi {
  constructor() {
    Object.assign(this,{
      emitter: new Event(),
      alarmDictionary: {}
    })

    Object.assign(this, {
      onAlarm: (...args) => this.emitter.addListener(...args),
      create: _.createAlarmBuilder(this.emitter, this.alarmDictionary),
      get: _.getAlarmBuilder(this.alarmDictionary),
      clear: _.clearAlarmBuilder(this.alarmDictionary)
    })
  }
}

module.exports = {
  config: _,
  AlarmsApi: AlarmsApi
}
