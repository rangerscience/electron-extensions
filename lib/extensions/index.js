const { Preload } = require("./preload.js")
const { RegisterFileProtocol, LoadExtension } = require("./main.js")

module.exports = {
  Preload: Preload,
  RegisterFileProtocol: RegisterFileProtocol,
  LoadExtension: LoadExtension
}
