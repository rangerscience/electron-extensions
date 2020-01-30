const Path = require("path")

const { BrowserWindow } = require("electron")

const { config, InjectExtensionBuilder } = require("../../../../lib/extensions/lib/contentScripts/injection.js")

describe("matches", () => {
  test("it curries", () => {
    const contentScriptData = { matches: [ "<all_urls>" ] }
    expect(config.matchesBuilder(contentScriptData)).not.toThrow()
  })

  describe("<all_urls>", () => {
    const contentScriptData = { matches: [ "<all_urls>" ] }
    const matcher = config.matchesBuilder(contentScriptData)

    test("matches https://google.com", () => {
      const url = "https://google.com"
      expect(matcher(url)).toBeTruthy()
    })

    test("matches http://google.com", () => {
      const url = "http://google.com"
      expect(matcher(url)).toBeTruthy()
    })

    test("matches http://foo.bar.com", () => {
      const url = "http://foo.bar.com"
      expect(matcher(url)).toBeTruthy()
    })
  })

  describe("path glob", () => {
    const contentScriptData = { matches: [ "https://docs.google.com/*" ] }
    const matcher = config.matchesBuilder(contentScriptData)

    test("does not match https://google.com", () => {
      const url = "https://google.com"
      expect(matcher(url)).toBeFalsy()
    })

    test("matches https://docs.google.com/some/path", () => {
      const url = "https://docs.google.com/some/path"
      expect(matcher(url)).toBeTruthy()
    })
  })

  describe("exclude", () => {
    describe("path glob", () => {
      const contentScriptData = { matches: [ "*" ], exclude_matches: ["https://docs.google.com/*"] }
      const matcher = config.matchesBuilder(contentScriptData)

      test("does match https://google.com", () => {
        const url = "https://google.com"
        expect(matcher(url)).toBeTruthy()
      })

      test("does not match https://docs.google.com/some/path", () => {
        const url = "https://docs.google.com/some/path"
        expect(matcher(url)).toBeFalsy()
      })
    })
  })
})

describe("parseContentScripts", () => {


  describe("with no content scripts", () => {
    const manifest = {
      getExtensionId: "extensionId",
      srcDirectory: Path.join(__dirname, "../../../fixtures/extension"),
    }

    test("return empty array", () => {
      expect(config.parseContentScripts(manifest)).toStrictEqual([])
    })
  })

  describe("with content scripts", () => {
    const manifest = {
      getExtensionId: "extensionId",
      srcDirectory: Path.join(__dirname, "../../../fixtures/extension"),
      content_scripts: [{
        matches: ["<all_urls>"],
        js: ["content_script.js"]
      }]
    }

    test("returns a list of match information", () => {
      expect(config.parseContentScripts(manifest)).toHaveLength(1)
    })

    describe("match information", () => {
      const scripts = config.parseContentScripts(manifest)

      test("has a matcher function", () => {
        expect(scripts[0].matches).toBeDefined()
      })

      test("has a string of the script contents", () => {
        expect(scripts[0].scripts).toBe('console.log("Hello Content")\n')
      })
    })
  })
})

describe("InjectExtensionBuilder", () => {
  const manifest = {
    getExtensionId: "extensionId",
    srcDirectory: Path.join(__dirname, "../../../fixtures/extension"),
    content_scripts: [{
      matches: [ "*" ],
      exclude_matches: ["https://docs.google.com/*"],
      js: ["content_script.js"]
    }]
  }

  test("it curries", () => {
    expect(() => InjectExtensionBuilder(manifest)).not.toThrow
  })

  describe("injector", () => {
    const injector = InjectExtensionBuilder(manifest)

    test("injects scripts when URL matches", () => {
      const window = new BrowserWindow()
      window.webContents.getURL = () => "https://google.com"

      injector(window)

      expect(window.webContents.executeJavaScript).toHaveBeenCalled()
    })

    test("does not injects scripts when does not URL matches", () => {
      const window = new BrowserWindow()
      window.webContents.getURL = () => "https://docs.google.com/some/path"

      injector(window)

      expect(window.webContents.executeJavaScript).not.toHaveBeenCalled()
    })

  })
})
