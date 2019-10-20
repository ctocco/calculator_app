import { performCalculation } from "./functions";

test("Adds 4 + 4 to equal 8", () => {
  expect(performCalculation["+"](4, 4)).toBe(8);
});

test("Adds 4 - 4 to equal 8", () => {
  expect(performCalculation["-"](4, 4)).toBe(0);
});

test("Adds 4 * 4 to equal 16", () => {
  expect(performCalculation["*"](4, 4)).toBe(16);
});

test("Adds 4 + 4 to equal 1", () => {
  expect(performCalculation["/"](4, 4)).toBe(1);
});
