import { calculator } from "./calculator.js";

test("add two numbers", () => {
  expect(calculator.add(6, 7)).toBe(13);
  expect(calculator.add(12, 8)).toBe(20);
});

test("subtract two numbers", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
  expect(calculator.subtract(42, 24)).toBe(18);
});

test("divide two numbers", () => {
  expect(calculator.divide(24, 6)).toBe(4);
  expect(calculator.divide(25, 5)).toBe(5);
});

test("multiply  two numbers", () => {
  expect(calculator.multiply(6, 8)).toBe(48);
  expect(calculator.multiply(10, 5)).toBe(50);
});
