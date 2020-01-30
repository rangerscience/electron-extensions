const Path = require('path')
const Fs = require('fs')

const { app } = require("electron")

const { ipcChannel } = require("./constants.js")
const { ReadManifest } = require("./lib/manifest.js")
const { RegisterExtension, RegisterFileProtocol } = require("./lib/protocol.js")
const { LaunchBackgroundPage } = require("./lib/background/window.js")
const { InjectExtensionBuilder } = require("./lib/contentScripts/injection.js")
const { IpcRouter } = require("./lib/ipc.js")

// TODO: Test...?

function LoadExtension(rootDir) {
  app.on("ready", () => RegisterFileProtocol(rootDir))

  return (srcDir, extensionId) => {
    const srcDirectory = Path.join(rootDir, srcDir)

    RegisterExtension(srcDirectory, extensionId)
    const manifest = ReadManifest(srcDirectory, extensionId)

    const backgroundWindow = LaunchBackgroundPage(manifest)
    const injector = InjectExtensionBuilder(manifest)

    const router = new IpcRouter(ipcChannel, manifest, backgroundWindow)

    return (webContents) => {
      router.addContentWindow(webContents)
      injector(webContents)
    }
  }
}

module.exports = {
  Root: (rootDir) => { return { LoadExtension: LoadExtension(rootDir) } }
}
