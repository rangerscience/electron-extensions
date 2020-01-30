const { ipcChannel } = require("../../constants.js")
const { ExtensionInit } = require("./preload.js")

ExtensionInit(ipcChannel)
