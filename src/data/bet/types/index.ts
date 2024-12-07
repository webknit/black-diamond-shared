import { Schema } from "mongoose";
import { MongoDocument } from "../../.shared/types/mongoDocument";

export interface Bet extends MongoDocument {
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
