const { ipcRenderer, remote } = require("electron")

const _ = {}

_.getTabInfo = () => { return {
  tabId: process.pid, // TODO: ...Does each webview get it's own process?
  active: document.hasFocus(),
  windowId: remote.getCurrentWindow().id
}}

_.sendMessageBuilder = (ipcChannel) => {
  // Note: also has an onResponse callback, but no extension we're using supports that yet
  return (tabId, message, options = {}) => {

    ipcRenderer.send(ipcChannel, {
      envelope: {
        extensionId: EXTENSION_ID, // TODO: refactor - TODO: is this to an extension in a tab, or jus tto the tab...?
        eventType: "message_tab",
        tabId: tabId,
        frameId: options.frameId
      },
      payload: message
    })
  }
}

_.query = (ipcChannel) => {
  return (queryInfo = {}, callback) => {

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

_.queryMatcher = (query) => {
  if(!query) { return true }

  const tabInfo = _.getTabInfo()

  const res = Object.entries(query).map(([key, value]) => {
    return tabInfo[key] == value
  })

  return !res.includes(false)
}

_.queryResponder = (ipcChannel) => {
  return (event, message) => {
    const { envelope, payload } = message

    if(
      envelope.eventType != "query_tabs" ||
      envelope.tabId == _.getTabInfo().tabId // TODO: This check might not be necessary (messages don't get echo'd to sender)
    ) {
      return
    }

    envelope.eventType = "query_tabs_response"

    if(_.queryMatcher(payload)) {
      ipcRenderer.send(ipcChannel, { envelope, payload: _.getTabInfo() })
    } else {
      ipcRenderer.send(ipcChannel, { envelope, payload: null } )
    }
  }
}

_.createBuilder = (ipcChannel) => {
  // only needs to handle props.url
  return (props = {}, callback = () => {}) => {

    if(!("active" in props)) { props.active = true }
    if(!("windowId" in props)) { props.windowId = _.getTabInfo().windowId }

    // TODO: receiver
    ipcRenderer.invoke(ipcChannel, {
      envelope: {
        eventType: "create_tab"
      },
      payload: props
    }).then(callback)
  }
}

class TabsApi {
  constructor(ipcChannel) {

    ipcRenderer.on(ipcChannel, _.queryResponder(ipcChannel))

    Object.assign(this, {
      sendMessage: _.sendMessageBuilder(ipcChannel),
    })
  }
}

module.exports = {
  config: _,
  TabsApi: TabsApi
}
