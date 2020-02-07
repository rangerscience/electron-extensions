const { ipcRenderer } = require("electron")

const { NewChromeApi } = require("../chrome_api.js")

const _ = {}

function ExtensionInit(ipcChannel) {
  const api = NewChromeApi(ipcChannel)

  process.once('loaded', () => {
    if( !global.chrome ) { global.chrome = {} }
    Object.assign(global.chrome, api)
    //global.console = require('electron').remote.getGlobal('console')
  })
}

module.exports = {
  config: _,
  ExtensionInit: ExtensionInit
}
