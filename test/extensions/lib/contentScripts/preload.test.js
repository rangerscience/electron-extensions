const { ipcRenderer } = require("electron")

const { config, ExtensionInit } = require("../../../../lib/extensions/lib/contentScripts/preload.js")

const _ = {}

describe("ExtensionInit", () => {
  process.once = jest.fn( (event, callback) => callback() )

  test("injects chrome api", () => {
    global.chrome = { foo: "bar" }
    ExtensionInit("ipcChannel")
    expect(global.chrome.runtime).toBeDefined()
    expect(global.chrome.foo).toBeDefined()
  })

  test("it creates global.chrome if not exist", () => {
    delete global.chrome
    ExtensionInit("ipcChannel")
    expect(global.chrome).toBeDefined()
  })
})
