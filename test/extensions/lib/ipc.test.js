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

    expect(() => config.responderBuilder(ipcChannel, backgroundWindow, contentWindows, manifest)).not.toThrow()
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
    expect(new IpcRouter(ipcChannel, manifest, backgroundWindow))
  })

  describe("instance", () => {
    const { backgroundWindow, contentWindows } = fixtures()
    const og_responderBuilder = config.responderBuilder

    test("responder is added to ipcMain", () => {
      const responder = jest.fn()
      config.responderBuilder = jest.fn(() => responder)
      const router = new IpcRouter(ipcChannel, manifest, backgroundWindow, contentWindows)

      expect(ipcMain.on).toHaveBeenCalledWith(ipcChannel, expect.anything())

      config.responderBuilder = og_responderBuilder
    })

    test("responder is updated with new windows", () => {
      const responder = jest.fn()
      config.responderBuilder = jest.fn(() => responder)
      const router = new IpcRouter(ipcChannel, manifest, backgroundWindow, contentWindows)

      router.addContentWindows(contentWindows)

      expect(config.responderBuilder).toHaveBeenCalledWith(
        ipcChannel,
        new Set([].concat([backgroundWindow], contentWindows)),
        manifest
      )

      config.responderBuilder = og_responderBuilder
    })

    test("message gets forwarded to responder", () => {
      const responder = jest.fn()
      config.responderBuilder = jest.fn(() => responder)
      const router = new IpcRouter(ipcChannel, manifest, backgroundWindow, contentWindows)
      router.addContentWindow(contentWindows[0]) // todo: add a test for just this part

      const message = { envelope: { extensionId: "extensionId" } }

      ipcMain.send(ipcChannel, message)

      expect(responder).toHaveBeenCalledWith({}, message)

      config.responderBuilder = og_responderBuilder
    })

    test("window can be removed", () => {
      const responder = jest.fn()
      config.responderBuilder = jest.fn(() => responder)
      const router = new IpcRouter(ipcChannel, manifest, backgroundWindow, contentWindows)

      router.addContentWindows(contentWindows)
      router.removeContentWindow(contentWindows[0])

      expect(config.responderBuilder).toHaveBeenCalledWith(
        ipcChannel,
        new Set([].concat([backgroundWindow])), // TODO: contentWindows.split...
        manifest
      )


      config.responderBuilder = og_responderBuilder
    })
  })
})
