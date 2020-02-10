const Path = require('path')
const Fs = require('fs')
const { app, protocol, ipcMain, webContents } = require('electron')

const { ipcChannel } = require("./constants.js")
const { Event } = require("./lib/event.js")
const { ReadManifest } = require("./lib/manifest.js")
const { RegisterExtension, RegisterFileProtocol } = require("./lib/protocol.js")
const { LaunchBackgroundPage } = require("./lib/background/window.js")
const { InjectExtensionBuilder } = require("./lib/contentScripts/injection.js")
const { IpcRouter } = require("./lib/ipc.js")

const _ = {}

_.loadedExtensionsResponder = (loadedExtensions) => {
  return (event, message) => {
    const { envelope, payload } = message

    if( envelope.eventType != "get_all_extensions" ) {
      return []
    }

    return loadedExtensions.map(m => {return {
      id: m.extensionId,
      shortName: m.name,
      enabled: true
    }})
  }
}

_.sendSync = (ipcChannel, webContents, message, waitTime = 1000) => {
  message.syncId = uuidv4()

  return new Promise((resolve, reject) => {
    let receiver, timeout

    timeout = window.setTimeout(() => {
      reject()
      ipcMain.removeListener(receiver)
      console.warn("sendSync timeout", webContents, message)
    }, waitTime)

    receiver = (event, received) => {
      const { envelope, payload } = received

      if( envelope.syncId != message.syncId ) { return }

      resolve(received)
      ipcMain.removeListener(receiver)
      window.clearTimeout(timeout)
    }

    ipcMain.on(ipcChannel, receiver)
    webContents.send(ipcChannel, message)
  })
}

_.queryTabsResponder = (routers) => {
  return async (event, message) => {
    const { envelope, payload } = message

    if( envelope.eventType != "query_tabs" ) {
      return
    }

    // try {
    // TODO: May need to do more filtering on these
      return await Promise.allSettled(
        webContents.getAllWebContents().map(
          r => r.sendSync(message)
        )
      ).flat
    // } catch (error) {
    //   console.error(error)
    // }
  }
}

// TODO: Create example
_.OnCreateTab = new Event("createTab")

_.createTabResponder = (routers) => {
  return async (event, message) => {
    const { envelope, payload } = message

    if( envelope.eventType != "create_tab" ) {
      return
    }

    message.envelope.event = event

    if(_.OnCreateTab.listeners.length == 0) {
      console.warn("No responders for tab creation")
    }

    _.onCreateTab.emit(message)
  }
}


_.loadExtension = (rootDir) => {
  // https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/262
  protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])
  app.on("ready", () => RegisterFileProtocol(rootDir)) // Note: this had to be done manually on new web contents, so expose this more conveniently

  const loadedExtensions = []
  const routers = []

  ipcMain.handle(ipcChannel, (event, message) => {
    switch (message.envelope.eventType) {
      case "get_all_extensions":
        _.loadedExtensionsResponder(loadedExtensions)(event, message)
        break;
      case "query_tabs":
        _.queryTabsResponder(routers)(event, message)
        break;
      case "create_tab":
        _.createTabResponder()(event, message)
        break;
      default:
        console.warn("unrecognized event type for invoke/handle", message)
    }
  })

  return (srcDir, extensionId) => {
    const srcDirectory = Path.join(rootDir, srcDir)

    RegisterExtension(srcDirectory, extensionId)
    const manifest = ReadManifest(srcDirectory, extensionId)

    loadedExtensions.push(manifest)
    const backgroundWindow = LaunchBackgroundPage(manifest)
    const injector = InjectExtensionBuilder(manifest, ipcChannel)

    const router = new IpcRouter(ipcChannel, manifest, backgroundWindow)
    routers.push(router)

    return (webContents) => {
      router.addContentWindow(webContents)
      injector(webContents)
    }
  }
}

module.exports = {
  config: _,
  Root: (rootDir) => { return {
    LoadExtension: _.loadExtension(rootDir),
    OnCreateTab: _.OnCreateTab
  }}
}
