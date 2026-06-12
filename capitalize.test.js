import { capitalize } from "./capitalize.js";

test("capitalize the first character of string", () => {
  expect(capitalize("string")).toBe("String");
});

test("capitalize the first character of fooBar", () => {
  expect(capitalize("fooBar")).toBe("FooBar");
});

test("capitalize the first character of hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
