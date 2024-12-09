import { Schema } from "mongoose";

export const accountSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
    },
    outstandingBets: {
      type: Number,
    },
    depositTotal: {
      type: Number,
    },
    deposits: {
      type: Array,
    },
    expenseTotal: {
      type: Number,
    },
    expenses: {
      type: Array,
    },
  },
  { timestamps: true }
);
