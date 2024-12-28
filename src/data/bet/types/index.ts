import { Schema } from "mongoose";
import { MongoDocument } from "../../.shared/types/mongoDocument";
import { betTypes } from "../data";
import { Fixture } from "../../fixture";

export interface BetSelectionWithFixture extends Omit<BetSelection, "fixture"> {
  fixture: Fixture;
}

export interface BetSelection {
  betType: BetTypes;
  fixture: string;
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
  cashoutAmount?: number;
}

export type BetTypes = keyof typeof betTypes;
