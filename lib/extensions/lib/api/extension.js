

/**
 * Stub class for the Chrome Extensions API
 * https://developer.chrome.com/extensions/extension
 *
 * @property {function} sendMessage - Deprecated function
 */
class ExtensionApi {
  constructor() { }

  sendMessage(...args) {
    console.warn("chrome.extensions.sendMessage is deprecated and unimplemented", ...args)
  }
}

module.exports = {
  ExtensionApi: ExtensionApi
}
