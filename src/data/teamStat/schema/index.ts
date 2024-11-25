import { Schema } from "mongoose";

export const teamStatSchema = new Schema(
  {
    leaguePosition: { type: Number },
    team: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      logo: { type: String, required: true },
    },
    biggest: {
      streak: {
        wins: { type: Number },
        draws: { type: Number },
        loses: { type: Number },
      },
      wins: {
        home: { type: String },
        away: { type: String },
      },
      loses: {
        home: { type: String },
        away: { type: String },
      },
      goals: {
        for: {
          home: { type: Number },
          away: { type: Number },
        },
        against: {
          home: { type: Number },
          away: { type: Number },
        },
      },
    },
    cards: {
      yellow: {
        "0-15": {
          total: { type: Number },
          percentage: { type: String },
        },
        "16-30": {
          total: { type: Number },
          percentage: { type: String },
        },
        "31-45": {
          total: { type: Number },
          percentage: { type: String },
        },
        "46-60": {
          total: { type: Number },
          percentage: { type: String },
        },
        "61-75": {
          total: { type: Number },
          percentage: { type: String },
        },
        "76-90": {
          total: { type: Number },
          percentage: { type: String },
        },
        "91-105": {
          total: { type: Number },
          percentage: { type: String },
        },
        "106-120": {
          total: { type: Number },
          percentage: { type: String },
        },
      },
      red: {
        "0-15": {
          total: { type: Number },
          percentage: { type: String },
        },
        "16-30": {
          total: { type: Number },
          percentage: { type: String },
        },
        "31-45": {
          total: { type: Number },
          percentage: { type: String },
        },
        "46-60": {
          total: { type: Number },
          percentage: { type: String },
        },
        "61-75": {
          total: { type: Number },
          percentage: { type: String },
        },
        "76-90": {
          total: { type: Number },
          percentage: { type: String },
        },
        "91-105": {
          total: { type: Number },
          percentage: { type: String },
        },
        "106-120": {
          total: { type: Number },
          percentage: { type: String },
        },
      },
    },
    clean_sheet: {
      home: { type: Number },
      away: { type: Number },
      total: { type: Number },
    },
    createdAt: { type: Date, default: Date.now },
    failed_to_score: {
      home: { type: Number },
      away: { type: Number },
      total: { type: Number },
    },
    fixtures: {
      played: {
        home: { type: Number },
        away: { type: Number },
        total: { type: Number },
      },
      wins: {
        home: { type: Number },
        away: { type: Number },
        total: { type: Number },
      },
      draws: {
        home: { type: Number },
        away: { type: Number },
        total: { type: Number },
      },
      loses: {
        home: { type: Number },
        away: { type: Number },
        total: { type: Number },
      },
    },
    form: { type: String },
    goals: {
      for: {
        total: {
          home: { type: Number },
          away: { type: Number },
          total: { type: Number },
        },
        average: {
          home: { type: String },
          away: { type: String },
          total: { type: String },
        },
        minute: {
          "0-15": {
            total: { type: Number },
            percentage: { type: String },
          },
          "16-30": {
            total: { type: Number },
            percentage: { type: String },
          },
          "31-45": {
            total: { type: Number },
            percentage: { type: String },
          },
          "46-60": {
            total: { type: Number },
            percentage: { type: String },
          },
          "61-75": {
            total: { type: Number },
            percentage: { type: String },
          },
          "76-90": {
            total: { type: Number },
            percentage: { type: String },
          },
          "91-105": {
            total: { type: Number },
            percentage: { type: String },
          },
          "106-120": {
            total: { type: Number },
            percentage: { type: String },
          },
        },
        under_over: {
          "0.5": {
            over: { type: Number },
            under: { type: Number },
          },
          "1.5": {
            over: { type: Number },
            under: { type: Number },
          },
          "2.5": {
            over: { type: Number },
            under: { type: Number },
          },
          "3.5": {
            over: { type: Number },
            under: { type: Number },
          },
          "4.5": {
            over: { type: Number },
            under: { type: Number },
          },
        },
      },
      against: {
        total: {
          home: { type: Number },
          away: { type: Number },
          total: { type: Number },
        },
        average: {
          home: { type: String },
          away: { type: String },
          total: { type: String },
        },
        minute: {
          "0-15": {
            total: { type: Number },
            percentage: { type: String },
          },
          "16-30": {
            total: { type: Number },
            percentage: { type: String },
          },
          "31-45": {
            total: { type: Number },
            percentage: { type: String },
          },
          "46-60": {
            total: { type: Number },
            percentage: { type: String },
          },
          "61-75": {
            total: { type: Number },
            percentage: { type: String },
          },
          "76-90": {
            total: { type: Number },
            percentage: { type: String },
          },
          "91-105": {
            total: { type: Number },
            percentage: { type: String },
          },
          "106-120": {
            total: { type: Number },
            percentage: { type: String },
          },
        },
        under_over: {
          "0.5": {
            over: { type: Number },
            under: { type: Number },
          },
          "1.5": {
            over: { type: Number },
            under: { type: Number },
          },
          "2.5": {
            over: { type: Number },
            under: { type: Number },
          },
          "3.5": {
            over: { type: Number },
            under: { type: Number },
          },
          "4.5": {
            over: { type: Number },
            under: { type: Number },
          },
        },
      },
    },
    league: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      country: { type: String, required: true },
      logo: { type: String, required: true },
      flag: { type: String, required: true },
      season: { type: Number, required: true },
    },
    lineups: [
      {
        formation: { type: String },
        played: { type: Number },
      },
    ],
    penalty: {
      scored: {
        total: { type: Number },
        percentage: { type: String },
      },
      missed: {
        total: { type: Number },
        percentage: { type: String },
      },
      total: { type: Number },
    },
  },
  { timestamps: true }
);
