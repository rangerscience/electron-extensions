const { ExtensionApi } = require("../../../../lib/extensions/lib/api/extension.js")


describe("api", () => {
  const api = new ExtensionApi()
  const og_console_warn = global.console.warn
  global.console.warn = jest.fn()

  test("sendMessage is deprecated", () => {
    expect(() => api.sendMessage({foo: "bar"})).not.toThrow()
  })

  global.console.warn = og_console_warn
})
