const { ipcRenderer } = require("electron")

const { config, ExtensionInit } = require("../../../../lib/extensions/lib/contentScripts/preload.js")

const _ = {}

describe("ExtensionInit", () => {
  process.once = jest.fn( (event, callback) => callback() )

  test("injects chrome api", () => {
    ExtensionInit("ipcChannel")
    expect(global.chrome).toBeDefined()
  })
})
