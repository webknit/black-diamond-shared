import { Document, Schema } from "mongoose";

export interface Bet extends Document {
  selections: {
    betName: string;
    fixture: Schema.Types.ObjectId;
    odds: number;
    winner?: boolean;
  }[];
  odds: number;
  stake: number;
  winner?: boolean;
  winAmount?: number;
  commissionAmount?: number;
  settled?: boolean;
  isMatched?: boolean;
}
