import { toTwoDecimalPlaces } from "./toTwoDecimalPlaces";

export function calculateWinAfterCommission(amount: number): {
  commission: number;
  totalLeft: number;
} {
  if (amount <= 0) {
    return { commission: 0, totalLeft: amount };
  }
  const commission = toTwoDecimalPlaces(amount * 0.02);
  const totalLeft = toTwoDecimalPlaces(amount - commission);
  return { commission, totalLeft };
}
