const Path = require('path')

const { protocol } = require('electron')

const _ = {}

_.extensionsSourceMap = {}

function RegisterExtension(srcDirectory, extensionId) {
  _.extensionsSourceMap[extensionId] = srcDirectory.replace(/\/$/, '')
}

_.pathLookup = (root) => {
  return (request, callback) => {
    const url = request.url.substr(('extension' + ':/').length)
    const file = { path: Path.normalize(`${root}/${url}`) }
    callback(file)
  }
}

// TODO: Un-curry
_.extensionLookup = () => {
  // chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/page_embed_script.js

  return (request, callback) => {
    const url = Object.entries(_.extensionsSourceMap).reduce((_url, entry) => {
        return _url.replace(...entry)
    }, request.url.substr(('chrome-extension' + ':/').length))

    const file = { path: Path.normalize(url) }
    callback(file)
  }
}

function RegisterFileProtocol (root) {

  // Okay, this isn't great- having both handlers -
  // but something shits the bed when I try to convert the first handler to chrome-extensions
  // so gonna punt

  protocol.registerFileProtocol('extension', _.pathLookup(root))
  protocol.interceptFileProtocol('chrome-extension', _.extensionLookup(root))
}

module.exports = {
  config: _,
  RegisterFileProtocol: RegisterFileProtocol,
  RegisterExtension: RegisterExtension
}
