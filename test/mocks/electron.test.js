const { config, app, ipcRenderer, ipcMain, BrowserWindow, protocol } =
  require("./electron.js")

describe("mock event", () => {
  // Nothing else to check about it atm?
  test("it exists", () => {expect(config.mockEvent).toBeDefined()})
})

describe("mock IPC responder", () => {
  describe("on",  () => {
    test("it creates the channel if it does not exist", () => {
      const ipc = new config.MockIpcRenderer()
      expect(ipc.channels["channel"]).not.toBeDefined()
      ipc.on("channel", jest.fn())
      expect(ipc.channels["channel"]).toBeDefined()
    })
  })

  describe("send",  () => {
    test("it does nothing if the channel does not exist", () => {
      const ipc = new config.MockIpcRenderer()
      expect(() => ipc.send("channel", jest.fn())).not.toThrow()
    })
  })

  describe("removeListener",  () => {
    test("it does nothing if the channel does not exist", () => {
      const ipc = new config.MockIpcRenderer()
      expect(() => ipc.removeListener("channel", jest.fn())).not.toThrow()
    })
  })
})

describe("mock IPC main", () => {
  describe("on",  () => {
    test("it creates the channel if it does not exist", () => {
      const ipc = new config.MockIpcMain()
      expect(ipc.channels["channel"]).not.toBeDefined()
      ipc.on("channel", jest.fn())
      expect(ipc.channels["channel"]).toBeDefined()
    })
  })

  describe("send",  () => {
    test("it does nothing if the channel does not exist", () => {
      const ipc = new config.MockIpcMain()
      expect(() => ipc.send("channel", jest.fn())).not.toThrow()
    })
  })
})
