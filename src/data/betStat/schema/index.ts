import { Schema } from "mongoose";

export const betStatSchema = new Schema(
  {
    betType: { type: String },
    betWins: {
      overall: {
        count: { type: Number },
        percent: { type: Number },
        odds: { type: Number },
      },
      at_odds: [
        {
          odds: { type: Number },
          games: { type: Number },
          wins: { type: Number },
          percentWins: { type: Number },
          expectedOdds: { type: Number },
        },
      ],
      per_league: [
        {
          league: { type: Number },
          percent: { type: Number },
        },
      ],
      based_on_prev: [
        {
          name: { type: String },
          percent: { type: Number },
        },
      ],
      based_on_team_pos: [
        {
          name: { type: String },
          percent: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);
