// TODO: Load real electron?

const { Event } = require("../../lib/extensions/lib/event.js")

const _ = {}

_.mockEvent = {}
_.channels = {}

module.exports = {
  app: {
    getPath: jest.fn().mockReturnValue('tmp/')
  },
  ipcRenderer: {
    on: jest.fn((channel, handler) => {
      if( !_.channels[channel] ) { _.channels[channel] = new Event() }

      _.channels[channel].addListener(handler)
    }),

    send: jest.fn((channel, message) => {
      if(! _.channels[channel] ) { return }

      _.channels[channel].emit(_.mockEvent, message)
    }),

    removeListener: jest.fn((channel, handler) => {
      if(! _.channels[channel] ) { return }

      _.channels[channel].removeListener(handler)
    })
  }
}
