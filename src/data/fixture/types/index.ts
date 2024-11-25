import { TeamStat } from "../../teamStat";

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

export interface Fixture {
  fixture: FixtureFixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
  odds: Odds;
  teamStats?: {
    home: TeamStat;
    away: TeamStat;
  };
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
