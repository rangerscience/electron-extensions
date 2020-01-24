const { Event } = require("../../../lib/extensions/lib/event.js")

describe("Event", () => {
  test("can be new'd", () => {
    const eventer = new Event()
    expect(eventer).not.toBeNull()
  })

  test("can add listener", () => {
    const eventer = new Event()
    const listener = jest.fn()

    eventer.addListener(listener)

    expect(eventer.hasListener(listener)).toBeTruthy()
  })

  test("can remove listener", () => {
    const eventer = new Event()
    const listener = jest.fn()
    eventer.addListener(listener)

    eventer.removeListener(listener)

    expect(eventer.hasListener(listener)).not.toBeTruthy()
  })

  test("safe remove of non-existent listener", () => {
    const eventer = new Event()

    expect(() => eventer.removeListener(() => {})).not.toThrow()
  })

  test("can has listener", () => {
    // covered by other tests
  })

  test("can emit events to listeners", () => {
    const eventer = new Event()
    const listener = jest.fn()
    const event = "event"
    eventer.addListener(listener)

    eventer.emit(event)

    expect(listener).toHaveBeenCalledWith(event)
  })
})
