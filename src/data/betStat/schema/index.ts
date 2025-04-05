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
          resetTacticBalance10x: { type: Number },
          resetTacticPot10x: { type: Number },
          resetTacticBalance5x: { type: Number },
          resetTacticPot5x: { type: Number },
          resetTacticBalance3x: { type: Number },
          resetTacticPot3x: { type: Number },
          resetTacticBalanceOverOdds10x: { type: Number },
          resetTacticPotOverOdds10x: { type: Number },
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
