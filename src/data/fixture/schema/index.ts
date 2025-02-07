import { Schema } from "mongoose";

export const fixtureSchema = new Schema(
  {
    fixture: {
      type: Schema.Types.Mixed,
    },
    league: {
      type: Schema.Types.Mixed,
    },
    teams: {
      type: Schema.Types.Mixed,
    },
    goals: {
      type: Schema.Types.Mixed,
    },
    score: {
      type: Schema.Types.Mixed,
    },
    odds: {
      type: Schema.Types.Mixed,
    },
    apiPredictions: {
      type: Schema.Types.Mixed,
    },
    teamStats: {
      type: Schema.Types.Mixed,
    },
    prevFixtures: {
      home: {
        home: [
          {
            type: Schema.Types.ObjectId,
            ref: "Fixture",
          },
        ],
        all: [
          {
            type: Schema.Types.ObjectId,
            ref: "Fixture",
          },
        ],
      },
      away: {
        away: [
          {
            type: Schema.Types.ObjectId,
            ref: "Fixture",
          },
        ],
        all: [
          {
            type: Schema.Types.ObjectId,
            ref: "Fixture",
          },
        ],
      },
    },
    // refs: {
    //   refHomeTeamStat: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Stat",
    //   },
    //   refAwayTeamStat: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Stat",
    //   },
    //   refHomeTeam: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Team",
    //   },
    //   refAwayTeam: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Team",
    //   },
    // },
    // odds: {
    //   type: Schema.Types.Mixed,
    // },
    // prevFixtures: {
    //   home: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "Fixture",
    //     },
    //   ],
    //   away: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "Fixture",
    //     },
    //   ],
    // },
    // apiPredictions: {
    //   type: Schema.Types.Mixed,
    // },
    // predictions: {
    //   type: Schema.Types.Mixed,
    // },
    // topBets: {
    //   type: Schema.Types.Mixed,
    // },
    // keyStats: {
    //   type: Schema.Types.Mixed,
    // },
    // info: {
    //   type: Schema.Types.Mixed,
    // },
  },
  { timestamps: true }
);
