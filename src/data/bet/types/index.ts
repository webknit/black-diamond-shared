import { Schema } from "mongoose";

export interface Bet {
  selections: {
    betName: string;
    fixture: Schema.Types.ObjectId;
    odds: number;
    winner?: boolean;
  }[];
  stake: number;
  winner?: boolean;
  winAmount?: number;
  commissionAmount?: number;
  settled?: boolean;
  isMatched?: boolean;
}
