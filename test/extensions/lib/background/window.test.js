const Path = require('path')

const { ipcRenderer, BrowserWindow } = require("electron")
const ContextMenu = require('electron-context-menu');

const { config, LaunchBackgroundPage } = require("../../../../lib/extensions/lib/background/window.js")

const manifest = {
  extensionId: "extensionId",
  srcDirectory: Path.join(__dirname, "../../../fixtures/extension/")
}

test("newBackgroundWindow produces a window", () => {
  expect(config.newBackgroundWindow(manifest)).toBeInstanceOf(BrowserWindow)
})

// Running into issues mocking this properly
// test("addDevTools opens devTools on window", () => {
//   const window = new BrowserWindow()
//   expect(config.addDevTools(window)).not.toThrow()
// })

describe("getBackgroundHTML", () =>{
  test("with background page returns slurped page", () => {
    const _manifest = Object.assign({}, manifest, {
      background: { page: "background.html" }
    })
    expect(config.getBackgroundHTML(_manifest)).toBe("<html><body>Background Page</body></html>\n")
  })

  test("with background scripts returns assembled HTML", () => {
    const _manifest = Object.assign({}, manifest, {
      background: { scripts: ["background.js"] }
    })
    expect(config.getBackgroundHTML(_manifest)).toBe("<html><body><script src=\"./background.js\"></script></body></html>")
  })
})

describe("LaunchBackgroundPage", () => {
  const _manifest = Object.assign({}, manifest, {
    background: { page: "background.html" }
  })

  test("launches a window", () => {
    expect(LaunchBackgroundPage(_manifest)).toBeInstanceOf(BrowserWindow)
  })
})
