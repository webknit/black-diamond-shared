import { League } from "../types";
import { Schema } from "mongoose";

export const leagueSchema = new Schema<League>(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    logo: {
      type: String,
    },
    country: {
      name: {
        type: String,
      },
      code: {
        type: String,
      },
      flag: {
        type: String,
      },
    },
    stats: {
      type: Schema.Types.Mixed,
    },
    prevStats: {
      type: [Schema.Types.Mixed],
    },
    currentSeason: {
      type: Number,
    },
  },
  { timestamps: true }
);
