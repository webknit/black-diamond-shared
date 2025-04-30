import { BetTypes } from "../../bet/types";
import { League } from "../../league";

export interface BetStat {
  betType: BetTypes;
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
      }
    ];
    per_league: [
      {
        league: League;
        winPercent: number;
        averageOdds: number;
        resetTacticBalance: number;
        resetTacticPot: number;
      }
    ];
    betting_on_odds_higher_league_percen: {
      games: number;
      wins: number;
      winPercent: number;
    };
    based_on_prev: [
      {
        name: string;
        winPercent: number;
      }
    ];
    based_on_team_pos: [
      {
        name: string;
        winPercent: number;
      }
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
