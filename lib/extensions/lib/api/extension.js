
class ExtensionApi {
  constructor() { }

  sendMessage(...args) {
    console.warn("chrome.extensions.sendMessage is deprecated and unimplemented", ...args)
  }
}

module.exports = {
  ExtensionApi: ExtensionApi
}
