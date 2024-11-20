import { describe, it, expect } from "vitest";
import { toPercent } from "./toPercent";

describe("toPercent", () => {
  it("should return the correct percentage", () => {
    const testCases = [
      { value: 50, total: 200, expected: 25 },
      { value: 1, total: 4, expected: 25 },
      { value: 0, total: 100, expected: 0 },
      { value: 0, total: 0, expected: 0 },
      { value: 301, total: 127, expected: 237.00787401574803 },
    ];

    testCases.forEach(({ value, total, expected }) => {
      expect(toPercent(value, total)).toBe(expected);
    });
  });
});
