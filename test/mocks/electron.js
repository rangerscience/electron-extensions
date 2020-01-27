// TODO: Load real electron?

const { Event } = require("../../lib/extensions/lib/event.js")

const _ = {}

_.mockEvent = {}
_.channels = {}

class MockIpcRenderer{
  constructor(){
    Object.assign(this, {
      on: jest.fn((channel, handler) => {
        if( !_.channels[channel] ) { _.channels[channel] = new Event() }

        _.channels[channel].addListener(handler)
      }),

      send: jest.fn((channel, message) => {
        if(! _.channels[channel] ) { return }

        _.channels[channel].emit(_.mockEvent, message)
      }),

      _sendSyncResponse: "response",

      sendSync: jest.fn((...args) => {
        console.log("sendSync called", )
        return this._sendSyncResponse
      }),

      removeListener: jest.fn((channel, handler) => {
        if(! _.channels[channel] ) { return }

        _.channels[channel].removeListener(handler)
      })
    })
  }
}

module.exports = {
  app: { getPath: jest.fn().mockReturnValue('tmp/') },
  ipcRenderer: new MockIpcRenderer()
}
