import { Schema } from "mongoose";

export const betStatSchema = new Schema(
  {
    betType: {
      type: Schema.Types.String,
    },
    betWins: {
      type: Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);
