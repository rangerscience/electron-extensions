const { ipcRenderer } = require('electron');

const _ = {}


/**
 * getAllBuilder - Currying function to get all extensions
 *
 * @param  {string} ipcChannel Channel on which to communicate with main process
 * @return {function} Function for getting a list of all available extensions
 */
_.getAllBuilder = function getAllBuilder(ipcChannel) {

  /**
   * getAll - API call to get all available extensions
   *
   * @param  {function} callback Receives a list of all available extensions
   */
  return function getAll(callback = () => {}) {
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


/**
 * Class containing the management API
 * @property {function} uninstall - Unsupported function for uninstalling an extension
 * @property {function} getAll - Function taking a callback to get all available extensions
 */
class ManagementApi {

  /**
   * constructor - Builds the API
   *
   * @param  {type} ipcChannel Channel on which to communicate with main process
   */
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
