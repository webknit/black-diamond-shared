import { describe, it, expect } from "vitest";
import { checkBetWin } from "./index";
import { Fixture } from "../../fixture";

describe("checkBetWin", () => {
  const createFixture = (homeScore: number, awayScore: number): Fixture =>
    ({
      goals: {
        home: homeScore,
        away: awayScore,
      },
      schore: {
        fulltime: {
          home: homeScore,
          away: awayScore,
        },
      },
      fixture: {},
      league: {},
      teams: {},
      events: [],
      status: {},
      referee: {},
    } as unknown as Fixture);

  it("should return true for homeWin bet type when home team wins", () => {
    const fixture = createFixture(2, 1);
    expect(checkBetWin("homeWin", fixture)).toBe(true);
  });

  it("should return false for homeWin bet type when home team loses", () => {
    const fixture = createFixture(1, 2);
    expect(checkBetWin("homeWin", fixture)).toBe(false);
  });

  it("should return true for awayWin bet type when away team wins", () => {
    const fixture = createFixture(1, 2);
    expect(checkBetWin("awayWin", fixture)).toBe(true);
  });

  it("should return false for awayWin bet type when away team loses", () => {
    const fixture = createFixture(2, 1);
    expect(checkBetWin("awayWin", fixture)).toBe(false);
  });

  it("should return true for draw bet type when the match is a draw", () => {
    const fixture = createFixture(1, 1);
    expect(checkBetWin("draw", fixture)).toBe(true);
  });

  it("should return false for draw bet type when the match is not a draw", () => {
    const fixture = createFixture(2, 1);
    expect(checkBetWin("draw", fixture)).toBe(false);
  });

  it("should return true for homeDrawDoubleChance bet type when home team wins or draws", () => {
    const fixtureWin = createFixture(2, 1);
    const fixtureDraw = createFixture(1, 1);
    expect(checkBetWin("homeDrawDoubleChance", fixtureWin)).toBe(true);
    expect(checkBetWin("homeDrawDoubleChance", fixtureDraw)).toBe(true);
  });

  it("should return false for homeDrawDoubleChance bet type when home team loses", () => {
    const fixture = createFixture(1, 2);
    expect(checkBetWin("homeDrawDoubleChance", fixture)).toBe(false);
  });

  it("should return true for awayDrawDoubleChance bet type when away team wins or draws", () => {
    const fixtureWin = createFixture(1, 2);
    const fixtureDraw = createFixture(1, 1);
    expect(checkBetWin("awayDrawDoubleChance", fixtureWin)).toBe(true);
    expect(checkBetWin("awayDrawDoubleChance", fixtureDraw)).toBe(true);
  });

  it("should return false for awayDrawDoubleChance bet type when away team loses", () => {
    const fixture = createFixture(2, 1);
    expect(checkBetWin("awayDrawDoubleChance", fixture)).toBe(false);
  });

  it("should return true for homeAwayDoubleChance bet type when match is not a draw", () => {
    const fixtureHomeWin = createFixture(2, 1);
    const fixtureAwayWin = createFixture(1, 2);
    expect(checkBetWin("homeAwayDoubleChance", fixtureHomeWin)).toBe(true);
    expect(checkBetWin("homeAwayDoubleChance", fixtureAwayWin)).toBe(true);
  });

  it("should return false for homeAwayDoubleChance bet type when match is a draw", () => {
    const fixture = createFixture(1, 1);
    expect(checkBetWin("homeAwayDoubleChance", fixture)).toBe(false);
  });

  it("should return true for under0_5 bet type when total goals are less than 1", () => {
    const fixture = createFixture(0, 0);
    expect(checkBetWin("under0_5", fixture)).toBe(true);
  });

  it("should return false for under0_5 bet type when total goals are 1 or more", () => {
    const fixture = createFixture(1, 0);
    expect(checkBetWin("under0_5", fixture)).toBe(false);
  });

  it("should return true for over0_5 bet type when total goals are more than 0", () => {
    const fixture = createFixture(1, 0);
    expect(checkBetWin("over0_5", fixture)).toBe(true);
  });

  it("should return false for over0_5 bet type when total goals are 0", () => {
    const fixture = createFixture(0, 0);
    expect(checkBetWin("over0_5", fixture)).toBe(false);
  });
});
