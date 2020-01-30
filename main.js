const { app, BrowserWindow, protocol, session } = require('electron')

const { LoadExtension } = require("./lib/extensions").Root(__dirname)
// const { config, Preload } = require("./lib/extensions-preload.js")

const { getAllWebContents } = process.electronBinding('web_contents')

const Path = require("path")

function createWindow () {

  // Create the browser window.
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      preloads: [
        Path.join(__dirname, "lib/extensions/contentScripts/preload_script.js"),
      ]
    }
  })

  //console.log("sess", win.webContents.session === session.defaultSession)
  console.log("win sess protocol", win.webContents.session.protocol.isProtocolHandled('chrome-extension'))

  //win.loadURL('https://www.reddit.com/r/rational/submit')
  win.loadURL('https://drive.google.com/drive/u/0/my-drive')

  win.webContents.openDevTools()

  // const path = Path.join(__dirname, "vendor/hello_world/0.0.1/")
  // const manifest = config.parseManifest("vendor/hello_world/0.0.1/")
  // const html = config.getBackgroundHTML(manifest)

  const injectHelloWorld = LoadExtension("vendor/hello_world/0.0.1/")
  injectHelloWorld(win)

  const injectGDocs = LoadExtension("vendor/gdocs/1.9_1/", 'ghbmnnjooekpmoecnnnilnnbdlolhkhi')
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
