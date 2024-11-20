// The four averages are the mean, median, mode, and range.
// The mean is what you typically think as the average - found by summing all values and dividing the sum by the number of values.
// The median is the middle value of the set (or the average of the two middle values if the set is even).
// The mode is the piece of data that occurs the most
// The range is the difference between the highest and lowest values.

export const getMeanModeMedian = (numbers: number[]) => {
  if (numbers.length === 0) return { mean: 0, median: 0, mode: 0 };

  // Mean
  const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

  // Median
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sortedNumbers.length / 2);
  const median =
    sortedNumbers.length % 2 !== 0
      ? sortedNumbers[mid]
      : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;

  // Mode
  const frequency: { [key: number]: number } = {};
  let maxFreq = 0;
  let mode = numbers[0];

  numbers.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  });

  return { mean, median, mode };
};
