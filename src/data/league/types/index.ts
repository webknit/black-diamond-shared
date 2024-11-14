export interface League {
  id: number;
  name?: string;
  logo?: string;
  country?: {
    name?: string;
    code?: string;
    flag?: string;
  };
  stats?: any;
  currentSeason?: number;
}
