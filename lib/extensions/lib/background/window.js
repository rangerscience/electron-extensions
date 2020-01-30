const Path = require('path')
const Fs = require('fs')

const { BrowserWindow } = require('electron');

const ContextMenu = require('electron-context-menu');

const _ = {}

_.newBackgroundWindow = function newBackgroundWindow(manifest) {
  return new BrowserWindow({
    width: 800,
    height: 600,
    show: !!process.env.IS_DEV,
    title: manifest.name,
    webPreferences: {
      preload: Path.join(__dirname, "./preload_script.js"),
      contextIsolation: !process.env.IS_DEV,
      nodeIntegration: true,
      devTools: true,
      nativeWindowOpen: true,
      additionalArguments: [`--extensionId=${manifest.extensionId}`]
    }
  })
}

_.addDevTools = (win) => {
  win.webContents.openDevTools()
  ContextMenu({
    showInspectElement: !!process.env.IS_DEV,
    showCopyImageAddress: true,
    window: win
  });
}

_.getBackgroundHTML = function getBackgroundHTML(manifest) {
  if (manifest.background.page) {
    const path = Path.join(manifest.srcDirectory, manifest.background.page)
    return Fs.readFileSync(path, "utf8")
  } else {
    const scripts = manifest.background.scripts
      .map(name => `<script src="./${name}"></script>`)
      .join("\n")
    return `<html><body>${scripts}</body></html>`
  }
}

function LaunchBackgroundPage(manifest) {
  const win = _.newBackgroundWindow(manifest)
  const base = `extension:/${manifest.srcDirectory}`

  if(!!process.env.IS_DEV) { _.addDevTools(win) }

  win.loadURL(
    "data:text/html;charset=utf-8," + encodeURI(_.getBackgroundHTML(manifest)),
    {baseURLForDataURL: base}
  )

  return win
}

module.exports = {
  config: _,
  LaunchBackgroundPage: LaunchBackgroundPage
}
