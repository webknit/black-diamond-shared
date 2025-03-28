import { Schema } from "mongoose";

export const betStatSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
    },
    betWins: {
      type: Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);
