console.log("hello world ext")

const hw = {}

hw.listener = function listener(request, sender, sendResponse) {
  console.log("chrome.runtime.onMessage", request, sender, sendResponse)
}

chrome.runtime.onMessage.addListener(hw.listener);

window.hw = hw
window.chrome = chrome
console.log("chrome", chrome)
console.log("window", window)

const e = new Error()
console.log(e)
console.log(e.stack.split("\n"))
