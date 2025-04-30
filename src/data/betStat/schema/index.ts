import { Schema } from "mongoose";
import { av } from "vitest/dist/chunks/reporters.D7Jzd9GS";

export const betStatSchema = new Schema(
  {
    betType: { type: String },
    betWins: {
      overall: {
        count: { type: Number },
        winPercent: { type: Number },
        averageOdds: { type: Number },
      },
      at_odds: [
        {
          odds: { type: Number },
          games: { type: Number },
          wins: { type: Number },
          winPercent: { type: Number },
          expectedOdds: { type: Number },
          resetTacticBalance2x: { type: Number },
          resetTacticPot2x: { type: Number },
          resetTacticBalanceOverOdds2x: { type: Number },
          resetTacticPotOverOdds2x: { type: Number },
          resetTacticBalance1_5x: { type: Number },
          resetTacticPot1_5x: { type: Number },
          resetTacticBalanceOverOdds1_5x: { type: Number },
          resetTacticPotOverOdds1_5x: { type: Number },
          resetTacticBalance1_3x: { type: Number },
          resetTacticPot1_3x: { type: Number },
          resetTacticBalanceOverOdds1_3x: { type: Number },
          resetTacticPotOverOdds1_3x: { type: Number },

          placingEveryBet: { type: Number },
        },
      ],
      per_league: [
        {
          league: {
            type: Schema.Types.ObjectId,
            ref: "League",
          },
          winPercent: { type: Number },
          resetTacticBalance: { type: Number },
          resetTacticPot: { type: Number },
          averageOdds: { type: Number },
        },
      ],
      betting_on_odds_higher_league_percent: {
        games: { type: Number },
        wins: { type: Number },
        winPercent: { type: Number },
      },
      based_on_prev: [
        {
          name: { type: String },
          winPercent: { type: Number },
        },
      ],
      based_on_team_pos: [
        {
          name: { type: String },
          winPercent: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);
