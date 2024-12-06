import { Schema } from "mongoose";

export const betSchema = new Schema(
  {
    selections: {
      type: [
        {
          betName: {
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
      ],
      required: true,
    },
    betName: {
      type: String,
      required: true,
    },
    // bookie: {
    //   type: String,
    //   required: true,
    // },
    fixture: {
      type: Schema.Types.ObjectId,
      ref: "Fixture",
    },
    stake: {
      type: Number,
      required: true,
    },
    // isInPlay: {
    //   type: Boolean,
    //   required: true,
    // },
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
