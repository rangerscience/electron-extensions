const Url = require('url')

const { ipcRenderer } = require('electron');
const { Event } = require("../event.js")
const { Port, ConnectMessageFor } = require("../port.js")


/**
 * Partial implimentation of the Chrome runtime API
 * https://developer.chrome.com/extensions/runtime
 *
 * Some parts of this API are only accessible to content scripts or background
 * scripts, and some parts are also accessible to web pages.
 *
 * The rough design principle is that all messages are sent along one electron
 * IPC channel, and then each listener knows how to determine is a message is
 * for that listener, or not. This information is stored in the `envelope` part
 * of the IPC message, while the actual message is stored in `payload`
 */

const _ = {}

/**
 * connectBuilder - Currying function to produce Port connections between
 *   extensions, or content and web page scripts and extensions
 *
 * @param  {string} ipcChannel Electron channel to use for underlying communication
 * @param  {string} myExtensionId The ID of this extension
 * @return {function} Curried function for opening ports to other extensions
 */
_.connectBuilder = function connectBuilder(ipcChannel, myExtensionId) {

  /**
   * connect - Opens a Port connection the background page of an extension
   *
   * @param {string} [extensionId] The Chrome Store ID of the extension to connect to
   * @param {Object} [connectionInfo] Some descriptive informatio about the connection
   * @param {string} [connectionInfo.name] A name for the port
   * @return {Port} A port object to manage communications
   *
   * @modifies Sends a connection message along the IPC channel to the handlers
   *  in the Main process
   */
  return function connect(extensionId, connectionInfo) {
    const port = new Port({
      name: connectionInfo && connectionInfo.name,
      ipcChannel: ipcChannel,
      extensionId: extensionId || myExtensionId,
    })

    ipcRenderer.send(ipcChannel, ConnectMessageFor(port))

    return port
  }
}

/**
 * onMessageExternalBuilder - Sets up recieving messages from other
 *   extensions or web pages
 *
 * @param  {string} ipcChannel  Electron channel to use for underlying communication
 * @param  {string} extensionId Message for this extension will be received
 * @return {Event} Event where received messages will be emitted
 *
 * @modifies Adds a listener to the ipcChannel filtering for messages to this
 *   extension
 */
_.onMessageExternalBuilder = function onMessageExternalBuilder(ipcChannel, extensionId) {
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

/**
 * onMessageBuilder - Sets up recieving messages from other scripts of the same
 *   extension (aka, the content scripts)
 *
 * @param  {string} ipcChannel  Electron channel to use for underlying communication
 * @param  {string} extensionId Message for this extension will be received
 * @return {Event} Event where received messages will be emitted
 *
 * @modifies Adds a listener to the ipcChannel filtering for non-external
 *   messages to this extension
 */
_.onMessageBuilder = function onMessageBuilder(ipcChannel, extensionId) {
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

/**
 * onConnectExternalBuilder - Sets up the receiving of external connection
 *
 * @param  {string} ipcChannel  Electron channel to use for underlying communication
 * @param  {string} extensionId Message for this extension will be received
 * @return {Event} Event where Ports built from the received messages will be emitted
 *
 * @modifies Adds a listener to the ipcChannel filtering for external connection
 *   messages to this extension
 */
_.onConnectExternalBuilder = function onConnectExternalBuilder(ipcChannel, extensionId) {
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

/**
 * sendMessageBuilder - Currying function for sending messages to other scripts
 *   of the same extension, or a different extension
 *
 * @param  {string} ipcChannel  Electron channel to use for underlying communication
 * @param  {string} myExtensionId The ID of this extension
 * @return {function} Function for sending messages to this extension
 */
_.sendMessageBuilder = function sendMessageBuilder(ipcChannel, myExtensionId) => {

  /**
   * sendMessage - Sends a message to other scripts of the same extension, or a
   *   different extension
   *
   * @param  {string} [extensionId] The extension to send this message to
   * @param  {any} message The message to be sent (any JSON-ifiable object)
   * @param  {Object} [options] (unsupported)
   * @param  {function} [responseCallback] (unsupported)
   *
   * @modifies Sends a specially formatted message to the Main process along the
   *   IPC channel
   */
  return function sendMessage(extensionId, message, options, responseCallback) {

    if(options) { console.warn("sendMessage options not supported", options) }
    if(responseCallback) { console.warn("sendMessage responseCallback not supported") }

    ipcRenderer.send(ipcChannel, {
      envelope: {
        extensionId: extensionId,
        eventType: (extensionId == myExtensionId) ? "message" : "message_external"
      },
      payload: message
    })
  }
}


/**
 * sendMessageArgumentDecomposer - Currying shim function to allow for multiple optional
 *  positional parameters to sendMessage
 *
 * @param  {function} sendMessage The underlying sendMessage function
 * @param  {type} extensionId The default extensionId (the ID of the current extension)
 * @return {function} A wrapped sendMessage function that can take multiple optional
 *   positional parameters
 */
_.sendMessageArgumentDecomposer = sendMessageArgumentDecomposer(sendMessage, extensionId) {
  return (...args) => {
    if (
      // Only one parameter, must be a message
      args.length === 1
    ) {
      const [message] = args
      sendMessage(extensionId, message)
    } else if (
      // Second parameter is the options hash; first must thus be message
      args[1].includeTlsChannelId
    ) {
      const [message, options, responseCallback] = args
      sendMessage(extensionId, message, options, responseCallback)
    } else if (
      // Second parameter is a callback function; first must be message, and no options hash
      args[1] instanceof Function
    ) {
      const [message, responseCallback] = args
      sendMessage(extensionId, message, null, responseCallback)
    } else if (
      // Third parameter is options hash; second must be message and first an extensionId
      args[2].includeTlsChannelId
    ) {
      const [extensionId, message, options, responseCallback] = args
      sendMessage(extensionId, message, options, responseCallback)
    } else {
      // Only case left is everything but the options hash
      const [extensionId, message, responseCallback] = args
      sendMessage(extensionId, message, null, responseCallback)
    }
  }
}

/**
 * onInstalledBuilder - Sets up subscribing to extension installed events
 *
 * @param  {string} ipcChannel Electron channel to use for underlying communication
 * @param  {type} extensionId The ID of this extension
 * @return {Event} Event where onInstalled events will be emitted
 *
 * @modifies Adds a reciever to the ipc channel listening for onInstalled messages
 *   for this extension
 */
_.onInstalledBuilder = function onInstalledBuilder(ipcChannel, extensionId) {
  const onMessage = new Event("onInstalled")

  ipcRenderer.on(ipcChannel, (_event, message) => {
    const { envelope, payload } = message

    if(
      envelope.extensionId != extensionId ||
      envelope.eventType != "on_installed"
    ) { return false }

    onInstalled.emit(payload)
  })

  return onMessage
}

/**
 * getUrl - Currying function for getting absolute paths to extension resources
 *
 * @param  {string} extensionId The ID of the extension whose resources will be accessed
 * @return {function} Curried function for getting an absolute extension path from a relative path
 */
_.getUrl = function getUrl(extensionId) {

  /**
   * Function that converts a relative path to an absolute path to resources
   *   from this extension
   *
   * @param {string} path - Relative path to the resource in the extension
   * @return {string} A "absolute" extension path, of the form:
   *   chrome-extension://<EXTENSION_ID>/<path>
   */
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


/**
 * Class containing a runtime API
 *
 * @property lastError (unsupported)
 * @property {function} connect Opens a connection to the background page of an extension.
 * @property {function} setUninstallURL (unsupported)
 * @property {Event} onMessage Event for subscribing to messages sent to this
 *    extension, by this extension.
 * @property {function} getUrl Gets the absolute path to an extension's resource.
 * @property {Event} onInstalled Even for subscribing to events thrown when this.
 *    extension is installed `{reason: "install"}` or updated `{reason: "updated"}`.
 * @property {Event} onMessageExternal Event for subscribing to external message
 *   sent to this extension, by other extensions or by web pages.
 * @property {Event} onConnectExternal Event for subscribing to ports opened to this
 *   extension, by other extensions or by web pages.
 * @property {function} sendMessage Function to send messages to this or other
 *   extensions
 * @property {object} getManifest Returns the manifest for this extension
 */
class RuntimeApi {

  /**
   * constructor - Builds a new RuntimeApi, depending on presence of a manifest
   *
   * @param  {string} ipcChannel Electron channel to use for underlying communication
   * @param  {Object} [manifest] Manifest for this extension. Must have extensionId property
   * @return {RuntimeApi} An instance of the API
   */
  constructor(ipcChannel, manifest) {
    Object.assign(this, {
      lastError: null,
      setUninstallURL: (...args) => console.log("setUninstallURL does not make sense in a Comake context", ...args),
    })

    if(manifest) {
      const extensionId = manifest.extensionId
      Object.assign(this, {
        connect: _.connectBuilder(ipcChannel, extensionId),
        onMessage: _.onMessageBuilder(ipcChannel, extensionId),
        getUrl: _.getUrl(extensionId),
        onInstalled: _.onInstalledBuilder(ipcChannel, extensionId),
        onMessageExternal: _.onMessageExternalBuilder(ipcChannel, extensionId),
        onConnectExternal: _.onConnectExternalBuilder(ipcChannel, extensionId),
        sendMessage: _.sendMessageArgumentDecomposer(
          _.sendMessageBuilder(ipcChannel, extensionId),
          extensionId
        ),
        getManifest: () => manifest
      })
    } else {
      Object.assign(this, {
        connect: _.connectBuilder(ipcChannel, null),
      }
    }
  }
}

module.exports = {
  config: _,
  RuntimeApi: RuntimeApi
}
