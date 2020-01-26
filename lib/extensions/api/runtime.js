const { ipcRenderer } = require('electron');

const { Event } = require("../lib/event.js")
const { Port, ConnectMessageFor } = require("../lib/port.js")

const _ = {}

_.connectBuilder = (ipcChannel) => {
  return (extensionId, connectionInfo) => {
    const port = new Port({
      name: connectionInfo.name,
      ipcChannel: extensionId
    })

    ipcRenderer.send(extensionId, ConnectMessageFor(port)) // todo: should maybe be a member on the port...

    return port
  }
}

// TODO: Could be DRY'd
// Note: Only available to background scripts
_.onMessageExternalBuilder = (ipcChannel, extensionId) => {
  const eventer = new Event()

  ipcRenderer.on(ipcChannel, (_event, message) => {
    const { envelope, payload } = message

    if(
      envelope.extensionId != extensionId ||
      envelope.eventType != "message_external" ||
      envelope.portId
    ) { return false }

    eventer.emit(payload)
  })

  return eventer
}

// Note: Only available to background scripts...?
_.onConnectExternalBuilder = (ipcChannel, extensionId) => {
  const eventer = new Event()

  ipcRenderer.on(ipcChannel, (_event, message) => {
    const { envelope, payload } = message

    if(
      envelope.extensionId != extensionId ||
      envelope.eventType != "connect_external"
    ) { return false }

    const port = new Port({
      ipcChannel: ipcChannel,
      extensionId: extensionId,
      portId: envelope.portId,
      name: payload,
    })

    eventer.emit(port)
  })

  return eventer
}

class RuntimeApi {
  constructor(ipcChannel, manifest) {
    Object.assign(this, {
      lastError: null,
      connect: _.connectBuilder(ipcChannel),
    })

    if(manifest) {
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
