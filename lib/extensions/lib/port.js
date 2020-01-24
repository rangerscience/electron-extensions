const { ipcRenderer } = require('electron');

const uuidv4 = require('uuid/v4');

const { Event } = require('./event');

const _ = {}

_.messageBuilder = (port) => {
  return (message) => { return {
    envelope: {
      eventType: "message_external",
      extensionId: port.extensionId,
      portId: port.portId
    },
    payload: {
      message
    }
  }}
}

_.disconnectMessage = (port) => {return {
  envelope: {
    eventType: "disconnect_external",
    extensionId: port.extensionId,
    portId: port.portId
  },
  payload: {
    // ??
  }
}}

_.handleDisconnectBuilder = (port) => {
  return () => {
    port.disconnected = true
    ipcRenderer.removeAllListeners(port.portChannel)
  }
}

_.receiveMessageBuilder = (port) => {
  return (event, message) => {
    const { envelope, payload } = message

    if(envelope.portId != port.portId) { return }

    switch(envelope.eventType) {

      case "message_external":
        port.onMessage.emit(payload, port)
        break

      case "disconnect_external":
        port.handleDisconnect() // ensure this one runs first
        port.onDisconnect.emit(port)
        break;
    }
  }
}

function ConnectMessage(port) {return {
  envelope: {
    eventType: "connect_external",
    extensionId: port.extensionId,
    portId: port.portId
  },
  payload: {
    name: port.name,
    ipcChannel: port.ipcChannel,
    portChannel: port.portChannel
  }
}}

class Port {
  constructor(params) {
    const { name, ipcChannel, extensionId, portId=null } = params

    this.name = name
    this.ipcChannel = ipcChannel
    this.extensionId = extensionId // this might not be necessary?
    this.portId = portId || uuidv4()

    this.onDisconnect = new Event();
    this.onMessage = new Event();

    this.buildMessage = _.messageBuilder(this)
    this.recieveMessage = _.recieveMessageBuilder(this)
    this.handleDisconnect = _.handleDisconnectBuilder(this)

    ipcRenderer.on(portChannel, this.recieveMessage)
  }

  disconnect() {
    if (this.disconnected) { return }
    this.handleDisconnect()
    ipcRenderer.send(portChannel, _.disconnectMessage(this))
  }

  postMessage(message) {
    ipcRenderer.send(portChannel, _.buildMessage(message))
  }
}
