import { BetTypes } from "../../bet/types";

export interface BetStat {
  betType: BetTypes;
  betWins: {
    overall: {
      count: number;
      percent: number;
      minOdds: number;
    };
    at_odds: [
      {
        odds: number;
        percent: number;
      }
    ];
    per_league: [
      {
        leagueId: number;
        percent: number;
      }
    ];
    based_on_prev: [
      {
        name: string;
        percent: number;
      }
    ];
    based_on_team_pos: [
      {
        name: string;
        percent: number;
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
