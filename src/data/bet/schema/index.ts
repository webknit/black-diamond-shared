import { Schema } from "mongoose";

export const betSchema = new Schema(
  {
    selections: {
      type: [
        new Schema(
          {
            betType: {
              type: String,
              required: true,
            },
            fixture: {
              type: Schema.Types.ObjectId,
              ref: "Fixture",
            },
            odds: {
              type: Number,
              required: true,
            },
            winner: {
              type: Boolean,
            },
          },
          { _id: false }
        ),
      ],
      required: true,
    },
    stake: {
      type: Number,
      required: true,
    },
    isMatched: {
      type: Boolean,
    },
    odds: {
      type: Number,
      required: true,
    },
    winner: {
      type: Boolean,
    },
    winAmount: {
      type: Number,
    },
    commissionAmount: {
      type: Number,
    },
    settled: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
