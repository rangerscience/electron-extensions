const { Preload } = require("./preload.js")
//const { RegisterFileProtocol, LoadExtension } = require("./main.js")

const Path = require('path')
const Fs = require('fs')

const { BrowserWindow, protocol, ipcMain } = require('electron');

const ContextMenu = require('electron-context-menu');
const TraceError = require('trace-error')

function LoadExtension(srcDirectory, extensionId) {
  _.extensionsSourceMap[extensionId] = srcDirectory.replace(/\/$/, '')

  const manifest = _.readManifest(srcDirectory)

  _.startBackgroundPage(manifest)

  return _.injectExtensionBuilder(
    _.parseContentScripts(manifest)
  )
}

module.exports = {
  Preload: Preload,
  RegisterFileProtocol: RegisterFileProtocol,
  LoadExtension: LoadExtension
}
