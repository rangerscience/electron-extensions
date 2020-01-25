const Path = require('path')

const { config, StorageApi } = require("../../../lib/extensions/api/storage.js")

const _ = {}

_.data = {
  key1: {
    some: {
      nested: "object"
    }
  },
  key2: [
    "an", "array"
  ]
}

describe("newStore", () => {


  test("builds a store using the name", () => {
    const store = config.newStore("newStore-test")
    expect(store).not.toBeNull()
    store._store.clear() // make sure it's clean for the next test run
  })

  test("can set key/value pairs in store", () => {
    const store = config.newStore("newStore.set-test")
    const callback = jest.fn()

    store.set(_.data, callback)

    expect(callback).toHaveBeenCalled()

    store._store.clear() // make sure it's clean for the next test run
  })

  test("can get values from the store", () => {
    const store = config.newStore("newStore.get-test")
    const callback = jest.fn()

    store.set(_.data)
    store.get(["key1"], callback)

    expect(callback).toHaveBeenCalledWith([_.data.key1])

    store._store.clear() // make sure it's clean for the next test run
  })

  test("errors when setting to null", () => {
    const store = config.newStore("newStore.get-error")
    const callback = jest.fn()

    expect(() => store.set({nil: () => {}})).toThrow()


    store._store.clear() // make sure it's clean for the next test run
  })
})

describe("api", () => {
  test("is made with an extension name", () => {
    const api = new StorageApi("api-test")
    api._clear()
  })

  test("has a local storage", () => {
    const api = new StorageApi("api.local-test")
    expect(api).toHaveProperty("local")
    api._clear()
  })

  test("has a managed storage", () => {
    const api = new StorageApi("api.managed-test")
    expect(api).toHaveProperty("managed")
    api._clear()
  })

  test("managed storage does not have set", () => {
    const api = new StorageApi("api.managed.set-test")
    expect(api.managed).not.toHaveProperty("set")
    api._clear()
  })
})
