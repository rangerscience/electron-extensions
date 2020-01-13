//*
const { join } = require('path');
const { app, BrowserWindow, session } = require('electron')
const path = require('path')

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

  const onUpdate = (update) => console.log('Extension updated: ', update);

  console.log(session.defaultSession.webRequest)

  await ECx.setConfiguration({
    onUpdate,
    fetcher: { autoUpdate: true, autoUpdateInterval: 1000000 },
  });

  //await ECx.load('kbfnbcaeplbcioakkpcpgfkobkghlhen');
  ECx.localLoad('hello_world', '0.0.1')
  ECx.localLoad('lastpass', '4.39.0.2_0')
  ECx.localLoad('spiritualbro', '0.0.1')
  ECx.localLoad('gdocs', '0.10_0')
}

app.on('session-created', session => {
  const userAgent = session.getUserAgent();
  session.setUserAgent(userAgent.replace(/Electron\/\S*\s/, ''));

  // to make devtools work, we need this
  //session.setPreloads([join(__dirname, 'lib/renderer/index.js')]);
});

app.on('ready', createWindow)
