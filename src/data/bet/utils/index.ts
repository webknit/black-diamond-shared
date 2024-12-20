import { Fixture } from "../../fixture";
import { BetTypes } from "../types";

export const checkBetWin = (betType: BetTypes, fixture: Fixture) => {
  if (betType === "homeWin") {
    return fixture.goals.home > fixture.goals.away;
  }

  if (betType === "awayWin") {
    return fixture.goals.home < fixture.goals.away;
  }

  if (betType === "draw") {
    return fixture.goals.home === fixture.goals.away;
  }

  if (betType === "homeDrawDoubleChance") {
    return (
      fixture.goals.home > fixture.goals.away ||
      fixture.goals.home === fixture.goals.away
    );
  }

  if (betType === "awayDrawDoubleChance") {
    return (
      fixture.goals.home < fixture.goals.away ||
      fixture.goals.home === fixture.goals.away
    );
  }

  if (betType === "homeAwayDoubleChance") {
    return fixture.goals.home !== fixture.goals.away;
  }

  if (betType === "under0_5") {
    return fixture.goals.home + fixture.goals.away < 1;
  }

  if (betType === "under1_5") {
    return fixture.goals.home + fixture.goals.away < 2;
  }

  if (betType === "under2_5") {
    return fixture.goals.home + fixture.goals.away < 3;
  }

  if (betType === "under3_5") {
    return fixture.goals.home + fixture.goals.away < 4;
  }

  if (betType === "under4_5") {
    return fixture.goals.home + fixture.goals.away < 5;
  }

  if (betType === "under5_5") {
    return fixture.goals.home + fixture.goals.away < 6;
  }

  if (betType === "under6_5") {
    return fixture.goals.home + fixture.goals.away < 7;
  }

  if (betType === "over0_5") {
    return fixture.goals.home + fixture.goals.away > 0;
  }

  if (betType === "over1_5") {
    return fixture.goals.home + fixture.goals.away > 1;
  }

  if (betType === "over2_5") {
    return fixture.goals.home + fixture.goals.away > 2;
  }

  if (betType === "over3_5") {
    return fixture.goals.home + fixture.goals.away > 3;
  }

  if (betType === "over4_5") {
    return fixture.goals.home + fixture.goals.away > 4;
  }

  if (betType === "over5_5") {
    return fixture.goals.home + fixture.goals.away > 5;
  }

  if (betType === "over6_5") {
    return fixture.goals.home + fixture.goals.away > 6;
  }

  if (betType === "BTTS") {
    return fixture.goals.home > 0 && fixture.goals.away > 0;
  }

  if (betType === "BTNTS") {
    return fixture.goals.home === 0 || fixture.goals.away === 0;
  }

  return undefined;
};
