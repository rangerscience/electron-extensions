const Path = require("path")
const Fs = require("fs")

const _ = {}

_.matchesBuilder = function matchesBuilder(contentScriptData) {
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

function hashCode(s) {
  var hash = 0, i, chr;
  if (s.length === 0) return hash;
  for (i = 0; i < s.length; i++) {
    chr   = s.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

_.getWorldId = (extensionId, nonce=0) => {
  if(!extensionId) { throw new Error("Cannot get world ID for null extensionId")}

  const id = hashCode(extensionId + nonce) % 10000

  // Default, or Electron's contextIsolation
  if( id != 0 && id != 999 ) {
    return id
  } else {
    return getWorldId(extensionId, nonce+1)
  }
}

function InjectExtensionBuilder(manifest, ipcChannel) {
  const worldId = _.getWorldId(manifest.extensionId)
  const scripts = _.parseContentScripts(manifest)
  console.log("prepping injector for", manifest.name)

  return function injectExtension(webContents) {
    console.log("injecting", manifest.name)
    webContents.on('did-finish-load', () => {
      const url = webContents.getURL()
      const scriptsForUrl = scripts
        .filter((scriptInfo) => scriptInfo.matches(url) )
        .map((scriptInfo) => scriptInfo.scripts)
        .join(";\n")

      webContents.send(ipcChannel, {
        envelope: { eventType: "content_script_injection" },
        payload: {
          worldId: worldId,
          manifest: manifest,
          code: scriptsForUrl
        }
      })
    })
  }
}

module.exports = {
  config: _,
  InjectExtensionBuilder: InjectExtensionBuilder
}
