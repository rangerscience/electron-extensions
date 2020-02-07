const { ipcRenderer } = require("electron")

const { config, ManagementApi } = require("../../../../lib/extensions/lib/api/management.js")

const ipcChannel = "ipcChannel"

describe("getAll", () => {
  test("it curries", () => {
    expect(() => config.getAllBuilder(ipcChannel)).not.toThrow()
  })

  describe("when curried", () => {
    const getAll = config.getAllBuilder(ipcChannel)

    test("it invokes along IPC", () => {
      getAll()

      expect(ipcRenderer.invoke).toHaveBeenCalledWith(ipcChannel,
        expect.objectContaining({envelope: {eventType: 'get_all_extensions'}})
      )
    })

    test("it passes to callback", async (done) => {
      const callback = jest.fn(() => {done()})
      const og_invokeResponse = ipcRenderer._invokeResponse
      ipcRenderer._invokeResponse = [{
        id: "extensionId",
        shortName: "Test Extension",
        enabed: true
      }]

      await getAll(callback)

      expect(callback).toHaveBeenCalledWith(ipcRenderer._invokeResponse)

      ipcRenderer._invokeResponse = og_invokeResponse
    })
  })
})

describe("api", () => {
  test("it constructs", () => {
    expect(() => new ManagementApi(ipcChannel)).not.toThrow()
  })

  describe("instance", () => {
    const api = new ManagementApi(ipcChannel)

    test("it has uninstall", () => {
      expect(api).toHaveProperty("uninstall")
    })

    test("it has getAll", () => {
      expect(api).toHaveProperty("getAll")
    })
  })
})
