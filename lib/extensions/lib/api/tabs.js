const { ipcRenderer, remote } = require("electron")

/**
 * Module partially implementing the Chrome tabs API
 * https://developer.chrome.com/extensions/tabs
 */

const _ = {}

/**
 * getTabInfo - Fetches information about this tab
 *
 * @return {object} tabInfo Information about this tab
 * @return {integer} tabInfo.id A unique ID for this tab
 * @return {boolean} tabInfo.active Whether this tab is active
 * @return {integer} tabInfo.windowId The ID for this window
 */
_.getTabInfo = function getTabInfo() { return {
  tabId: process.pid, // TODO: Use GetStation's method for this.
  active: document.hasFocus(),
  windowId: remote.getCurrentWindow().id
}}

/**
 * sendMessageBuilder - Currying function to send messages to this extension in
 *   other tabs
 *
 * @param  {string} ipcChannel Electron channel to use for underlying communication
 * @return {function} Function for sending messages to this extension in other tabs
 */
_.sendMessageBuilder = function sendMessageBuilder(ipcChannel) => {

  /**
   * sendMessage - Sends message to this extension in other tabs
   *
   * @param  {integer} tabId The ID of the tab that should recieve this message (from getTabInfo)
   * @param  {object} message A JSON-ifiable object that is the message
   * @param  {type} [options] (unsupported)
   * @param  {type} [options.frameId] (unsupported)
   *
   * @modifies Sends a specially formatted message along the IPC channel
   */
  return function sendMessage(tabId, message, options = {}) {

    ipcRenderer.send(ipcChannel, {
      envelope: {
        extensionId: EXTENSION_ID,
        eventType: "message_tab",
        tabId: tabId,
      },
      payload: message
    })
  }
}

/**
 * query - Currying function for getting information about other tabs that match
 *   criteria
 *
 * @param  {string} ipcChannel Electron channel to use for underlying communication
 * @return {function} Function for querying all other tabs
 */
_.query = function query(ipcChannel) => {

  /**
   * Function for querying all other tabs
   *
   * @param  {object} queryInfo The query parameters. Pass "{}" for all.
   * @param  {boolean} [queryInfo.currentWindow] Tabs must be in the current window
   * @param  {integer} [queryInfo.windowId] Tabs must be in the window with this ID
   * @param  {function} callback A function that will recieve the tabInfo of all tabs
   *   that match the query
   *
   * @modifies Sends a synchronous message to the Main process
   */
  return function(queryInfo = {}, callback) {

    if(queryInfo.currentWindow) {
      queryInfo.windowId = _.getTabInfo().windowId
      delete queryInfo.currentWindow
    }

    ipcRenderer.invoke(ipcChannel, {
      envelope: {
        eventType: "query_tabs",
        tabId: _.getTabInfo().tabId
      },
      payload: queryInfo
    }).then(callback)
  }
}

/**
 * queryMatcher - Determines if this tab matches the provided query
 *
 * @param  {object} query Query params to check against. Everything matches against empty
 * @param  {object} tabInfo The information about this tab to check agains the query
 * @return {boolean} Whether or not this tab matches the query
 */
_.queryMatcher = function queryMatcher(query, tabInfo) => {
  if(!query) { return true }

  const res = Object.entries(query).map(([key, value]) => {
    return tabInfo[key] == value
  })

  return !res.includes(false)
}

/**
 * queryResponder - Currying function to handle incoming query messages
 *
 * @param  {string} ipcChannel Electron channel to use for underlying communication
 * @param {function} [getTabInfo] Function for fetching information about this tab
 * @return {function} Function to handle incoming query messages
 */
_.queryResponder = function queryResponder(ipcChannel, getTabInfo = _.getTabInfo) => {

  /**
   * Function to handle incoming query_tabs_response messages
   *
   * @param  {object} _event IPC event (ignored)
   * @param  {object} message Specially formated message object
   * @param  {object} message.envelope Information about which listeners should
   *   emit this message
   * @param  {object} message.paylod The actual message originally sent
   *
   * @modifies Sends specially formatted messages to the Main process with the
   *   tab's info if the tab matches the query; otherwise response with empty payload
   */
  return function (_event, message) {
    const { envelope, payload } = message

    if(
      envelope.eventType != "query_tabs" ||
      envelope.tabId == _.getTabInfo().tabId
    ) {
      return
    }

    envelope.eventType = "query_tabs_response"

    const tabInfo = getTabInfo()
    if(_.queryMatcher(payload, tabInfo)) {
      ipcRenderer.send(ipcChannel, { envelope, payload: tabInfo })
    } else {
      ipcRenderer.send(ipcChannel, { envelope, payload: null } )
    }
  }
}

/**
 * createBuilder - Currying function to create new tabs.
 *
 * @param  {string} ipcChannel Electron channel to use for underlying communication
 * @param {function} [getTabInfo] Function for fetching information about this tab
 * @return {function} Function to emit tab creation requests
 */
_.createBuilder = function createBuilder(ipcChannel, getTabInfo = _.getTabInfo) => {
  /**
   * Function to emit tab creation requests
   *
   * @param {object} [props = {}] Properties of the new tab
   * @param {string} [props.url] The URL that the new tab should open
   * @param {string} [props.active=true] Whether the new tab should become the active tab
   * @param {string} [props.windowId=currentWindowId] The window in which the tab should open
   * @param  {type} callback Function to receive the results of making the new tab
   *
   * @modifies Sends a synchronous message to the Main process
   */
  return function(props = {}, callback = () {}) => {

    if(!("active" in props)) { props.active = true }
    if(!("windowId" in props)) { props.windowId = _.getTabInfo().windowId }

    ipcRenderer.invoke(ipcChannel, {
      envelope: {
        eventType: "create_tab"
      },
      payload: props
    }).then(callback)
  }
}


/**
 * Class containing a Tabs API
 * @property {function} sendMessage Sends a message to this extension in another tab
 * @property {function} create Requests the opening of a new tab
 *
 * @modifies Listens for query events on the ipc channel
 */
class TabsApi {
  constructor(ipcChannel) {

    ipcRenderer.on(ipcChannel, _.queryResponder(ipcChannel))

    Object.assign(this, {
      sendMessage: _.sendMessageBuilder(ipcChannel),
      create: _.createBuilder(ipcChannel)
    })
  }
}

module.exports = {
  config: _,
  TabsApi: TabsApi
}
