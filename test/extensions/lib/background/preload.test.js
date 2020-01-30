const { ipcRenderer } = require("electron")

const { config, ExtensionInit } = require("../../../../lib/extensions/lib/background/preload.js")

const _ = {}

_.manifest = {
  extensionId: "extensionId",
  // TODO: More?
}

test("can get extension ID from process args", () => {
  process.argv.push("extensionId=extensionId")
  expect(config.getExtensionid()).toBe("extensionId")
})

test("can fetch manifest", () => {
  ipcRenderer._sendSyncResponse = _.manifest

  const manifest = config.fetchManifest("ipcChannel", "extensionId")

  expect(manifest).toBe(_.manifest)
  expect(ipcRenderer.sendSync).toHaveBeenCalledWith("ipcChannel", {
    envelope: {
      eventType: "request_manifest",
      extensionId: "extensionId"
    }
  })
})

describe("ExtensionInit", () => {
  process.once = jest.fn( (event, callback) => callback() )

  const og_getExtensionId = config.getExtensionid
  const og_fetchManifest = config.fetchManifest
  config.getExtensionid = () => "extensionId"
  config.fetchManifest = () => _.manifest

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

  config.getExtensionId = og_getExtensionId
  config.fetchManifest = og_fetchManifest
})
