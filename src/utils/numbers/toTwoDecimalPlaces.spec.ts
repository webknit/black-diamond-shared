import { describe, it, expect } from "vitest";
import { toTwoDecimalPlaces } from "./toTwoDecimalPlaces";

describe("toTwoDecimalPlaces", () => {
  const testCases = [
    { input: 1.23456, expected: 1.23 },
    { input: 2.00001, expected: 2 },
    { input: 1.004, expected: 1 },
    { input: 1.0, expected: 1 },
    { input: 1234.5678, expected: 1234.57 },
    { input: 1234.5648, expected: 1234.56 },
    { input: 2.37684, expected: 2.38 },
    { input: 2.37484, expected: 2.37 },
    { input: -1.0111111, expected: -1.01 },
    { input: -1.004, expected: -1.0 },
    { input: 0.0, expected: 0 },
    { input: 0, expected: 0 },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should round ${input} to ${expected}`, () => {
      expect(toTwoDecimalPlaces(input)).toBe(expected);
    });
  });
});
