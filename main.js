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
      preload: Path.join(__dirname, "lib/extensions/lib/contentScripts/preload_script.js")
    }
  })

  //win.loadURL('https://www.reddit.com/r/rational/submit')
  win.loadURL('https://drive.google.com/drive/u/0/my-drive')

  win.webContents.openDevTools()

  // const path = Path.join(__dirname, "vendor/hello_world/0.0.1/")
  // const manifest = config.parseManifest("vendor/hello_world/0.0.1/")
  // const html = config.getBackgroundHTML(manifest)

  // const injectHelloWorld = LoadExtension("vendor/hello_world/0.0.1/", "helloWorldExtension")
  // injectHelloWorld(win)
  //
  // const injectGDocs = LoadExtension("vendor/gdocs/1.9_1/", 'ghbmnnjooekpmoecnnnilnnbdlolhkhi')
  // injectGDocs(win)

  // const lasspass    = LoadExtension("vendor/lastpass/4.41.0.4_0/", 'hdokiejnpimakedhajhdlcegeplioahd')
  // const clearbit    = LoadExtension("vendor/clearbit/2.1.1_0/", 'pmnhcgfcafcnkbengdcanjablaabjplo')
  // const grammarly   = LoadExtension("vendor/grammarly/14.947.0_0/", 'kbfnbcaeplbcioakkpcpgfkobkghlhen')
  // const zoom        = LoadExtension("vendor/zoom/1.4.48_0/", 'kgjfgplpablkjnlkjmjdecgdpfankdle')
  // const hubspot     = LoadExtension("vendor/hubspot/2.9.0.3718_0/", 'oiiaigjnkhngdbnoookogelabohpglmd')
  // const gmelius     = LoadExtension("vendor/gmelius/8.10_0/", 'dheionainndbbpoacpnopgmnihkcmnkl')
  // const mailtracker = LoadExtension("vendor/mailtracker/1.4.6_0/", 'pgbdljpkijehgoacbjpolaomhkoffhnl')
  const boomerang   = LoadExtension("vendor/boomerang/1.2.8_0/", 'mdanidgdpmkimeiiojknlnekblgmpdll')
  // const mixmax      = LoadExtension("vendor/mixmax/4.7.3_0/", 'ocpljaamllnldhepankaeljmeeeghnid')
  //console.log(html)

  boomerang(win)

  //config.startBackgroundPage(manifest)

  //console.log(win.webContents.executeJavaScript)
  //win.webContents.executeJavaScript(`console.log(Extensions)`)

  // win.webContents.once('dom-ready', () =>
  //   win.webContents.executeJavaScript(`console.log(Extensions);`)
  // )

  //BrowserWindow.addExtension("./vendor/hello_world/0.0.1")
}

app.on('ready', createWindow)
