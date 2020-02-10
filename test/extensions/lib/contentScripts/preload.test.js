const { ipcRenderer } = require("electron")

const { config, ExtensionInit } = require("../../../../lib/extensions/lib/contentScripts/preload.js")

const _ = {}

describe("ExtensionInit", () => {
  test("setup a handler", () => {
    ExtensionInit("ipcChannel")
    expect(ipcRenderer.on).toHaveBeenCalled()
  })
})
