const Path = require('path')
const Fs = require('fs')

const TraceError = require('trace-error')

// Note: Requires an absolute path
function ReadManifest(srcDirectory, extensionId) {

  // Littttle bit of stupid proofing
  if(!extensionId) { throw new Error("Must provide extension ID (crucial to message routing)")}

  try {
    const rawManifest = Fs.readFileSync(Path.join(srcDirectory, 'manifest.json'))
    const parsedManifest = JSON.parse(rawManifest)
    return Object.assign({
      srcDirectory: srcDirectory,
      extensionId: extensionId
    }, parsedManifest)
  } catch (error) {
    throw new TraceError(`Error reading manifest ${srcDirectory}`, error)
  }
}

module.exports = {
  ReadManifest: ReadManifest
}
