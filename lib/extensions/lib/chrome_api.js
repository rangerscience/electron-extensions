const { ipcRenderer } = require('electron');

const { StorageApi } = require("./api/storage.js")
const { AlarmsApi } = require("./api/alarms.js")
const { RuntimeApi } = require("./api/runtime.js")

const { Port } = require("./port.js")

const _ = {}

/* notes / thoughts

the injected JS must run in an isolated context AND the injected chrome API must be
build with knowledge of the specific extension, since things like storage must
be scopped to that particular extension

*/

function NewChromeApi (ipcChannel, manifest) { return {
  storage: new StorageApi("extensions"),
  runtime: new RuntimeApi(ipcChannel, manifest),
  alarms: new AlarmsApi()
}}

// function Injector(chromeApi) {
//   return (target) => {
//     process.once('loaded', () => {
//       Object.assign(target, chromeApi)
//     })
//   }
// }

module.exports = {
  config: _,
  //Injector: Injector,
  NewChromeApi: NewChromeApi
}
