describe("Connecting to DB", () => {
  const data = require("../config/connection.js");
  test("Connecting", () => {
    expect(typeof data).toBe("object");
  });
  test(`Testing Promisified`, () => {});
});
