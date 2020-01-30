const { ipcMain } = require("electron")

// TODO: mainProcess folder?
// TODO? When main process gets a connection message (which can be a unique port, or an extensionId)
// then it also creates a forwarder from that channel name to the webContents that opened the port
// Remember not to echo the message back to the sender!
const _ = {}

// TODO: too many params
_.responderBuilder = (ipcChannel, windows, manifest) => {
  return function responderCurried(event, message) {
    if(message.envelope.extensionId != manifest.extensionId) {
      return
    }

    if(message.envelope.eventType == "request_manifest") {
      event.returnValue = manifest
      return
    }

    windows.map((window) => {
      if(event.sender == window.webContents) { return }
      window.webContents.send(ipcChannel, message)
    })
  }
}

class IpcRouter {
  constructor(ipcChannel, manifest, backgroundWindow, contentWindows) {
    Object.assign(this, {ipcChannel, manifest, backgroundWindow, contentWindows})

    const responder = _.responderBuilder(
      ipcChannel,
      backgroundWindow,
      contentWindows,
      manifest
    )

    ipcMain.on(ipcChannel, responder)
  }
}

module.exports = {
  config: _,
  IpcRouter: IpcRouter
}
