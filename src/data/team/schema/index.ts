import { Schema } from "mongoose";

export const teamSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    league: {
      type: Schema.Types.ObjectId,
      ref: "League",
    },
    stats: {
      type: Schema.Types.ObjectId,
      ref: "TeamStat",
    },
    currentSeason: {
      type: Number,
    },
    fixtures: [
      {
        type: Schema.Types.ObjectId,
        ref: "Fixture",
      },
    ],
  },
  { timestamps: true }
);
