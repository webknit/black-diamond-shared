import { describe, it, expect } from "vitest";
import { calculateWinAfterCommission } from "./calculateWinAfterCommission";

describe("calculateWinAfterCommission", () => {
  it("should calculate the correct commission and total left for a given amount", () => {
    const result = calculateWinAfterCommission(100);
    expect(result).toEqual({ commission: 2, totalLeft: 98 });
  });

  it("rounds to two decimal places correctly", () => {
    const result = calculateWinAfterCommission(15.8);
    expect(result).toEqual({ commission: 0.32, totalLeft: 15.48 });
  });

  it("should handle zero amount correctly", () => {
    const result = calculateWinAfterCommission(0);
    expect(result).toEqual({ commission: 0, totalLeft: 0 });
  });

  it("should handle small amounts correctly", () => {
    const result = calculateWinAfterCommission(0.01);
    expect(result).toEqual({ commission: 0, totalLeft: 0.01 });
  });

  it("should handle large amounts correctly", () => {
    const result = calculateWinAfterCommission(1000000);
    expect(result).toEqual({ commission: 20000, totalLeft: 980000 });
  });
});
