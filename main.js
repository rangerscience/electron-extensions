const { app, BrowserWindow } = require('electron')
const ECx = require('electron-chrome-extension').default

async function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: true
    }
  })

  win.loadFile('index.html')

  win.webContents.openDevTools()

  //BrowserWindow.addExtension("./vendor/hello_world/0.0.1")

  await ECx.setConfiguration({
    onUpdate,
    fetcher: { autoUpdate: true, autoUpdateInterval: 1000000 },
  });

  await ECx.load('kbfnbcaeplbcioakkpcpgfkobkghlhen');
}

app.on('ready', createWindow)
