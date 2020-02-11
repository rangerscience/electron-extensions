const { ipcRenderer, webFrame } = require("electron")

const { NewChromeApi } = require("../chrome_api.js")

const _ = {}

_.recieveContentScripts = (ipcChannel) => {
  return (event, message) => {
    const { envelope, payload } = message

    if( envelope.eventType != "content_script_injection" ) { return }

    const { worldId, manifest, code } = payload

    const api = NewChromeApi(ipcChannel, manifest)

    webFrame.executeJavaScriptInIsolatedWorld(worldId, [{ code: 'window' }])
      .then(isolatedWorldWindow => {
        isolatedWorldWindow.chrome = api
        isolatedWorldWindow.MANIFEST = manifest // TODO: Build the API with this info instead of using a global
        isolatedWorldWindow.EXTENSION_ID = manifest.extensionId // TODO: Build the API with this info instead of using a global
      })
      .then(() => {
        webFrame.executeJavaScriptInIsolatedWorld(worldId, [
          { code: `console.log("Starting extension ${manifest.name} in world ${worldId}", EXTENSION_ID)` },
          { code: `console.log(chrome)` },
          { code }
        ])
      })
  }
}

function ExtensionInit(ipcChannel) {
  // TODO: Still need to have the API that web pages can access
  ipcRenderer.on(ipcChannel, _.recieveContentScripts(ipcChannel))
}

module.exports = {
  config: _,
  ExtensionInit: ExtensionInit
}
