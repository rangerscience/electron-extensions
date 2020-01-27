const { ipcRenderer } = require("electron")

const { ipcChannel } = require("../../constants.js")
const { Injector, NewChromeApi } = require("../chrome_api.js")

const _ = {}

_.getExtensionid = (args) => {
  return process.argv.find(e => e.startsWith("extensionId")).split("=")[1]
}

_.fetchManifest = (ipcChannel, extensionId) => {
  return ipcRenderer.sendSync(ipcChannel, {
    envelope: {
      eventType: "request_manifest",
      extensionId: extensionId
    }
  })
}

function ExtensionInit() {
  const extensionId = _.getExtensionId()
  const manifest = _.fetchManifest(ipcChannel, extensionId)
  const api = NewChromeApi(ipcChannel, manifest)

  process.once('loaded', () => {
    if( !global.chrome ) { global.chrome = {} }
    Object.assign(global.chrome, api)
  })
}

module.exports = {
  config: _,
  ExtensionInit: ExtensionInit
}
