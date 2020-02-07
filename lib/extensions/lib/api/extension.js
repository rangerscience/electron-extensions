
class ExtensionApi {
  constructor() { }

  sendMessage() {
    console.warn("chrome.extensions.sendMessage is deprecated and unimplemented")
  }
}

module.exports = {
  ExtensionApi: ExtensionApi
}
