const { ipcMain, ipcRenderer, BrowserWindow } = require('electron');
const { config, IpcRouter } = require("../../../lib/extensions/lib/ipc.js")

const ipcChannel = "ipcChannel"

const manifest = {
  srcDirectory: "TODO",
  extensionId: "extensionId"
  // TODO: more?
}

function fixtures() {
  const backgroundWindow = new BrowserWindow({title: "backgroundWindow"})
  const contentWindows = [new BrowserWindow({title: "contentWindow"})]
  const windows = [].concat(backgroundWindow, contentWindows)
  const responder = config.responderBuilder(ipcChannel, windows, manifest)
  return {
    backgroundWindow,
    contentWindows,
    responder,
    event: {},
    message: { envelope: { extensionId: manifest.extensionId } }
  }
}

describe("responder", () => {
  test("it curries", () => {
    const backgroundWindow = new BrowserWindow()
    const contentWindows = [new BrowserWindow()]

    expect(() => config.responder(ipcChannel, backgroundWindow, contentWindows, manifest)).not.toThrow()
  })

  describe("responder", () => {

    test("ignores messages for other extensions", () => {
      const { responder, backgroundWindow, contentWindows, event } = fixtures()
      const message = { envelope: { extensionId: "otherExtension"} }

      responder(event, message)

      expect(backgroundWindow.webContents.send).not.toHaveBeenCalled()
      contentWindows.map((contentWindow) => {
        expect(contentWindow.webContents.send).not.toHaveBeenCalled()
      })
    })

    test("responds with manifest", () => {
      const { responder, backgroundWindow, contentWindows, event, message } = fixtures()
      message.envelope.eventType = "request_manifest"

      responder(event, message)

      expect(backgroundWindow.webContents.send).not.toHaveBeenCalled()
      contentWindows.map((contentWindow) => {
        expect(contentWindow.webContents.send).not.toHaveBeenCalled()
      })

      expect(event.returnValue).toBe(manifest)
    })

    test("forwards messages from background window to content windows", () => {
      const { backgroundWindow, contentWindows, responder, message } = fixtures()
      const event = { sender: backgroundWindow.webContents }

      responder(event, message)

      expect(backgroundWindow.webContents.send).not.toHaveBeenCalled()
      contentWindows.map((contentWindow) => {
        expect(contentWindow.webContents.send).toHaveBeenCalledWith("ipcChannel", message)
      })
    })

    test("forwards messages from contents window to background windows", () => {
      const { backgroundWindow, contentWindows, responder, message } = fixtures()
      const event = { sender: contentWindows[0].webContents }

      responder(event, message)

      expect(backgroundWindow.webContents.send).toHaveBeenCalledWith("ipcChannel", message)
      contentWindows.map((contentWindow) => {
        expect(contentWindow.webContents.send).not.toHaveBeenCalled()
      })
    })
  })
})

describe("IpcRouter", () => {
  test("it new's", () => {
    const { backgroundWindow, contentWindows } = fixtures()
    expect(new IpcRouter(ipcChannel, manifest, backgroundWindow, contentWindows))
  })

  describe("instance", () => {
    const { backgroundWindow, contentWindows } = fixtures()
    const responder = jest.fn()
    config.responder = () => responder
    const router = new IpcRouter(ipcChannel, manifest, backgroundWindow, contentWindows)

    test("message gets sent to responder", () => {
      const message = {}

      ipcMain.send("ipcChannel", message)

      expect(responder).toHaveBeenCalledWith({}, message)
    })
  })
})
