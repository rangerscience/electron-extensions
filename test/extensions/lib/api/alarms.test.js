const { config, AlarmsApi } = require("../../../../lib/extensions/lib/api/alarms.js")
const { Event } = require("../../../../lib/extensions/lib/event.js")

const _ = {
  singleAlarm: () => {return {
    name: "singleAlarm",
    when: Date.now() + 10
  }},
  delayedAlarm: () => { return {
    name: "delayedAlarm",
    delayInMinutes: 0.01
  }},
  periodicAlarm: () => {return {
    name: "periodicAlarm",
    periodInMinutes: 0.01
  }},
  periodicAlarmWithDelay: () => { return {
    name: "periodicAlarmWithDelay",
    when: Date.now() + 10,
    periodInMinutes: 0.01
  }}
}

_.getFixtures = () => {
  const emitter = new Event()
  const alarmDictionary = {}
  const createAlarm = config.createAlarmBuilder(emitter, alarmDictionary)
  const clearAlarm = config.clearAlarmBuilder(alarmDictionary)

  return { emitter, alarmDictionary, createAlarm, clearAlarm }
}

describe("getInitialTimeDelay", () => {
  var tk = require('timekeeper');
  var time = new Date(Date.now());
  tk.freeze(time);

  const res = {
    singleAlarm: config.getInitialTimeDelay(_.singleAlarm()),
    delayedAlarm: config.getInitialTimeDelay(_.delayedAlarm()),
    periodicAlarm: config.getInitialTimeDelay(_.periodicAlarm()),
    periodicAlarmWithDelay: config.getInitialTimeDelay(_.periodicAlarmWithDelay())
  }

  test("converts scheduled time into a milliseconds delay", () => {
    expect(res.singleAlarm).toBe(10)
  })

  test("converts delayed time into a milliseconds delay", () => {
    expect(res.delayedAlarm).toBe(600)
  })

  test("converts periodic time into a milliseconds delay", () => {
    expect(res.periodicAlarm).toBe(600)
  })

  test("converts peroidic time with scheduled time into a milliseconds delay", () => {
    expect(res.periodicAlarmWithDelay).toBe(10)
  })

  tk.reset();
})

describe("newEventInfoBuilder", () => {
  const builder = config.newEventInfoBuilder(_.periodicAlarm())
  const scheduledTime = Date.now() + 10

  test("builds events with the alarm name", () => {
    expect(builder(scheduledTime)).toMatchObject({name: _.periodicAlarm().name})
  })

  test("builds events with the scheduled time", () => {
    expect(builder(scheduledTime)).toMatchObject({scheduledTime: scheduledTime})
  })

  test("builds events with the alarm peroid", () => {
    expect(builder(scheduledTime)).toMatchObject({periodInMinutes: _.periodicAlarm().periodInMinutes})
  })
})

describe("api components", () => {
  describe("create", () => {
    test("creates an alarm", () => {
      const { emitter, alarmDictionary, createAlarm } = _.getFixtures()

      createAlarm(_.periodicAlarm().name, _.periodicAlarm())

      expect(alarmDictionary).toHaveProperty(_.periodicAlarm().name)
      expect(alarmDictionary[_.periodicAlarm().name]).toHaveProperty("timeout")
    })
  })

  describe("get", () => {
    const alarmDictionary = {singleAlarm: _.singleAlarm()}
    const getAlarm = config.getAlarmBuilder(alarmDictionary)

    test("sends the alarm to the callback", () => {
      const callback = jest.fn()

      getAlarm("singleAlarm", callback)

      expect(callback).toHaveBeenCalledWith(alarmDictionary.singleAlarm)
    })
  })

  describe("clear", () => {
    test("removes an alarm", () => {
      const { emitter, alarmDictionary, createAlarm, clearAlarm } = _.getFixtures()

      createAlarm(_.singleAlarm().name, _.singleAlarm())
      clearAlarm(_.singleAlarm().name)

      expect(alarmDictionary).not.toHaveProperty(_.singleAlarm().name)
    })

    test("sends the callback whether the alarm existed", () => {
      const { emitter, alarmDictionary, createAlarm, clearAlarm } = _.getFixtures()
      const existedCallback = jest.fn()
      const absentCallback = jest.fn()

      createAlarm(_.singleAlarm().name, _.singleAlarm())
      clearAlarm(_.singleAlarm().name, existedCallback)
      clearAlarm("absent", absentCallback)

      expect(existedCallback).toHaveBeenCalledWith(true)
      expect(absentCallback).toHaveBeenCalledWith(false)
    })

    test("stops the alarm from triggering", () => {
      // I don't know how to test this
    })
  })
})

describe("api", () => {
  describe("onAlarm", () => {
    test("adds a listener to all alarms", (done) => {
      const api = new AlarmsApi()
      const alarm = _.singleAlarm()

      const listener = (alarm) => {
        expect(alarm).toMatchObject({name: alarm.name})
        done()
      }

      api.onAlarm.addListener(listener)
      api.create(alarm.name, alarm)
    })
  })

  describe("create", () => {
    test("takes an alarm name and info", () => {
      const api = new AlarmsApi()

      api.create(_.singleAlarm.name, _.singleAlarm)
      // This is otherwise quite well tested
    })
  })

  describe("get", () => {
    test("takes an alarm name and a callback", () => {
      const api = new AlarmsApi()

      api.get(_.singleAlarm.name, () => {})
      // This is otherwise quite well tested
    })
  })

  describe("clear", () => {
    test("takes an alarm name and a callback", () => {
      const api = new AlarmsApi()

      api.clear(_.singleAlarm.name, () => {})
      // This is otherwise quite well tested
    })
  })

  describe("usage", () => {
    test("single alarms trigger once", (done) => {
      const api = new AlarmsApi()
      const alarm = _.singleAlarm()

      const listener = (alarm) => {
        expect(alarm).toMatchObject({name: alarm.name})
        expect(api.alarmDictionary[alarm.name]).not.toHaveProperty("timeout")
        done()
      }

      api.onAlarm.addListener(listener)
      api.create(alarm.name, alarm)
    })

    test("periodic alarms trigger more than once", (done) => {
      const api = new AlarmsApi()

      var triggered = false
      const listener = (alarm) => {
        if(!triggered) {
          triggered = false
        } else {
          done()
        }
        done()
      }

      api.onAlarm.addListener(listener)
      api.create(_.periodicAlarm().name, _.periodicAlarm())
    })
  })
})
