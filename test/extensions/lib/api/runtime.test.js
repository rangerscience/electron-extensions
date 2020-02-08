const { ipcRenderer } = require('electron');
const { Port } = require("../../../../lib/extensions/lib/port.js")
const { config, RuntimeApi } = require("../../../../lib/extensions/lib/api/runtime.js")


let EXTENSION_ID // This is kludge for some content script stuff
const _ = {}

_.ipcChannel = "ipcChannel"
_.extensionId = "extensionId"

_.message = {
  envelope: {
    extensionId: _.extensionId,
    eventType: "message_external"
  },
  payload: "message"
}

_.connectMessage = {
  envelope: {
    extensionId: _.extensionId,
    eventType: "connect_external",
  },
  payload: {
    portName: "portName",
    portId: "portId"
  }
}

_.differentExtensionMessage = {
  envelope: {
    extensionId: "_" + _.extensionId,
    eventType: "message_external"
  },
  payload: "message"
}

_.portMessage = {
  envelope: {
    extensionId: _.extensionId,
    eventType: "message_port",
    portId: "portId"
  },
  payload: "message"
}


describe("connect", () => {

  test("can be curried", () =>
    expect(() => config.connectBuilder(_.ipcChannel)).not.toThrow()
  )

  describe("when curried", () => {
    const connect = config.connectBuilder(_.ipcChannel)

    describe("will create a port", () => {
      const connectionInfo = {name: "test connection"}
      const port = connect(_.ipcChannel, connectionInfo)

      test("port is created", () => {
        expect(port).toBeInstanceOf(Port)
      })

      test("connect message is sent", () => {
        expect(ipcRenderer.send).toHaveBeenCalledWith(
          _.ipcChannel, _.portMessage
        )
      })
    })
  })
})

describe("external messages", () => {
  test("can be curried", () =>
    expect(() => config.onMessageExternalBuilder(_.ipcChannel, _.extensionId))
      .not.toThrow()
  )

  describe("when receives messages", () => {
    const receiver = config.onMessageExternalBuilder(_.ipcChannel, _.extensionId)
    const listener = jest.fn()
    receiver.addListener(listener)

    ipcRenderer.send(_.ipcChannel, _.message)
    ipcRenderer.send(_.ipcChannel, _.connectMessage)
    ipcRenderer.send(_.ipcChannel, _.differentExtensionMessage)
    ipcRenderer.send(_.ipcChannel, _.portMessage)

    test("sends external messages to listeners", () => {
      expect(listener).toHaveBeenCalledWith(_.message.payload)
    })

    test("ignores connect messages", () => {
      expect(listener).not.toHaveBeenCalledWith(_.connectMessage)
    })

    test("ignores messages for other extensions", () => {
      expect(listener).not.toHaveBeenCalledWith(_.differentExtensionMessage)
    })

    test("ignores messages for ports", () => {
      expect(listener).not.toHaveBeenCalledWith(_.portMessage)
    })
  })
})

describe("external connect messages", () => {
  test("can be curried", () =>
    expect(() => config.onConnectExternalBuilder(_.ipcChannel, _.extensionId))
      .not.toThrow()
  )

  describe("when receives messages", () => {
    const receiver = config.onConnectExternalBuilder(_.ipcChannel, _.extensionId)
    const listener = jest.fn()
    receiver.addListener(listener)

    ipcRenderer.send(_.ipcChannel, _.message)
    ipcRenderer.send(_.ipcChannel, _.connectMessage)
    ipcRenderer.send(_.ipcChannel, _.differentExtensionMessage)
    ipcRenderer.send(_.ipcChannel, _.portMessage)

    test("ignores external messages", () => {
      expect(listener).not.toHaveBeenCalledWith(_.message)
    })

    test("ignores messages for other extensions", () => {
      expect(listener).not.toHaveBeenCalledWith(_.differentExtensionMessage)
    })

    test("ignores messages for ports", () => {
      expect(listener).not.toHaveBeenCalledWith(_.portMessage)
    })

    test("sends new port to listeners", () => {
      const portInfo = {
        ipcChannel: _.ipcChannel,
        extensionId: _.extensionId,
        name: _.connectMessage.payload.portName,
        portId: _.connectMessage.payload.portId
      }
      expect(listener).toHaveBeenCalledWith(expect.objectContaining(portInfo))
    })
  })
})

describe("sendMessage", () => {
  test.todo("uses the world's EXTENSION_ID")
  test.todo("sends an external message")
})

describe("onMessage", () => {
  test.todo("uses the world's EXTENSION_ID")
  test.todo("sends an external message")
})

describe("background page api", () => {
  const manifest = {
    extensionId: "extensionId"
  }
  
  const api = new RuntimeApi(_.ipcChannel, manifest)

  test("can connect", () => {
    expect(() => api.connect("otherExtension", {name: "other"})).not.toThrow()
  })

  test("can receive external messages", () => {
    expect(api.onMessageExternal).not.toBeUndefined()
  })

  test("can receive external connections", () => {
    expect(api.onConnectExternal).not.toBeUndefined()
  })

  test("can return the manifest", () => {
    expect(api.getManifest()).toBe(manifest) // exact object matching?
  })
})

describe("web page api", () => {
  const api = new RuntimeApi(_.ipcChannel)

  test("can connect", () => {
    expect(() => api.connect("otherExtension", {name: "other"})).not.toThrow()
  })

  test("cannot receive external messages", () => {
    expect(api.onMessageExternal).toBeUndefined()
  })

  test("cannot receive external connections", () => {
    expect(api.onConnectExternal).toBeUndefined()
  })

  test("cannot return the manifest", () => {
    expect(api.getManifest).toBeUndefined()
  })
})
