import { Schema } from "mongoose";
import { MongoDocument } from "../../.shared/types/mongoDocument";
export interface TeamStat extends MongoDocument {
  prevFixtures: {
    home?: string[];
    away?: string[];
    all: string[];
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  biggest: {
    streak: {
      wins: number;
      draws: number;
      loses: number;
    };
    wins: {
      home: string;
      away: string;
    };
    loses: {
      home: string;
      away: string;
    };
    goals: {
      for: {
        home: number;
        away: number;
      };
      against: {
        home: number;
        away: number;
      };
    };
  };
  cards: {
    yellow: Record<string, { total: number; percentage: string }>;
    red: Record<string, { total: number; percentage: string }>;
  };
  clean_sheet: {
    home: number;
    away: number;
    total: number;
  };
  createdAt: Date;
  failed_to_score: {
    home: number;
    away: number;
    total: number;
  };
  fixtures: {
    played: {
      home: number;
      away: number;
      total: number;
    };
    wins: {
      home: number;
      away: number;
      total: number;
    };
    draws: {
      home: number;
      away: number;
      total: number;
    };
    loses: {
      home: number;
      away: number;
      total: number;
    };
  };
  form: string;
  formHome: string;
  formAway: string;
  goals: {
    for: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      minute: Record<string, { total: number; percentage: string }>;
      under_over: Record<string, { over: number; under: number }>;
    };
    against: {
      total: {
        home: number;
        away: number;
        total: number;
      };
      average: {
        home: string;
        away: string;
        total: string;
      };
      minute: Record<string, { total: number; percentage: string }>;
      under_over: Record<string, { over: number; under: number }>;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  lineups: {
    formation: string;
    played: number;
  }[];
  penalty: {
    scored: {
      total: number;
      percentage: string;
    };
    missed: {
      total: number;
      percentage: string;
    };
    total: number;
  };
  leaguePosition: number;
  leagueTeams: number;
  leaguePoints: number;
}
