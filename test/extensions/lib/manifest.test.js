const Path = require("path")
const { ReadManifest } = require("../../../lib/extensions/lib/manifest.js")

describe("ReadManifest", () => {
  const manifest = ReadManifest(
    Path.join(__dirname, "../../fixtures/extension"),
    "extensionId"
  )

  test("it injects the source directory", () => {
    expect(manifest).toHaveProperty("srcDirectory")
  })

  test("it injects the extensionId", () => {
    expect(manifest).toHaveProperty("extensionId")
  })

  test("it errors with no extensionId", () => {
    expect(
      () => ReadManifest(Path.join(__dirname, "../../fixtures/extension"))
    ).toThrow()
  })

  test("it errors when bad source directory", () => {
    expect(
      () => ReadManifest("nonsense/path")
    ).toThrow()
  })
})
