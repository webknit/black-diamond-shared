import { Fixture } from "../../fixture";
import { BetTypes } from "../types";

export const checkBetWin = (betType: BetTypes, fixture: Fixture) => {
  if (betType === "homeWin") {
    return fixture.score.fulltime.home > fixture.score.fulltime.away;
  }

  if (betType === "awayWin") {
    return fixture.score.fulltime.home < fixture.score.fulltime.away;
  }

  if (betType === "draw") {
    return fixture.score.fulltime.home === fixture.score.fulltime.away;
  }

  if (betType === "homeDrawDoubleChance") {
    return (
      fixture.score.fulltime.home > fixture.score.fulltime.away ||
      fixture.score.fulltime.home === fixture.score.fulltime.away
    );
  }

  if (betType === "awayDrawDoubleChance") {
    return (
      fixture.score.fulltime.home < fixture.score.fulltime.away ||
      fixture.score.fulltime.home === fixture.score.fulltime.away
    );
  }

  if (betType === "homeAwayDoubleChance") {
    return fixture.score.fulltime.home !== fixture.score.fulltime.away;
  }

  if (betType === "under0_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away < 1;
  }

  if (betType === "under1_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away < 2;
  }

  if (betType === "under2_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away < 3;
  }

  if (betType === "under3_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away < 4;
  }

  if (betType === "under4_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away < 5;
  }

  if (betType === "under5_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away < 6;
  }

  if (betType === "under6_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away < 7;
  }

  if (betType === "over0_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away > 0;
  }

  if (betType === "over1_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away > 1;
  }

  if (betType === "over2_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away > 2;
  }

  if (betType === "over3_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away > 3;
  }

  if (betType === "over4_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away > 4;
  }

  if (betType === "over5_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away > 5;
  }

  if (betType === "over6_5") {
    return fixture.score.fulltime.home + fixture.score.fulltime.away > 6;
  }

  if (betType === "BTTS") {
    return fixture.score.fulltime.home > 0 && fixture.score.fulltime.away > 0;
  }

  if (betType === "BTNTS") {
    return (
      fixture.score.fulltime.home === 0 || fixture.score.fulltime.away === 0
    );
  }

  return undefined;
};
