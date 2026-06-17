import { analyzeArray } from "./analyzeArray.js";

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze array with negative numbers", () => {
  expect(analyzeArray([-5, 10, 0, -2, 7])).toEqual({
    average: 2,
    min: -5,
    max: 10,
    length: 5,
  });
});
