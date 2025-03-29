export const percentToOdds = (p: number) => {
  let perc = p;

  if (perc == 0) perc = 99;

  // 1 divided by (the percentage divided by 100) e.g. a probability of 50% = 1 / (50 / 100) = 2.
  return parseFloat((1 / (perc / 100)).toFixed(2));
};
