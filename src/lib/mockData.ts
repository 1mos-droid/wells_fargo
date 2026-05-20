export interface Account {
  id: string;
  name: string;
  type: string;
  balance: number;
  accountNumber: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
}

export const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Everyday Checking',
    type: 'Checking',
    balance: 5420.50,
    accountNumber: '...4829'
  },
  {
    id: '2',
    name: 'Way2Save Savings',
    type: 'Savings',
    balance: 12850.75,
    accountNumber: '...9102'
  },
  {
    id: '3',
    name: 'Portfolio Line of Credit',
    type: 'Credit Line',
    balance: 25000.00,
    accountNumber: '...5511'
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: 't1',
    date: 'May 18, 2026',
    description: 'Starbucks #4829 San Francisco CA',
    amount: -85.75,
    type: 'debit'
  },
  {
    id: 't2',
    date: 'May 17, 2026',
    description: 'Employer Deposit - SALARY PPD',
    amount: 8450.00,
    type: 'credit'
  },
  {
    id: 't3',
    date: 'May 16, 2026',
    description: 'Amazon.com*MB1234567 Seattle WA',
    amount: -450.99,
    type: 'debit'
  },
  {
    id: 't4',
    date: 'May 15, 2026',
    description: 'Shell Oil 12345 Palo Alto CA',
    amount: -355.00,
    type: 'debit'
  },
  {
    id: 't5',
    date: 'May 14, 2026',
    description: 'Monthly Mortgage Payment',
    amount: -2800.00,
    type: 'debit'
  }
];
