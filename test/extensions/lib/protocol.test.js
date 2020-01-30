const Path = require("path")

const { protocol } = require('electron')

const { config, RegisterFileProtocol, RegisterExtension } =
  require("../../../lib/extensions/lib/protocol.js")

describe("register extension", () => {
  RegisterExtension(Path.join(__dirname, "../../fixtures/extension/"), "extensionId")

  it("adds the source dir to the map", () => {
    expect(config.extensionsSourceMap).toHaveProperty("extensionId")
  })

  it("trims the trailing slash", () => {
    expect(config.extensionsSourceMap["extensionId"]).toBe(
      Path.join(__dirname, "../../fixtures/extension")
    )
  })
})

describe("path lookup", () => {
  test("it curries", () => {
    expect(() => config.pathLookup("root")).not.toThrow()
  })

  describe("when given a root", () => {
    const resolver = config.pathLookup(__dirname)
    const request = { url: "extension:/some/file/path.js" }

    test("the file path is updated to use the root", () => {
      const callback = jest.fn()

      resolver(request, callback)

      expect(callback).toHaveBeenCalledWith({
        path: Path.join(__dirname, "some/file/path.js")
      })
    })
  })
})

describe("extension lookup", () => {
  test("it curries", () => {
    expect(() => config.pathLookup("root")).not.toThrow()
  })

  describe("when given a root and known extension", () => {
    const resolver = config.extensionLookup(__dirname)
    const request = { url: "chrome-extension:/extensionId/some/file/path.js" }
    const extLocalPath = "../../fixtures/extension/"

    RegisterExtension(Path.join(__dirname, extLocalPath), "extensionId")

    test("the file path is updated to use the root and extension source", () => {
      const callback = jest.fn()

      resolver(request, callback)

      expect(callback).toHaveBeenCalledWith({
        path: Path.join(__dirname, extLocalPath, "some/file/path.js")
      })
    })
  })
})

describe("RegisterFileProtocol", () => {
  config.pathLookup = jest.fn((arg) => arg)
  config.extensionLookup = jest.fn((arg) => arg)

  RegisterFileProtocol(__dirname)

  test("it creates and registers the path look up handler", () => {
    expect(config.pathLookup).toHaveBeenCalledWith(__dirname)
    expect(protocol.registerFileProtocol).toHaveBeenCalledWith('extension', __dirname)
  })

  test("it creates and registers the extension look up handler", () => {
    expect(config.extensionLookup).toHaveBeenCalledWith(__dirname)
    expect(protocol.interceptFileProtocol).toHaveBeenCalledWith('chrome-extension', __dirname)
  })
})
