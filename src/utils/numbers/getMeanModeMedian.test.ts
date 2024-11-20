import { describe, it, expect } from "vitest";
import { getMeanModeMedian } from "./getMeanModeMedian";

describe("getMeanModeMedian", () => {
  it("should return mean, median, and mode for a non-empty array", () => {
    const numbers = [1, 2, 2, 3, 4];
    const result = getMeanModeMedian(numbers);
    expect(result).toEqual({
      mean: 2.4,
      median: 2,
      mode: 2,
    });
  });

  it("should return mean, median, and mode for an array with one element", () => {
    const numbers = [5];
    const result = getMeanModeMedian(numbers);
    expect(result).toEqual({
      mean: 5,
      median: 5,
      mode: 5,
    });
  });

  it("should return mean, median, and mode for an empty array", () => {
    const numbers: number[] = [];
    const result = getMeanModeMedian(numbers);
    expect(result).toEqual({
      mean: 0,
      median: 0,
      mode: 0,
    });
  });

  it("should return mean, median, and mode for an array with multiple modes", () => {
    const numbers = [1, 1, 2, 2, 3];
    const result = getMeanModeMedian(numbers);
    expect(result).toEqual({
      mean: 1.8,
      median: 2,
      mode: 1,
    });
  });

  it("should return mean, median, and mode for an array with negative numbers", () => {
    const numbers = [-1, -2, -2, -3, -4];
    const result = getMeanModeMedian(numbers);
    expect(result).toEqual({
      mean: -2.4,
      median: -2,
      mode: -2,
    });
  });

  it("should return mean, median, and mode for an array with negative numbers", () => {
    const numbers = [10, 10, 20, 40, 70];
    const result = getMeanModeMedian(numbers);
    expect(result).toEqual({
      mean: 30,
      median: 20,
      mode: 10,
    });
  });

  it("should return mean, median, and mode for an array with negative numbers", () => {
    const numbers = [21, 21, 21, 23, 24, 26, 26, 28, 29, 30, 31, 33];
    const result = getMeanModeMedian(numbers);
    expect(result.mode).toEqual(21);
  });
});
