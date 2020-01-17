// const _ = {}

console.log("preloading")

function Preload() {
  process.once('loaded', () => {
    global.extensionLoaded = true
    global.chrome = {
        // TODO
    }
  })
}

Preload()

// module.exports = {
//   config: _,
//   Preload: Preload
// }
