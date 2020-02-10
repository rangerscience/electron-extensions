const Url = require('url')

const { ipcRenderer } = require('electron');
const { Event } = require("../event.js")
const { Port, ConnectMessageFor } = require("../port.js")

const _ = {}

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
      envelope.extensionId != extensionId ||
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

_.sendMessageBuilder = (ipcChannel, myExtensionId) => {
  return (extensionId, message, options, responseCallback) => {

    if(options) {
      console.warn("sendMessage options not supported", options)
    }

    if(responseCallback) {
      console.warn("sendMessage responseCallback not supported")
    }

    ipcRenderer.send(ipcChannel, {
      envelope: {
        extensionId: extensionId,
        eventType: (extensionId == myExtensionId) ? "message" : "message_external"
      },
      payload: message
    })
  }
}

_.sendMessageArgumentDecomposer = (sendMessage, extensionId) => {
  // TODO: How the fuck does Chrome do this?
  return (...args) => {
    if (args.length === 1) {
      const [message] = args
      sendMessage(extensionId, message)
    } else if (
      args[1].includeTlsChannelId
    ) {
      const [message, options, responseCallback] = args
      sendMessage(extensionId, message, options, responseCallback)
    } else if (
      // Note: Know that there's no options hash in arg[1]
      args[1] instanceof Function
    ) {
      const [message, responseCallback] = args
      sendMessage(extensionId, message, null, responseCallback)
    } else if (
      // Note: Arg 1 is neither options nor callback, so it must be message
      //  and thus arg[0] is a message. But is arg[2] options?
      args[2].includeTlsChannelId
    ) {
      const [extensionId, message, options, responseCallback] = args
      sendMessage(extensionId, message, options, responseCallback)
    } else {
      const [extensionId, message, responseCallback] = args
      sendMessage(extensionId, message, null, responseCallback)
    }
  }
}

_.onInstalledBuilder = (ipcChannel, extensionId) => {
  const onMessage = new Event("onInstalled")

  ipcRenderer.on(ipcChannel, (_event, message) => {
    const { envelope, payload } = message

    if(
      envelope.extensionId != extensionId || //
      envelope.eventType != "on_installed"
    ) { return false }

//payload should be {reason: "install"|"update"}
    onInstalled.emit(payload)
  })

  return onMessage
}

_.getUrl = (extensionId) => {
  return (path) => {
    const canonicalPath = (
      path && path.startsWith('/')
    ) ? path : `/${path || ''}`

    return url.format({
      protocol: 'chrome-extension',
      slashes: true,
      hostname: extensionId,
      pathname: canonicalPath
    })
  }
}

class RuntimeApi {
  constructor(ipcChannel, manifest) {
    Object.assign(this, {
      lastError: null,
      connect: _.connectBuilder(ipcChannel),
      setUninstallURL: (...args) => console.log("setUninstallURL does not make sense in a Comake context", ...args),
      onMessage: _.onMessageBuilder(ipcChannel)
    })

    if(manifest) {
      const extensionId = manifest.extensionId
      Object.assign(this, {
        getUrl: _.getUrl(extensionId),
        onInstalled: _.onInstalledBuilder(ipcChannel, extensionId),
        onMessageExternal: _.onMessageExternalBuilder(ipcChannel, extensionId),
        onConnectExternal: _.onConnectExternalBuilder(ipcChannel, extensionId),
        sendMessage: _.sendMessageArgumentDecomposer(
          _.sendMessageBuilder(ipcChannel, extensionId),
          extensionId
        ),
        getManifest: () => manifest // TODO: This needs to be moved to the both, but the manifest in the contentScript is weird and takes special stuff...
      })
    }
  }
}

module.exports = {
  config: _,
  RuntimeApi: RuntimeApi
}
