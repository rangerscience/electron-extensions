const { ipcRenderer } = require('electron');

const { BuildStorageApi } = require("./api/storage.js")
const { BuildAlarmsApi } = require("./api/alarms.js")
const { BuildRuntimeApi } = require("./api/runtime.js")

const { Port } = require("./lib/port.js")

const _ = {}

/* notes / thoughts

the injected JS must run in an isolated context AND the injected chrome API must be
build with knowledge of the specific extension, since things like storage must
be scopped to that particular extension

*/
_.getIpcChannelName = (extensionName) => {
  return extensionName.replace(/\W/,"_")
}

_.parseConnect = (envelope, payload) => {
  return new Port(payload)
}

_.parseMessage = (envelope, payload) => {
  return {
    // TODO
  }
}

_.newMessageRouter = (chromeApi, extensionId) => {
  return (envelope, payload) => {
    switch(envelope.eventType) {
      case "connect_external":
        chromeApi.onConnectExternal.emit(
          _.parseConnect(envelope, payload)
        )
        break
      case "message_external":
        chromeApi.onMessageExternal.emit(
          _.parseMessage(envelope, payload)
        )
        break
    }
  }
}

// TODO: Add the extensionID to the manifest

function BackgroundPreloadBuilder(ipcChannel) {
  return (manifest) => {
    const chromeApi = {
      storage: BuildStorageApi(manifest.name),
      runtime: BuildRuntimeApi(ipcChannel),
      alarms: BuildAlarmsApi(),
    }

    const messageRouter = _.newMessageRouter(chromeApi, manifest.extensionId)

    ipcRenderer.on(ipcChannel, messageRouter)
  }
}

function Preload(extensionId, isBackgroundPage) {
  const ipcChannel = _.getIpcChannelName(extensionId)

  const chromeApi = {
      storage: BuildStorageApi(extensionId),
      runtime: BuildRuntimeApi(ipcChannel),
      alarms: BuildAlarmsApi(),
  }

  const messageRouter = _.newMessageRouter(chromeApi,  manifest.extensionId)
  ipcRenderer.on(ipcChannel, messageRouter);

  if(isBackgroundPage) {
  } else {
  }

  process.once('loaded', () => {
    global.chrome = chromeApi
  })
}

module.exports = {
  config: _,
  Preload: Preload
}
