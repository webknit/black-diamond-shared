import { BetTypes } from "../../bet/types";
import { League } from "../../league";

type BetStatsResult = {
  totalBettableFixtures: number;
  totalWins: number;
  totalLosses: number;
  winpc: number;
  balance: number;
  kitty: number;
  roi: number;
  profitPerBet: number;
  name: string;
  goalKey: "over0_5" | "over1_5" | "over2_5" | string;
  goals: number;
  minOdds: number;
  anyTeamLowScoring?: number;
  anyTeamDefensive?: number;
  checkBothTeams?: boolean;
  date: Date;
  averageOdds: number;
  totalOddsSum: number;
};

export interface BetStat {
  betType: BetTypes;
  betStats: BetStatsResult[][];
  betWins: {
    overall: {
      count: number;
      winPercent: number;
      averageOdds: number;
    };
    at_odds: [
      {
        odds: number;
        games: number;
        wins: number;
        winPercent: number;
        expectedOdds: number;
        resetTacticBalance2x: number;
        resetTacticPot2x: number;
        resetTacticBalanceOverOdds2x: number;
        resetTacticPotOverOdds2x: number;
        resetTacticBalance1_5x: number;
        resetTacticPot1_5x: number;
        resetTacticBalanceOverOdds1_5x: number;
        resetTacticPotOverOdds1_5x: number;
        resetTacticBalance1_3x: number;
        resetTacticPot1_3x: number;
        resetTacticBalanceOverOdds1_3x: number;
        resetTacticPotOverOdds1_3x: number;
        placingEveryBet: number;
      },
    ];
    per_league: [
      {
        league: League;
        winPercent: number;
        averageOdds: number;
        resetTacticBalance: number;
        resetTacticPot: number;
      },
    ];
    betting_on_odds_higher_league_percent: [
      {
        games: number;
        wins: number;
        winPercent: number;
        oddsHigherLeagueResetTacticBalance2x: number;
        oddsHigherLeagueResetTacticPot2x: number;
        oddsHigherLeagueResetTacticBalance1_5x: number;
        oddsHigherLeagueResetTacticPot1_5x: number;
        oddsHigherLeagueResetTacticBalance1_3x: number;
        oddsHigherLeagueResetTacticPot1_3x: number;
        date: Date;
        matchIds: string[];
      },
    ];
    // per_goals
    // gf, ga, combined
    based_on_prev: [
      {
        name: string;
        winPercent: number;
      },
    ];
    based_on_team_pos: [
      {
        name: string;
        winPercent: number;
      },
    ];
  };
}

/*

Example: over 0.5G

- % of times this bet wins
- When placing a bet on 0.5 at x odds what is the outcome
- when placing a bet on 0.5 at 1.05/1.1/1.2 what is outcome
- Placing when avergage goals over 0.5/1.5/2.5 overall
- When taking into consideration the position of the teams - when a top team plays bottom, when the teams are closer together - etc
- 0.5g by league - how does that effect the 

Need some way of summarising - finding the winning 

*/
