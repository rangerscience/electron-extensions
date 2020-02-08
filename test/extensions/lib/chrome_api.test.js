const { ipcRenderer } = require('electron');
const { NewChromeApi } = require("../../../lib/extensions/lib/chrome_api.js")

const _ = {}

_.ipcChannel = "ipcChannel"

describe("preload for background pages", () => {
  const manifest = {
    extensionId: "extensionId",
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
})
