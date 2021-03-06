const { ipcRenderer, protocol } = require("electron")

const { NewChromeApi } = require("../chrome_api.js")

const _ = {}

_.getExtensionId = (args) => {
  return process.argv.find(e => e.startsWith("--extensionId")).split("=")[1]
}

_.fetchManifest = (ipcChannel, extensionId) => {
  return ipcRenderer.sendSync(ipcChannel, {
    envelope: {
      eventType: "request_manifest",
      extensionId: extensionId
    }
  })
}

function ExtensionInit(ipcChannel) {
  const extensionId = _.getExtensionId()
  const manifest = _.fetchManifest(ipcChannel, extensionId)
  const api = NewChromeApi(ipcChannel, manifest)

  process.once('loaded', () => {
    if( !global.chrome ) { global.chrome = {} }
    Object.assign(global.chrome, api)
    //global.console = require('electron').remote.getGlobal('console')
  })
}

module.exports = {
  config: _,
  ExtensionInit: ExtensionInit
}
