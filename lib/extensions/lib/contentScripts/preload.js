const { ipcRenderer } = require("electron")

const { NewChromeApi } = require("../chrome_api.js")

const _ = {}

function ExtensionInit(ipcChannel) {
  const api = NewChromeApi(ipcChannel)
  console.log("making chrome api", api)

  process.once('loaded', () => {
    if( !global.chrome ) { global.chrome = {} }
    console.log("ibjecting chrome api", api)
    Object.assign(global.chrome, api)
    //global.console = require('electron').remote.getGlobal('console')
  })
}

module.exports = {
  config: _,
  ExtensionInit: ExtensionInit
}
