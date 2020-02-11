const { Event } = require("../event.js")

/**
 * Module partially implementing the Google Chrome alarms API
 * https://developer.chrome.com/apps/alarms
 */

const _ = {}

/**
 * getInitialTimeDelay -Converts the initial timing information from an alarm
 *  into a millisecond delay from now
 *
 * @param {Object} alarmInfo - Alarm Info object.
 * @param {timestamp} alarmInfo.when - Millisecond timestamp for the first
 *   triggering of the alarm
 * @param {timestamp} alarmInfo.delayInMinutes - Minutes from now for the first
 *   triggering of the alarm. If not present, periodInMinutes will be used instead.
 * @param {timestamp} alarmInfo.periodInMinutes - Delay between repeated
 *   triggering of the alarm
 * @return {integer} Milliseconds from now to the first desired triggering of
 *   the alarm
 */
_.getInitialTimeDelay = (alarmInfo) => {
  if( alarmInfo.when ) {
    return alarmInfo.when - Date.now()
  } else if ( alarmInfo.delayInMinutes ) {
    return (alarmInfo.delayInMinutes * 60 * 1000)
  } else {
    return (alarmInfo.periodInMinutes * 60 * 1000)
  }
}

/**
 * newEventInfoBuilder - Currying function to produce the event payload sent when the alarm triggers
 *
 * @param {Object} alarmInfo - Alarm Info object.
 * @param {string} alarmInfo.name - Name to be sent in the event payload
 * @param {timestamp} alarmInfo.periodInMinutes - Delay between repeated
 *   triggering of the alarm
 * @return {function} Curried function taking a single timestamp that returns
 *   an alarm even payload
 */
_.newEventInfoBuilder = (alarmInfo) => {

  /**
   * Curried function that produces the event payload for the alarm
   *
   * @param {timestamp} - Timestamp when the alarm was scheduled to trigger.
   * @return {Object} Alarm's name, this triggering's scheduledTime, and the
   *   alarm's periodInMinutes
   */
  return (scheduledTime) => {
    return {
      name: alarmInfo.name,
      scheduledTime: scheduledTime,
      periodInMinutes: alarmInfo.periodInMinutes
    }
  }
}


/**
 * Currying function for producing alarms
 *
 * @param {Event} emitter - The event system where alarm triggers will be sent
 * @param {Map} alarmDictionary - The object to use to manage alarms
 * @return {function} Curried function for creating managed alarm
 */
_.createAlarmBuilder = (emitter, alarmDictionary) => {

  /**
   * alarmBuilder - Builds and starts a managed alarm
   *
   * @param  {string} name      Name of the alarm
   * @param  {object} alarmInfo Scheduling information for the alarm
   * @param  {object} alarmInfo.when - Absolute timestamp (in millis) when the
   *   alarm should first trigger
   * @param  {object} alarmInfo.delayInMinutes - Delay before the alarm's first
   *   trigger
   * @param  {object} alarmInfo.periodInMinutes - Delay between periodic triggerings
   */
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
        alarmDictionary[name].timeout = setTimeout(alarm, scheduledTime - Date.now())
      }
    }

    alarmDictionary[name].timeout = setTimeout(alarm, firstTimeDelayMillis)
  }
}

/**
 * getAlarmBuilder - Currying function producing an alarm getter for the
 *   provided alarms dictionary
 *
 * @param  {Map} alarmDictionary Object used for managing alarms
 * @return {function} Curried function for fetching alarms from the map
 */
_.getAlarmBuilder = function getAlarmBuilder(alarmDictionary) {
  /**
   * @param {string} alarmName Name of the alarm to get
   * @param {function} callback Passed the fetched alarm
   */
  return (alarmName, callback) => callback(alarmDictionary[alarmName])
}


/**
 * clearAlarmBuilder - Currying function for removing an active alarm
 *
 * @param  {map} alarmDictionary Object used for managing alarms
 * @return {function} Curried function for removing an alarm from the dictionary
 */
_.clearAlarmBuilder = function clearAlarmBuilder(alarmDictionary) {

  /**
   * clearAlarm - Function that removes & disables an active alarm
   *
   * @param  {string} alarmName Name of the alarm to clear
   * @param  {function} callback Passed true if the alarm existing and was
   *   cleared, false otherwise
   */
  return function clearAlarm(alarmName, callback = () => {} ) {
    if( alarmDictionary[alarmName] && alarmDictionary[alarmName].timeout ) {
      clearTimeout(alarmDictionary[alarmName].timeout)
      delete alarmDictionary[alarmName]
      callback(true)
    } else {
      callback(false)
    }
  }
}

/**
 * Class containing an alarms API
 * @property {Event} onAlarm - Event system for alarms
 * @property {function} create - Method for creating an alarm
 * @property {function} get - Method for getting an alarm
 * @property {function} clear - Method for cleaing an alarm
 */
class AlarmsApi {

  /**
   * @constructor
   * @param {Event} [emitter=new Event("alarms")] Event emitter to use
   * @param {Map} [alarmDictionary={}] Alarm dictionary to use
   */
  constructor(
    emitter = new Event("alarms"),
    alarmDictionary = {}
  ) {
    Object.assign(this, {
      emitter,
      alarmDictionary,
      onAlarm: emitter,
      create: _.createAlarmBuilder(emitter, alarmDictionary),
      get: _.getAlarmBuilder(alarmDictionary),
      clear: _.clearAlarmBuilder(alarmDictionary)
    })
  }
}

module.exports = {
  config: _,
  AlarmsApi: AlarmsApi
}
