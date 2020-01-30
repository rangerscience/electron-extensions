const Path = require("path")

const { Event } = require("../../lib/extensions/lib/event.js")

const _ = {}

_.mockEvent = {}

class MockIpcRenderer{
  constructor(){
    const channels = {}
    Object.assign(this, {
      on: jest.fn((channel, handler) => {
        if( !channels[channel] ) { channels[channel] = new Event() }

        channels[channel].addListener(handler)
      }),

      send: jest.fn((channel, message) => {
        if(!channels[channel] ) { return }

        channels[channel].emit(_.mockEvent, message)
      }),

      _sendSyncResponse: "response",

      sendSync: jest.fn((...args) => {
        return this._sendSyncResponse
      }),

      removeListener: jest.fn((channel, handler) => {
        if(! channels[channel] ) { return }

        channels[channel].removeListener(handler)
      })
    })
  }
}

// TODO:Copypasta
class MockIpcMain {
  constructor() {
    const channels = {}
    Object.assign(this, {
      on: jest.fn((channel, handler) => {
        if( !channels[channel] ) { channels[channel] = new Event() }

        channels[channel].addListener(handler)
      }),
      send: jest.fn((channel, message) => {
        if(!channels[channel] ) { return }

        channels[channel].emit(_.mockEvent, message)
      }),
    })
  }
}

class MockBrowserWindow {
  constructor(...args) {
    Object.assign(this, args)
    this.webContents = {
      openDevTools: jest.fn(),
      executeJavaScript: jest.fn(),
      send: jest.fn(),
      on: (_event, callback) => callback(),
    }

    this.loadURL = jest.fn()
  }
}

class MockProtocol {
  constructor() {
    this.registerFileProtocol = jest.fn()
    this.interceptFileProtocol = jest.fn()
  }
}

module.exports = {
  app: { getPath: jest.fn().mockReturnValue('tmp/') },
  ipcRenderer: new MockIpcRenderer(),
  ipcMain: new MockIpcMain(),
  BrowserWindow: MockBrowserWindow,
  protocol: new MockProtocol(),

  //BrowserWindow: _.app.electron.BrowserWindow
}
