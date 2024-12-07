import { Document } from "mongoose";

export interface League extends Document {
  id: number;
  name?: string;
  logo?: string;
  country?: {
    name?: string;
    code?: string;
    flag?: string;
  };
  stats: {
    played: number;
    goals: number;
    goalsPerGame: {
      mean: number;
      mode: number;
      median: number;
    };
    wins: {
      total: number;
      percent: number;
    };
    draws: {
      total: number;
      percent: number;
    };
    BTTS: {
      total: number;
      percent: number;
    };
    over0_5: {
      total: number;
      percent: number;
    };
    over1_5: {
      total: number;
      percent: number;
    };
    over2_5: {
      total: number;
      percent: number;
    };
    under0_5: {
      total: number;
      percent: number;
    };
    under1_5: {
      total: number;
      percent: number;
    };
    under2_5: {
      total: number;
      percent: number;
    };
  };
  currentSeason?: number;
}
