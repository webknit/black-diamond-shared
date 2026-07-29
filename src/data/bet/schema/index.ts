import { Schema } from "mongoose";

export const betSchema = new Schema(
  {
    selections: {
      type: [
        {
          _id: false,
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
      ],
      required: true,
    },
    stake: {
      type: Number,
      required: true,
    },
    unmatched: {
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
    cashout: {
      type: Boolean,
    },
    cashoutAmount: {
      type: Number,
    },
  },
  { timestamps: true },
);

betSchema.index({ createdAt: -1 });
betSchema.index({ fixture: 1 });
betSchema.index({ betType: 1 });
betSchema.index({ result: 1 });

betSchema.index({ createdAt: -1, betType: 1 });
betSchema.index({ createdAt: -1, result: 1 });
betSchema.index({ fixture: 1, betType: 1 });
