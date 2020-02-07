const { ipcRenderer } = require("electron")

const { config, TabsApi } = require("../../../../lib/extensions/lib/api/tabs.js")

EXTENSION_ID = "extensionId"
const ipcChannel = "channel"
const extensionId = EXTENSION_ID

function mockTabInfo(info, test) {
  const og_getTabInfo = config.getTabInfo
  config.getTabInfo = jest.fn(() => info)
  test()
  config.getTabInfo = og_getTabInfo
}

describe("tabInfo", () => {
  test("it has a tabId", () => {
    expect(config.getTabInfo()).toHaveProperty("tabId")
  })

  test("it has 'active'", () => {
    expect(config.getTabInfo()).toHaveProperty("active")
  })

  test("it has a windowId", () => {
    expect(config.getTabInfo()).toHaveProperty("windowId")
  })
})

describe("send message", () => {
  test("it curries", () => {
    expect(() => config.sendMessageBuilder(ipcChannel)).not.toThrow()
  })

  describe("when curried", () => {
    const sendMessage = config.sendMessageBuilder(ipcChannel)
    test("sends message to channel", () => {
      const tabId = "tabId"
      const message = "message"

      sendMessage(tabId, message)

      expect(ipcRenderer.send).toHaveBeenCalled()
    })

    describe("when message is sent", () => {
      const tabId = "tabId"
      const options = { frameId: "frameId" }
      const message = "message"

      sendMessage(tabId, message, options)

      describe("envelope", () => {
        test("includes extensionId", () => {
          expect(ipcRenderer.send).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
            envelope: expect.objectContaining({ extensionId })
          }))
        })

        test("includes tabId", () => {
          expect(ipcRenderer.send).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
            envelope: expect.objectContaining({ tabId })
          }))
        })

        test("includes frameId", () => {
          expect(ipcRenderer.send).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
            envelope: expect.objectContaining({ frameId: options.frameId })
          }))
        })

        test("has message_tab event type", () => {
          expect(ipcRenderer.send).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
            envelope: expect.objectContaining({ eventType: "message_tab" })
          }))
        })
      })
    })
  })
})

describe("querying", () => {

  describe("query", () => {
    test("it curries", () => {
      expect(() => config.query(ipcChannel)).not.toThrow()
    })

    describe("when curried", () => {
      const query = config.query(ipcChannel)

      test("it invokes along IPC", () => {
        query()

        expect(ipcRenderer.invoke).toHaveBeenCalledWith(ipcChannel,
          expect.objectContaining({envelope: expect.objectContaining({eventType: 'query_tabs'})})
        )
      })

      test("it passes to callback", async (done) => {
        const callback = jest.fn(() => done())
        const og_invokeResponse = ipcRenderer._invokeResponse
        ipcRenderer._invokeResponse = [{
          tabId: "tabId",
          active: true,
          windowId: "windowId"
        }]

        await query({}, callback)

        expect(callback).toHaveBeenCalledWith(ipcRenderer._invokeResponse)

        ipcRenderer._invokeResponse = og_invokeResponse
      })
    })
  })

  describe("queryMatcher", () => {

    test("matches on windowId", () => {
      mockTabInfo({ tabId: 1, windowId: 1, active: true }, () => {
        expect(config.query({windowId: 1})).toBeTruthy()
      })
      mockTabInfo({ tabId: 2, windowId: 1, active: false }, () => {
        expect(config.query({windowId: 1})).toBeTruthy()
      })
    })

    test("excludes on windowId", () => {
      mockTabInfo({ tabId: 3, windowId: 2, active: true }, () => {
        expect(config.queryMatcher({windowId: 1})).not.toBeTruthy()
      })
      mockTabInfo({ tabId: 4, windowId: 2, active: false }, () => {
        expect(config.queryMatcher({windowId: 1})).not.toBeTruthy()
      })
    })

    test("matches on active", () => {
      mockTabInfo({ tabId: 1, windowId: 1, active: true }, () => {
        expect(config.queryMatcher({active: true})).toBeTruthy()
      })
      mockTabInfo({ tabId: 2, windowId: 1, active: false }, () => {
        expect(config.queryMatcher({active: false})).toBeTruthy()
      })
    })

    test("excludes on active", () => {
      mockTabInfo({ tabId: 3, windowId: 2, active: true }, () => {
        expect(config.queryMatcher({active: false})).not.toBeTruthy()
      })
      mockTabInfo({ tabId: 4, windowId: 2, active: false }, () => {
        expect(config.queryMatcher({active: true})).not.toBeTruthy()
      })
    })
  })

  describe("queryResponder", () => {
    const event = {}

    test("it curries", () => {
      expect(() => config.queryResponder(ipcChannel)).not.toThrow()
    })

    describe("when curried", () => {
      const queryResponder = config.queryResponder(ipcChannel)

      test("ignores query from self messages", () => {
        mockTabInfo({ tabId: 1, windowId: 1, active: true }, () => {
          ipcRenderer.send.mockClear();

          queryResponder(event, { envelope: { eventType: "query_tabs", tabId: 1} })

          expect(ipcRenderer.send).not.toHaveBeenCalled()
        })
      })

      describe("queries from other tabs", () => {
        mockTabInfo({ tabId: 2, windowId: 1, active: true }, () => {
          test("ignores non-query_tabs messages", () => {
            ipcRenderer.send.mockClear();

            queryResponder(event, { envelope: { eventType: "not_query_tabs", tabId: 1} })

            expect(ipcRenderer.send).not.toHaveBeenCalled()
          })

          test("it responds with same envelope, empty payload when query does not match", () => {
            ipcRenderer.send.mockClear();
            const envelope ={ eventType: "query_tabs", tabId: 1}
            queryResponder(event, { envelope, payload: { windowId: 2 } })

            expect(ipcRenderer.send).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
              envelope, payload: null
            }))
          })

          test("it responds with same envelope, full payload when query does match", () => {
            ipcRenderer.send.mockClear();
            const envelope ={ eventType: "query_tabs", tabId: 1}
            queryResponder(event, { envelope })

            expect(ipcRenderer.send).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
              envelope, payload: config.getTabInfo()
            }))
          })
        })
      })

    })
  })
})


describe("create", () => {
  test("it curries", () => {
    expect(() => config.createBuilder(ipcChannel)).not.toThrow()
  })

  describe("when curried", () => {
    const create = config.createBuilder(ipcChannel)

    test("it sends a tab create message", () => {
      ipcRenderer.invoke.mockClear();

      create()

      expect(ipcRenderer.invoke).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
        envelope: expect.objectContaining({ eventType: "create_tab" }), payload: expect.anything()
      }))
    })

    test("it calls the callback", async (done) => {
      const callback = jest.fn(() => done())

      await create({}, callback)

      expect(callback).toHaveBeenCalled()
    })

    test("active defaults to true", () => {
      ipcRenderer.invoke.mockClear();
      create()

      expect(ipcRenderer.invoke).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
        payload: expect.objectContaining({ active: true }),
      }))

      ipcRenderer.invoke.mockClear();
      create({active: false})

      expect(ipcRenderer.invoke).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
        payload: expect.objectContaining({ active: false }),
      }))
    })

    test("windowId defaults to currentWindow", () => {
      mockTabInfo({ tabId: 2, windowId: 1, active: true }, () => {
        ipcRenderer.invoke.mockClear();
        create()

        expect(ipcRenderer.invoke).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
          payload: expect.objectContaining({ windowId: 1 }),
        }))

        ipcRenderer.invoke.mockClear();
        create({windowId: 2})

        expect(ipcRenderer.invoke).toHaveBeenCalledWith(ipcChannel, expect.objectContaining({
          payload: expect.objectContaining({ windowId: 2 }),
        }))
      })
    })
  })
})
