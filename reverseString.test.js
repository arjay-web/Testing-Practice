import { reverseString } from "./reverseString.js";

test("reverse the string FooBar", () => {
  expect(reverseString("FooBar")).toBe("raBooF");
});

test("reverse the string Arjay", () => {
  expect(reverseString("Arjay")).toBe("yajrA");
});

test("reverse the string hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverse the string 123,abc", () => {
  expect(reverseString("123,abc")).toBe("cba,321");
});
