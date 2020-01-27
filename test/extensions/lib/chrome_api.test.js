const { ipcRenderer } = require('electron');
const { Injector, NewChromeApi } = require("../../../lib/extensions/lib/chrome_api.js")

const _ = {}

_.ipcChannel = "ipcChannel"

describe("preload for background pages", () => {
  const manifest = {
    extensionId: "extensionId",
    /*TODO: More?*/
  }

  describe("chromeApi", () => {
    const api = NewChromeApi(_.ipcChannel, manifest)

    test("has a storage api", () => {
      expect(api.storage).toBeDefined()
    })

    test("has a runtime api", () => {
      expect(api.runtime).toBeDefined()
    })

    test("has an alarms api", () => {
      expect(api.alarms).toBeDefined()
    })
  })

  test("injector curries", () => {
    expect(Injector(_.ipcChannel, manifest)).not.toThrow()
  })

  describe("injection function", () => {
    const api = NewChromeApi(_.ipcChannel, manifest)
    const injector = Injector(api)

    test("it injects the api into the target", () => {
      const _global = { chrome: {} }

      injector(_global.chrome)

      // TODO: This is not currently testable
      // expect(_global.chrome.storage).toBeDefined()
      // expect(_global.chrome.runtime).toBeDefined()
      // expect(_global.chrome.alarms).toBeDefined()
    })
  })
})
