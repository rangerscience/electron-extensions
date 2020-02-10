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
        isolatedWorldWindow.MANIFEST = manifest // TODO: Should be unneccessary now
        isolatedWorldWindow.EXTENSION_ID = manifest.extensionId // TODO: Should be unneccessary now
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
  const api = NewChromeApi(ipcChannel)

  process.once('loaded', () => {
    if( !global.chrome ) { global.chrome = {} }
    Object.assign(global.chrome, api)
  })

  ipcRenderer.on(ipcChannel, _.recieveContentScripts(ipcChannel))
}

module.exports = {
  config: _,
  ExtensionInit: ExtensionInit
}
