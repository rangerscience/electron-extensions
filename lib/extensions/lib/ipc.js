const uuidv4 = require('uuid/v4');

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

    if(process.env.IS_DEV) {
      console.log(`extension IPC message over ${ipcChannel}`, manifest.extensionId, message)
    }

    if(message.envelope.eventType == "request_manifest") {
      event.returnValue = manifest
      return
    }

    windows.forEach((window) => {
      if(event.sender == window.webContents) { return }
      window.webContents.send(ipcChannel, message)
    })
  }
}

class IpcRouter {
  constructor(ipcChannel, manifest, backgroundWindow) {
    Object.assign(this, {ipcChannel, manifest})

    this.windows = new Set()
    this.windows.add(backgroundWindow)
    this._rebuildResponder()

    ipcMain.on(ipcChannel, (...args) => this.responder(...args))
  }

  // TODO: Seperate test for this
  _rebuildResponder() {
    this.responder = _.responderBuilder(
      this.ipcChannel,
      this.windows,
      this.manifest
    )
  }

  addContentWindows(windows) {
    windows.map(w => this.windows.add(w))
    this._rebuildResponder()
  }

  addContentWindow(window) {
    this.windows.add(window)
    this._rebuildResponder()
  }

  removeContentWindow(window) {
    this.windows.delete(window)
    this._rebuildResponder()
  }
}

module.exports = {
  config: _,
  IpcRouter: IpcRouter
}
