const { ipcRenderer } = require('electron');
const { config, Port, ConnectMessageFor } =
  require("../../../lib/extensions/lib/port.js")

const _  = {}

_.payload = "msg"

_.portInfo = {
  name: "testFixture",
  ipcChannel: "testFixture",
  extensionId: "testFixture",
}

_.port = new Port(_.portInfo)

_.messageEvent = {} // TODO: ipc event mock (but atm received ignores this)

function curriesAndMakesNewMessages(func) {
  test("can be curried", () =>
    expect(() => config.messageBuilder(_.port)).not.toThrow()
  )

  test("can make a new message", () => {
    const newMessage = config.messageBuilder(_.port)
    expect(() => newMessage(_.payload)).not.toThrow()
  })
}

function hasPortEnvelopeInformation(port, message) {
  return () => {
    test("has envelope information", () =>
      expect(message).toHaveProperty("envelope")
    )

    test("postId from the port", () =>
      expect(message.envelope.portId).toBe(port.portId)
    )

    test("extensionId from the port", () =>
      expect(message.envelope.extensionId).toBe(_.portInfo.extensionId)
    )
  }
}

describe("messageBuilder", () => {
  curriesAndMakesNewMessages(config.messageBuilder)

  const newMessage = config.messageBuilder(_.port)
  const message = newMessage(_.payload)

  describe( "envelope",
    hasPortEnvelopeInformation(_.port, message)
  )

  test( "message type is message_external", () =>
    expect(message.envelope.eventType).toBe("message_external")
  )

  test( "has payload", () =>
    expect(message).toHaveProperty("payload")
  )

  test( "payload contains the message", () =>
    expect(message.payload).toBe(_.payload)
  )
})

describe("ConnectMessageFor", () => {
  test( "makes new message", () =>
    expect(() => ConnectMessageFor(_.port)).not.toThrow() )

  const message = ConnectMessageFor(_.port)

  test("has envelope information", () =>
    expect(message).toHaveProperty("envelope")
  )

  test("extensionId from the port", () =>
    expect(message.envelope.extensionId).toBe(_.portInfo.extensionId)
  )

  test( "message type is connect_external", () =>
    expect(message.envelope.eventType).toBe("connect_external")
  )

  test( "has payload", () =>
    expect(message).toHaveProperty("payload")
  )

  test( "payload has the port name", () =>
    expect(message.payload.portName).toBe(_.portInfo.name)
  )

  test( "payload has the port id", () =>
    expect(message.payload).toHaveProperty("portId")
  )
})

describe("disconnectMessageFor", () => {
  test( "makes new message", () =>
    expect(() => config.disconnectMessageFor(_.port)).not.toThrow()
  )

  const message = config.disconnectMessageFor(_.port)

  describe( "envelope",
    hasPortEnvelopeInformation(_.port, message) )

  test( "message type is connect_external", () =>
    expect(message.envelope.eventType).toBe("disconnect_external")
  )

  test( "has payload", () =>
    expect(message).toHaveProperty("payload")
  )

  test( "payload is the port name", () =>
    expect(message.payload).toBe(_.portInfo.name)
  )
})

describe("receiveMessage", () =>{
  test("builder can be curried", () =>
    expect(() => config.receiveMessageBuilder(_.port)).not.toThrow()
  )

  test("rejects messages not for this port", () => {
    const receiveMessage = config.receiveMessageBuilder(_.port)
    const message = config.messageBuilder(_.port)(_.payload)
    message.envelope.portId = "reject"

    expect(receiveMessage(_.event, message)).toBeFalsy()
  })

  test("emits messages for this port", () => {
    const port = new Port(_.portInfo)
    const receiveMessage = config.receiveMessageBuilder(port)
    const message = config.messageBuilder(port)(_.payload)
    const listener = jest.fn()
    port.onMessage.addListener(listener)

    receiveMessage(_.event, message)

    expect(listener).toHaveBeenCalledWith(message.payload, port)
  })
})

describe("Port", () => {
  test("can be new'd", () => {
    // already well tested
  })

  test("can be created with portId", () => {
    const port = new Port(Object.assign({portId: "specified"}, _.portInfo))
    expect(port.portId).toBe("specified")
  })

  test("can add message listeners", () => {
    const port = new Port(_.portInfo)
    const listener = () => {}

    port.onMessage.addListener(listener)

    expect(port.onMessage.hasListener(listener)).toBeTruthy()
  })

  test("message listeners get messages", () => {
    const port = new Port(_.portInfo)
    const listener = jest.fn()
    const message = port._buildMessage(_.payload)
    port.onMessage.addListener(listener)

    ipcRenderer.send(port.ipcChannel, message)

    expect(listener).toHaveBeenCalledWith(message.payload, port)
  })

  test("can add disconnect listeners", () => {
    const port = new Port(_.portInfo)
    const listener = () => {}

    port.onDisconnect.addListener(listener)

    expect(port.onDisconnect.hasListener(listener)).toBeTruthy()
  })

  describe("when disconnect message is received", () => {
    const port = new Port(_.portInfo)
    const listener = jest.fn()
    const disconnectMessage = config.disconnectMessageFor(port)
    port.onDisconnect.addListener(listener)
    ipcRenderer.send(port.ipcChannel, disconnectMessage)

    test("port is disconnected", () => {
      expect(port.disconnected).toBeTruthy()
    })

    test("disconnect listeners received notice", () => {
      expect(listener).toHaveBeenCalled() // todo: is it called with anything?
    })
  })

  describe("while disconnected", () => {
    const port = new Port(_.portInfo)
    const listener = jest.fn()
    port.disconnect()
    port.onDisconnect.addListener(listener)

    test("disconnect messages are not received", () => {
      const disconnectMessage = config.disconnectMessageFor(port)
      ipcRenderer.send(port.ipcChannel, disconnectMessage)
      expect(listener).not.toHaveBeenCalled()
    })

    test("subsequent messages are not received", () => {
      const message = port._buildMessage(_.payload)
      port.onMessage.addListener(listener)

      ipcRenderer.send(port.ipcChannel, message)

      expect(listener).not.toHaveBeenCalled()
    })

    test("port cannot be disconnected", () => {
      port.disconnect()
      expect(ipcRenderer.removeListener).not.toHaveBeenNthCalledWith(
        2, _.portInfo.ipcChannel, config.disconnectMessageFor(port)
      )
    })
  })


  test("can disconnect", () => {
    const port = new Port(_.portInfo)

    expect(() => port.disconnect()).not.toThrow()
  })

  describe("when disconnect()", () => {
    const port = new Port(_.portInfo)
    const listener = jest.fn()
    port.onDisconnect.addListener(listener)
    port.disconnect()

    test("port is disconnected", () => {
      port.disconnected = true
    })

    test("disconnect listeners do not receive notice", () => { // todo: do they receive the port as the message?
      expect(listener).not.toHaveBeenCalled()
    })

    test("disconnect message is sent", () => {
      expect(ipcRenderer.send).toHaveBeenCalledWith(
        _.portInfo.ipcChannel, config.disconnectMessageFor(port)
      )
    })
  })

  test("can post message", () => {
    const port = new Port(_.portInfo)

    expect(() => port.postMessage(_.payload)).not.toThrow()
  })

  describe("when message is sent", () => {
    const port = new Port(_.portInfo)

    port.postMessage(_.payload)

    expect(ipcRenderer.send)
      .toHaveBeenCalledWith(_.portInfo.ipcChannel, port._buildMessage(_.payload))
  })
})
