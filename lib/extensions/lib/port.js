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
    payload: message
  }}
}

function ConnectMessageFor(port) {return {
  envelope: {
    eventType: "connect_external",
    extensionId: port.extensionId,
  },
  payload: {
    portId: port.portId,
    portName: port.name,
  }
}}

_.disconnectMessageFor = (port) => {return {
  envelope: {
    eventType: "disconnect_external",
    extensionId: port.extensionId,
    portId: port.portId
  },
  payload: port.name,
}}

_.receiveMessageBuilder = (port) => {
  return (_event, message) => {
    const { envelope, payload } = message

    if(envelope.portId != port.portId) { return false }

    switch(envelope.eventType) {

      case "message_external":
        port.onMessage.emit(payload, port)
        break

      case "disconnect_external":
        port._receiveDisconnect()
        break;
    }

    return true
  }
}

class Port {
  constructor(params) {
    const { name, ipcChannel, extensionId, portId=null } = params

    this.name = name
    this.ipcChannel = ipcChannel
    this.extensionId = extensionId // this might not be necessary?
    this.portId = portId || uuidv4()

    this.onDisconnect = new Event();
    this.onMessage = new Event();

    this._buildMessage = _.messageBuilder(this)
    this._recieveMessage = _.receiveMessageBuilder(this)

    ipcRenderer.on(ipcChannel, this._recieveMessage)
  }

  _receiveDisconnect() {
    if (this.disconnected) { return } else { this.disconnected = true }
    ipcRenderer.removeListener(this.ipcChannel, this._recieveMessage)
    this.onDisconnect.emit(this)
  }

  disconnect() {
    if (this.disconnected) { return } else { this.disconnected = true }
    ipcRenderer.send(this.ipcChannel, _.disconnectMessageFor(this))
    ipcRenderer.removeListener(this.ipcChannel, this._recieveMessage)
  }

  postMessage(message) {
    ipcRenderer.send(this.ipcChannel, this._buildMessage(message))
  }
}

module.exports = {
  config: _,
  ConnectMessageFor: ConnectMessageFor,
  Port: Port
}
