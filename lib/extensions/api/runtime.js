const { ipcRenderer } = require('electron');

const { Event } = require("../lib/event.js")
const { Port, ConnectMessage } = require("../lib/port.js")

const _ = {}

// TODO: Copypasta
_.getIpcChannelName = (extensionName) => {
  return extensionName.replace(/\W/,"_")
}

_.connect = (ipcChannel) => {
  return (extensionId, connectionInfo) => {
    const port = new Port({
      name: connectionInfo.name,
      ipcChannel: extensionId
    })

    ipcRenderer.send(extensionId, ConnectMessage(port))

    return port
  }
}

function BuildRuntimeApi(ipcChannel) {
  return {
    lastError: null,
    onMessageExternal: new Event(),
    onConnectExternal: new Event(),
    connect: _.connectBuilder(ipcChannel),
    getManifest: () => { return {} } // TODO
  }
}

module.exports = {
  config: _,
  BuildRuntimeApi: BuildRuntimeApi
}
