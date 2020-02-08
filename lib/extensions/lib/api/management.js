const { ipcRenderer } = require('electron');

const _ = {}

_.getAllBuilder = (ipcChannel) => {
  return (callback = () => {}) => {
    ipcRenderer.invoke(ipcChannel, {
      envelope: {
        eventType: "get_all_extensions"
      },
      payload: {}
    }).then(
      callback
    ).catch((err) => {
      console.warning("Error in chrome.management.getAll", error)
    })
  }
}

class ManagementApi {
  constructor(ipcChannel) {
    Object.assign(this, {
      uninstall: () => console.log("uninstall not supported"),
      getAll: _.getAllBuilder(ipcChannel)
    })
  }
}

module.exports = {
  config: _,
  ManagementApi: ManagementApi
}
