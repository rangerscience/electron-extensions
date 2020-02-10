const { ipcRenderer } = require('electron');

const { AlarmsApi } = require("./api/alarms.js")
const { ExtensionApi } = require("./api/extension.js")
const { ManagementApi } = require("./api/management.js")
const { RuntimeApi } = require("./api/runtime.js")
const { StorageApi } = require("./api/storage.js")
const { TabsApi } = require("./api/tabs.js")

const { Port } = require("./port.js")

const _ = {}

/* notes / thoughts

the injected JS must run in an isolated context AND the injected chrome API must be
build with knowledge of the specific extension, since things like storage must
be scopped to that particular extension

Things are much closer to being setup for this, only need the extension information to be
available when setting up the APIs for the ContentScripts

*/

function NewChromeApi (ipcChannel, manifest) { return {
  alarms: new AlarmsApi(),
  extension: new ExtensionApi(),
  management: new ManagementApi(),
  runtime: new RuntimeApi(ipcChannel, manifest),
  storage: new StorageApi("extensions"),
  tabs: new TabsApi()
}}

module.exports = {
  config: _,
  //Injector: Injector,
  NewChromeApi: NewChromeApi
}
