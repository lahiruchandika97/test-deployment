const greet = require("./index");

test("greet function returns the correct greeting", () => {
  expect(greet("John")).toBe("Hello, John!");
});

// test