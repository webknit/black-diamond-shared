import { Schema } from "mongoose";
import { MongoDocument } from "../../.shared/types/mongoDocument";
import { betTypes } from "../data";

export interface BetSelection {
  betType: string;
  fixture: Schema.Types.ObjectId;
  odds: number;
  winner?: boolean;
}

export interface Bet extends MongoDocument {
  selections: BetSelection[];
  odds: number;
  stake: number;
  winner?: boolean;
  winAmount?: number;
  commissionAmount?: number;
  settled?: boolean;
  isMatched?: boolean;
}

export type BetTypes = keyof typeof betTypes;
