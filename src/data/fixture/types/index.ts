import { TeamStat } from "../../teamStat";

import { MongoDocument } from "../../.shared/types/mongoDocument";

interface FixtureFixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: number;
    second: number;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: number;
    extra: null | any;
  };
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

interface Teams {
  home: Team;
  away: Team;
}

interface Goals {
  home: number;
  away: number;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals | null;
  penalty: Goals | null;
}

interface Odds {
  match_winner?: {
    home?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    draw?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    away?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
  };
  home_away?: {
    home?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    away?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
  };
  goals_over_under?: {
    over1_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under1_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over2_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under2_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over3_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under3_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over4_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under4_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over5_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under5_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over6_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under6_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over0_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under0_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over8_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under8_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over9_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under9_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over7_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under7_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
  };
  goals_over_under_first_half?: {
    over1_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under1_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over2_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under2_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over0_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under0_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over3_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under3_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    over4_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    under4_5?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
  };
  both_teams_score?: {
    yes: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    no: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
  };
  double_chance?: {
    "home/draw"?: {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    "home/away": {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
    "draw/away": {
      betfair?: number;
      william_hill?: number;
      bet365?: number;
    };
  };
}

export interface Fixture extends MongoDocument {
  fixture: FixtureFixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
  odds: Odds;
  teamStats?: {
    home?: TeamStat;
    away?: TeamStat;
  };
  apiPredictions?: ApiPredictions;
  prevFixtures?: PrevFixtures;
  // refs?: {
  //   refHomeTeamStat?: string;
  //   refAwayTeamStat?: string;
  //   refHomeTeam?: string;
  //   refAwayTeam?: string;
  // };
  // odds?: any;
  // prevFixtures?: {
  //   home?: string[];
  //   away?: string[];
  // };
  // apiPredictions?: any;
  // predictions?: any;
  // topBets?: any;
  // keyStats?: any;
  // info?: any;
}

interface PrevFixtures {
  homeTeam?: {
    home?: Fixture[];
    all?: Fixture[];
  };
  awayTeam?: {
    away?: Fixture[];
    all?: Fixture[];
  };
}
interface TeamLast5 {
  played: number;
  form: string;
  att: string;
  def: string;
  goals: {
    for: {
      total: number;
      average: string;
    };
    against: {
      total: number;
      average: string;
    };
  };
}

interface TeamLeague {
  form: string;
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
      minute: {
        [key: string]: {
          total: number | null;
          percentage: string | null;
        };
      };
      under_over: {
        [key: string]: {
          over: number;
          under: number;
        };
      };
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
      minute: {
        [key: string]: {
          total: number | null;
          percentage: string | null;
        };
      };
      under_over: {
        [key: string]: {
          over: number;
          under: number;
        };
      };
    };
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
  clean_sheet: {
    home: number;
    away: number;
    total: number;
  };
  failed_to_score: {
    home: number;
    away: number;
    total: number;
  };
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
  lineups: {
    formation: string;
    played: number;
  }[];
  cards: {
    yellow: {
      [key: string]: {
        total: number | null;
        percentage: string | null;
      };
    };
    red: {
      [key: string]: {
        total: number | null;
        percentage: string | null;
      };
    };
  };
}

interface TeamData {
  id: number;
  name: string;
  logo: string;
  last_5: TeamLast5;
  league: TeamLeague;
}

interface Comparison {
  form: {
    home: string;
    away: string;
  };
  att: {
    home: string;
    away: string;
  };
  def: {
    home: string;
    away: string;
  };
  poisson_distribution: {
    home: string;
    away: string;
  };
  h2h: {
    home: string;
    away: string;
  };
  goals: {
    home: string;
    away: string;
  };
  total: {
    home: string;
    away: string;
  };
}

interface H2HFixture {
  fixture: FixtureFixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

interface ApiPredictions {
  predictions: {
    winner: {
      id: number;
      name: string;
      comment: string;
    };
    win_or_draw: boolean;
    under_over: string;
    goals: {
      home: string;
      away: string;
    };
    advice: string;
    percent: {
      home: string;
      draw: string;
      away: string;
    };
  };
  teams: {
    home: TeamData;
    away: TeamData;
  };
  comparison: Comparison;
  h2h: H2HFixture[];
}
