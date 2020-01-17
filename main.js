const { app, BrowserWindow } = require('electron')

const { config, RegisterFileProtocol, LoadExtension } = require("./lib/extensions.js")
// const { config, Preload } = require("./lib/extensions-preload.js")

const { getAllWebContents } = process.electronBinding('web_contents')

const Path = require("path")

function createWindow () {
  RegisterFileProtocol(__dirname)

  // Create the browser window.
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      preload: Path.join(__dirname, "lib/extensions-preload.js"),
    }
  })

  win.loadFile('index.html')

  win.webContents.openDevTools()

  const path = Path.join(__dirname, "vendor/hello_world/0.0.1/")
  const manifest = config.parseManifest("vendor/hello_world/0.0.1/")
  const html = config.getBackgroundHTML(manifest)

  // TODO: "matches"
  const injectHelloWorld = LoadExtension("vendor/hello_world/0.0.1/")
  injectHelloWorld(win)

  //console.log(html)

  //config.startBackgroundPage(manifest)

  //console.log(win.webContents.executeJavaScript)
  //win.webContents.executeJavaScript(`console.log(Extensions)`)

  // win.webContents.once('dom-ready', () =>
  //   win.webContents.executeJavaScript(`console.log(Extensions);`)
  // )

  //BrowserWindow.addExtension("./vendor/hello_world/0.0.1")
}

app.on('ready', createWindow)
