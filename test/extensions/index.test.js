const { config, Root } = require("../../lib/extensions/index.js")

const ipcChannel = "ipcChannel"

describe("loadedExtensionsResponder", () => {
  test("it curries", () => {
    expect(() => config.loadedExtensionsResponder([]))
  })

  describe("when curried", () => {
    const event = {}
    const loadedExtensions = [{ extensionId: "extensionId", name: "Test Extension" }]
    const loadExtensionsResponse = config.loadedExtensionsResponder(loadedExtensions)

    test("ignores events when not get_all_extensions", () => {
      expect(
        loadExtensionsResponse(event, {envelope: { eventType: "not_get_all_extensions"}})
      ).toStrictEqual([])
    })

    describe("when event is get_all_extensions", () => {
      test("returns formated extension info", () => {
        expect(
          loadExtensionsResponse(event, {envelope: { eventType: "get_all_extensions"}})
        ).toStrictEqual([
          { id: "extensionId", shortName: "Test Extension", enabled: true }
        ])
      })
    })
  })
})
