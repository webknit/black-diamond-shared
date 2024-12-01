export interface League {
  id: number;
  name?: string;
  logo?: string;
  country?: {
    name?: string;
    code?: string;
    flag?: string;
  };
  stats?: {
    played: number;
    goals: number;
    wins: {
      value: number;
      percent: string;
    };
    draws: {
      value: number;
      percent: string;
    };
    nilnil: {
      value: number;
      percent: string;
    };
    BTTS: {
      value: number;
      percent: string;
    };
    over0Goal: {
      value: number;
      percent: string;
    };
    over1Goal: {
      value: number;
      percent: string;
    };
    over2Goal: {
      value: number;
      percent: string;
    };
    under2Goal: {
      value: number;
      percent: string;
    };
    under3Goal: {
      value: number;
      percent: string;
    };
    goalsPerGame: string;
  };
  currentSeason?: number;
}
