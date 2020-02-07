const { ipcRenderer } = require('electron');
const { Event } = require("../event.js")
const { Port, ConnectMessageFor } = require("../port.js")

const _ = {}

let EXTENSION_ID

// TODO: During CR, this was broke, but tests are passing....?
_.connectBuilder = (ipcChannel) => {
  return function connect(extensionId, connectionInfo) {
    const port = new Port({
      name: connectionInfo.name,
      ipcChannel: ipcChannel,
      extensionId: extensionId,
    })

    // ipcRenderer.on(ipcChannel, port._receiveMessage) todo
    ipcRenderer.send(ipcChannel, ConnectMessageFor(port)) // todo: should maybe be a member on the port...

    return port
  }
}

// TODO: Could be DRY'd
// Note: Only available to background scripts
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

// TODO: Could be DRY'd
// TODO: available to content scripts :P
// TODO: sendResponse - which isn't yet used by an extension
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

    // ipcRenderer.on(ipcChannel, port._receiveMessage) todo

    onConnectExternal.emit(port)
  })

  return onConnectExternal
}

// TODO: ...Make this background-script safe...?
// https://developer.chrome.com/extensions/runtime#method-sendMessage
// TODO: response callback
_.sendMessageBuilder = (ipcChannel) => {
  return (extensionId, message, options, responseCallback) => {
    if(options.includeTlsChannelId) {
      console.warn("TLS Channels not supported")
    }

    ipcRenderer.send(ipcChannel, {
      envelope: {
        extensionId: extensionId || EXTENSION_ID, // TODO: refactor
        eventType: (extensionId == EXTENSION_ID) ? "message" : "message_external"
      },
      payload: message
    })
  }
}

// TODO: product design, when does this get installed?
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
    })

    if(manifest) { // aka, is a background script
      // TODO: Open a port where the port ID is the extension ID
      const extensionId = manifest.extensionId
      Object.assign(this, {
        onInstalled: _.onInstalledBuilder(ipcChannel, extensionId),
        onMessageExternal: _.onMessageExternalBuilder(ipcChannel, extensionId),
        onConnectExternal: _.onConnectExternalBuilder(ipcChannel, extensionId),
        getManifest: () => manifest // TODO: This needs to be moved to the both
      })
    } else {
      // TODO: Which of these need to be / can be moved to both?
      Object.assign(this, {
        sendMessage: _.sendMessageBuilder(ipcChannel),
        onMessage: _.onMessageBuilder(ipcChannel)
      })
    }
  }
}

module.exports = {
  config: _,
  RuntimeApi: RuntimeApi
}
