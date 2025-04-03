import { MongoDocument } from "../../.shared/types/mongoDocument";
import { betTypesInfo } from "../data";
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
  cashout?: Boolean;
  cashoutAmount?: number;
  isNotMatched?: boolean;
}

export type BetTypes = keyof typeof betTypesInfo;
