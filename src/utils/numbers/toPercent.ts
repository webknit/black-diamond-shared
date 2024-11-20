export function toPercent(value: number, total: number): number {
  if (total === 0) {
    return 0;
  }
  return (value * 100) / total;
}
