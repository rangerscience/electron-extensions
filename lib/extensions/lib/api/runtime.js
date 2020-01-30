const { ipcRenderer } = require('electron');

const { Event } = require("../event.js")
const { Port, ConnectMessageFor } = require("../port.js")

const _ = {}


// TODO: During CR, this was broke, but tests are passing....?
_.connectBuilder = (ipcChannel) => {
  return (extensionId, connectionInfo) => {
    const port = new Port({
      name: connectionInfo.name,
      ipcChannel: ipcChannel,
      extensionId: extensionId
    })

    ipcRenderer.send(ipcChannel, ConnectMessageFor(port)) // todo: should maybe be a member on the port...

    return port
  }
}

// TODO: Could be DRY'd
// Note: Only available to background scripts
_.onMessageExternalBuilder = (ipcChannel, extensionId) => {
  const onMessageExternal = new Event()

  ipcRenderer.on(ipcChannel, (_event, message) => {
    const { envelope, payload } = message

    if(
      envelope.extensionId != extensionId ||
      envelope.eventType != "message_external" ||
      envelope.portId
    ) { return false }

    onMessageExternal.emit(payload)
  })

  return onMessageExternal
}

// Note: Only available to background scripts...?
_.onConnectExternalBuilder = (ipcChannel, extensionId) => {
  const onConnectExternal = new Event()

  ipcRenderer.on(ipcChannel, (_event, message) => {
    const { envelope, payload } = message

    if(
      envelope.extensionId != extensionId ||
      envelope.eventType != "connect_external"
    ) { return false }

    const port = new Port({
      ipcChannel: ipcChannel,
      extensionId: extensionId,
      portId: payload.portId,
      name: payload.portName,
    })

    onConnectExternal.emit(port)
  })

  return onConnectExternal
}

class RuntimeApi {
  constructor(ipcChannel, manifest) {
    Object.assign(this, {
      lastError: null,
      connect: _.connectBuilder(ipcChannel),
    })

    if(manifest) { // aka, is a background script
      // TODO: Open a port where the port ID is the extension ID
      const extensionId = manifest.extensionId
      Object.assign(this, {
        onMessageExternal: _.onMessageExternalBuilder(ipcChannel, extensionId),
        onConnectExternal: _.onConnectExternalBuilder(ipcChannel, extensionId),
        getManifest: () => manifest
      })
    }
  }
}

module.exports = {
  config: _,
  RuntimeApi: RuntimeApi
}
