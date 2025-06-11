export interface Account {
  email: string;
  password: string;
  balance: number;
  outstandingBets: number;
  depositTotal: number;
  deposits: any[];
  expenseTotal: number;
  expenses: any[];
  balanceHistoryDay: { date: Date; balance: number }[];
  balanceHistoryWeek: { date: Date; balance: number }[];
  balanceHistoryMonth: { date: Date; balance: number }[];
}
