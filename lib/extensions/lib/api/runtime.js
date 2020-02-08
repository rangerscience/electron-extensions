const { ipcRenderer } = require('electron');
const { Event } = require("../event.js")
const { Port, ConnectMessageFor } = require("../port.js")

const _ = {}

let EXTENSION_ID

_.connectBuilder = (ipcChannel) => {
  return function connect(extensionId, connectionInfo) {
    const port = new Port({
      name: connectionInfo.name,
      ipcChannel: ipcChannel,
      extensionId: extensionId,
    })

    ipcRenderer.send(ipcChannel, ConnectMessageFor(port))

    return port
  }
}

_.onMessageExternalBuilder = (ipcChannel, extensionId) => {
  const onMessageExternal = new Event("onMessageExternal")

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

_.onMessageBuilder = (ipcChannel, extensionId) => {
  const onMessage = new Event("onMessage")

  ipcRenderer.on(ipcChannel, (_event, message) => {
    const { envelope, payload } = message

    if(
      envelope.extensionId != (extensionId || EXTENSION_ID) ||
      envelope.eventType != "message" ||
      envelope.portId
    ) { return false }

    onMessage.emit(payload)
  })

  return onMessage
}

// Note: Only available to background scripts...?
_.onConnectExternalBuilder = (ipcChannel, extensionId) => {
  const onConnectExternal = new Event("onConnectExternal")

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

_.sendMessageBuilder = (ipcChannel) => {
  return (extensionId, message, options = {}, responseCallback) => {
    if(options) {
      console.warn("sendMessage options not supported", options)
    }

    if(responseCallback) {
      console.warn("sendMessage responseCallback not supported")
    }

    ipcRenderer.send(ipcChannel, {
      envelope: {
        extensionId: extensionId || EXTENSION_ID,
        eventType: (extensionId == EXTENSION_ID) ? "message" : "message_external"
      },
      payload: message
    })
  }
}

_.onInstalledBuilder = (ipcChannel, extensionId) => {
  const onMessage = new Event("onInstalled")

  ipcRenderer.on(ipcChannel, (_event, message) => {
    const { envelope, payload } = message

    if(
      envelope.extensionId != (extensionId || EXTENSION_ID) || //
      envelope.eventType != "on_installed"
    ) { return false }

//payload should be {reason: "install"|"update"}
    onInstalled.emit(payload)
  })

  return onMessage
}

class RuntimeApi {
  constructor(ipcChannel, manifest) {
    Object.assign(this, {
      lastError: null,
      connect: _.connectBuilder(ipcChannel),
      setUninstallURL: (...args) => console.log("setUninstallURL does not make sense in a Comake context", ...args),
      sendMessage: _.sendMessageBuilder(ipcChannel),
        onMessage: _.onMessageBuilder(ipcChannel)
    })

    if(manifest) { // aka, is a background script
      const extensionId = manifest.extensionId
      Object.assign(this, {
        onInstalled: _.onInstalledBuilder(ipcChannel, extensionId),
        onMessageExternal: _.onMessageExternalBuilder(ipcChannel, extensionId),
        onConnectExternal: _.onConnectExternalBuilder(ipcChannel, extensionId),
        getManifest: () => manifest // TODO: This needs to be moved to the both, but the manifest in the contentScript is weird and takes special stuff...
      })
    }
  }
}

module.exports = {
  config: _,
  RuntimeApi: RuntimeApi
}
