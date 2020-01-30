const Path = require("path")
const Fs = require("fs")

const _ = {}

_.matchesBuilder = function matchesBuilder(contentScriptData) {
  // TODO: all_frames
  if(
    contentScriptData.matches == "<all_urls>" ||
    contentScriptData.matches.includes("<all_urls>")
  ) { return () => true }

  const matchers = [].concat(
    contentScriptData.matches,
    contentScriptData.include_globs
  ).filter(Boolean).map(
    glob => new RegExp(glob.replace("*", ".+"))
  )

  const excluders = [].concat(
    contentScriptData.exclude_matches,
    contentScriptData.exclude_globs
  ).filter(Boolean).map(
    glob => new RegExp(glob.replace("*", ".+"))
  )

  return function matches(url) {
    return matchers.map(p => p.test(url)).includes(true) &&
      !excluders.map(p => p.test(url)).includes(true)
  }
}

// TODO: web_accessible_resources
_.parseContentScripts = function parseContentScripts(manifest) {
  if(!manifest.content_scripts) { return [] }

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

function InjectExtensionBuilder(manifest) {
  const scripts = _.parseContentScripts(manifest)

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

module.exports = {
  config: _,
  InjectExtensionBuilder: InjectExtensionBuilder
}
