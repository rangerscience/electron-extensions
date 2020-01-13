console.log("hello world background script")

const hw = {}

hw.browserAction = function browserAction(tab) {
  console.log("hello world extension background action")

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    tabs.map((tab) => {
      chrome.tabs.sendMessage(tab.id, {"message": "clicked_browser_action"});
    })
  })
}

window.hw = hw

chrome.browserAction.onClicked.addListener(hw.browserAction;
