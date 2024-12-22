export interface Account {
  email: string;
  password: string;
  balance: number;
  outstandingBets: number;
  depositTotal: number;
  deposits: any[];
  expenseTotal: number;
  expenses: any[];
}
