const { ipcChannel } = require("../../constants.js")
const { ExtensionInit } = require("./preload.js")

console.log("process.pid", process.pid)

ExtensionInit(ipcChannel)
