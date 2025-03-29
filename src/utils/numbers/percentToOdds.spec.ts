import { describe, it, expect } from "vitest";
import { percentToOdds } from "./percentToOdds";

describe("percentToOdds", () => {
  const testCases = [
    { value: 50, toBe: 2.0 },
    { value: 25, toBe: 4.0 },
    { value: 10, toBe: 10.0 },
    { value: 83.3, toBe: 1.2 },
    { value: 77.8, toBe: 1.29 },
    { value: 43.48, toBe: 2.3 },
    { value: 40, toBe: 2.5 },
    { value: 35.71, toBe: 2.8 },
    { value: 30.77, toBe: 3.25 },
    { value: 26.67, toBe: 3.75 },
    { value: 22.22, toBe: 4.5 },
    { value: 13.33, toBe: 7.5 },
    { value: 4.35, toBe: 22.99 },
    { value: 0.91, toBe: 109.89 },
  ];

  testCases.forEach(({ value, toBe }) => {
    it(`should convert ${value}% to odds of ${toBe}`, () => {
      expect(percentToOdds(value)).toBe(toBe);
    });
  });
});
