const Path = require('path')
const Fs = require('fs')

const { BrowserWindow, protocol } = require('electron');

const ContextMenu = require('electron-context-menu');
const TraceError = require('trace-error')

const _ = {}

_.newBackgroundWindow = function newBackgroundWindow(/*taskDefinition*/) {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: !!process.env.IS_DEV,
    webPreferences: {
      //preload: taskDefinition.script,
      contextIsolation: !process.env.IS_DEV,
      nodeIntegration: true,
      devTools: true,
      nativeWindowOpen: true
    }
  })

  if(!!process.env.IS_DEV) {
    win.webContents.openDevTools()
    ContextMenu({
      showInspectElement: !!process.env.IS_DEV,
      showCopyImageAddress: true,
      window: win
    });
  }

  return win
}

// Note: Requires an absolute path
_.parseManifest = function parseManifest(srcDirectory) {
  try {
    return Object.assign({
      srcDirectory: srcDirectory
    }, JSON.parse(
      Fs.readFileSync(Path.join(srcDirectory, 'manifest.json'))
    ))
  } catch (error) {
    throw new TraceError(`Error reading manifest ${srcDirectory}`, error)
  }
}

_.getBackgroundHTML = function getBackgroundHTML(manifest) {
  if (manifest.background.page) {
    const path = Path.join(manifest.srcDirectory, manifest.background.page)
    return Fs.readFileSync(path, "utf8")
  } else {
    const scripts = manifest.background.scripts
      .map(name => `<script src="./${name}"></script>`)
      .join("\n")
    return `<html><body>${scripts}</body></html>`
  }
}

_.startBackgroundPage = function startBackgroundPage(
  manifest,
  window = _.newBackgroundWindow()
) {
  const base = `extension:/${manifest.srcDirectory}`
  //console.log(base)
  window.setTitle(manifest.name)
  window.loadURL(
    "data:text/html;charset=utf-8," + encodeURI(_.getBackgroundHTML(manifest)),
    {baseURLForDataURL: base}
  )
}


_.matchesBuilder = function matchesBuilder(contentScriptData) {
  // TODO: all_frames
  if(
    contentScriptData.matches == "<all_urls>" ||
    contentScriptData.matches.includes("<all_urls>")
  ) { return () => true }

  const matchers = contentScriptData.matches.concat(
    contentScriptData.include_globs
  ).map(
    glob => new Regexp(glob.replace("*", ".+"))
  )

  const excluders = contentScriptData.exclude_matches.concat(
    contentScriptData.exclude_globs
  ).map(
    glob => new Regexp(glob.replace("*", ".+"))
  )

  return function matches(url) {
    return matchers.map(p => p.text(url)).includes(true) &&
      !excluders.matchers.map(p => p.text(url)).includes(true)
  }
}

// TODO: web_accessible_resources
_.parseContentScripts = function parseContentScripts(manifest) {
  if(!manifest.content_scripts) { return () => {} }

  return manifest.content_scripts.map((contentScriptData) => {
    return {
      matches: _.matchesBuilder(contentScriptData),
      scripts: contentScriptData.js.map(
        relativePath =>
          String(Fs.readFileSync(Path.join(manifest.srcDirectory, relativePath)))
      ).join("\n")
      // css: "TODO"
      // match_about_blank: TODO?
    }
  })
}

_.injectExtensionBuilder = function injectExtensionBuilder(scripts) {
  return function injectExtension(win) {
    win.webContents.on('did-finish-load', () => {
      const url = win.webContents.getURL()
      scripts.map((scriptInfo) => {
        if( scriptInfo.matches(url) ) {
          win.webContents.executeJavaScript(scriptInfo.scripts)
        }
      })
    })
  }
}

_.extensionsMap = {}

function RegisterFileProtocol (root) {
  // chrome-extension://ghbmnnjooekpmoecnnnilnnbdlolhkhi/page_embed_script.js

  protocol.registerFileProtocol('extension', (request, callback) => {
    // const url = Object.entries(_.extensionsMap).reduce((url, entry) => {
    //   url.replace(...entry)
    // }, request.url.substr(('chrome-extension' + ':/').length))
    //console.log('extension', request.url, url)
    const url = request.url.substr(('chrome-extension' + ':/').length)
    const file = { path: Path.normalize(`${root}/${url}`) }
    callback(file)
  })
}

function LoadExtension(srcDirectory, extensionId) {
  _.extensionsMap[extensionId] = srcDirectory
  console.log(_.extensionsMap)

  const manifest = _.parseManifest(srcDirectory)

  _.startBackgroundPage(manifest)

  return _.injectExtensionBuilder(
    _.parseContentScripts(manifest)
  )
}

module.exports = {
  config: _,
  RegisterFileProtocol: RegisterFileProtocol,
  LoadExtension: LoadExtension
}
