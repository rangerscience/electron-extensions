const Path = require("path")

const { Event } = require("../../lib/extensions/lib/event.js")

const _ = {}

_.mockEvent = {}

class MockIpcRenderer{
  constructor(){
    Object.assign(this, {
      channels: {},
      on: jest.fn((channel, handler) => {
        if( !this.channels[channel] ) { this.channels[channel] = new Event() }

        this.channels[channel].addListener(handler)
      }),

      send: jest.fn((channel, message) => {
        if(!this.channels[channel] ) { return }

        this.channels[channel].emit(_.mockEvent, message)
      }),

      _sendSyncResponse: "response",

      sendSync: jest.fn((...args) => {
        return this._sendSyncResponse
      }),

      removeListener: jest.fn((channel, handler) => {
        if(! this.channels[channel] ) { return }

        this.channels[channel].removeListener(handler)
      })
    })
  }
}

// TODO:Copypasta
class MockIpcMain {
  constructor() {
    Object.assign(this, {
      channels: {},
      on: jest.fn((channel, handler) => {
        if( !this.channels[channel] ) { this.channels[channel] = new Event() }

        this.channels[channel].addListener(handler)
      }),
      send: jest.fn((channel, message) => {
        if(!this.channels[channel] ) { return }

        this.channels[channel].emit(_.mockEvent, message)
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
      on: (event, callback) => {
        if(event != 'context-menu') { callback() }
      },
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

Object.assign(_, {
  MockIpcRenderer,
  MockIpcMain,
  MockBrowserWindow,
  MockProtocol
})

module.exports = {
  config: _,
  app: { getPath: jest.fn().mockReturnValue('tmp/') },
  ipcRenderer: new MockIpcRenderer(),
  ipcMain: new MockIpcMain(),
  BrowserWindow: MockBrowserWindow,
  protocol: new MockProtocol()
}
