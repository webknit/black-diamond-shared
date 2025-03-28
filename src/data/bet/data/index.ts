export const betTypesInfo = {
  homeWin: {
    shortName: "H",
    nameWithTitle: "H",
    label: "Home Win",
  },
  awayWin: {
    shortName: "Away",
    nameWithTitle: "A",
    label: "Away Win",
  },
  draw: {
    shortName: "Draw",
    nameWithTitle: "D",
    label: "Draw",
  },
  homeDrawDoubleChance: {
    shortName: "1X",
    nameWithTitle: "1X",
    label: "Home/Draw Double Chance",
  },
  awayDrawDoubleChance: {
    shortName: "2X",
    nameWithTitle: "2X",
    label: "Away/Draw Double Chance",
  },
  homeAwayDoubleChance: {
    shortName: "12",
    nameWithTitle: "12",
    label: "Home/Away Double Chance",
  },
  over0_5: {
    shortName: "Over 0.5",
    nameWithTitle: "0.5",
    label: "Over 0.5",
  },
  under0_5: {
    shortName: "Under 0.5",
    nameWithTitle: "0.5",
    label: "Under 0.5",
  },
  over1_5: {
    shortName: "Over 1.5",
    nameWithTitle: "1.5",
    label: "Over 1.5",
  },
  under1_5: {
    shortName: "Under 1.5",
    nameWithTitle: "1.5",
    label: "Under 1.5",
  },
  over2_5: {
    shortName: "Over 2.5",
    nameWithTitle: "2.5",
    label: "Over 2.5",
  },
  under2_5: {
    shortName: "Under 2.5",
    nameWithTitle: "2.5",
    label: "Under 2.5",
  },
  over3_5: {
    shortName: "Over 3.5",
    nameWithTitle: "3.5",
    label: "Over 3.5",
  },
  under3_5: {
    shortName: "Under 3.5",
    nameWithTitle: "3.5",
    label: "Under 3.5",
  },
  over4_5: {
    shortName: "Over 4.5",
    nameWithTitle: "4.5",
    label: "Over 4.5",
  },
  under4_5: {
    shortName: "Under 4.5",
    nameWithTitle: "4.5",
    label: "Under 4.5",
  },
  over5_5: {
    shortName: "Over 5.5",
    nameWithTitle: "5.5",
    label: "Over 5.5",
  },
  under5_5: {
    shortName: "Under 5.5",
    nameWithTitle: "5.5",
    label: "Under 5.5",
  },
  over6_5: {
    shortName: "Over 6.5",
    nameWithTitle: "6.5",
    label: "Over 6.5",
  },
  under6_5: {
    shortName: "Under 6.5",
    nameWithTitle: "6.5",
    label: "Under 6.5",
  },
  BTTS: {
    shortName: "BTTS",
    nameWithTitle: "BTTS",
    label: "BTTS",
  },
  BTNTS: {
    shortName: "BTNTS",
    nameWithTitle: "BTNTS",
    label: "BTNTS",
  },
};

export type BetTypes = keyof typeof betTypesInfo;
