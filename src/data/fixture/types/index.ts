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

export interface Fixture {
  fixture: FixtureFixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
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
