export interface Account {
  id: string;
  name: string;
  type: string;
  balance: number;
  accountNumber: string;
  rewardPoints?: number;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category?: string;
}

export const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Everyday Checking',
    type: 'Checking',
    balance: 560700.52,
    accountNumber: '...4829'
  },
  {
    id: '2',
    name: 'Way2Save Savings',
    type: 'Savings',
    balance: 12500.00,
    accountNumber: '...9102'
  },
  {
    id: '3',
    name: 'Active Cash® Card',
    type: 'Credit Card',
    balance: -1240.85,
    accountNumber: '...5512',
    rewardPoints: 12450
  },
  {
    id: '4',
    name: 'WellsTrade® Brokerage',
    type: 'Investment',
    balance: 85420.30,
    accountNumber: '...2291'
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: 't1',
    date: 'Jun 14, 2026',
    description: 'Initial Deposit - ACATS',
    amount: 560700.52,
    type: 'credit',
    category: 'Transfer'
  },
  {
    id: 't2',
    date: 'Jun 13, 2026',
    description: 'Starbucks #4829 San Francisco CA',
    amount: -5.75,
    type: 'debit',
    category: 'Food & Drink'
  },
  {
    id: 't3',
    date: 'Jun 12, 2026',
    description: 'Apple Services - iCloud Storage',
    amount: -9.99,
    type: 'debit',
    category: 'Entertainment'
  },
  {
    id: 't4',
    date: 'Jun 12, 2026',
    description: 'Chevron Gas Station #9921',
    amount: -45.00,
    type: 'debit',
    category: 'Transportation'
  },
  {
    id: 't5',
    date: 'Jun 11, 2026',
    description: 'Whole Foods Market',
    amount: -124.50,
    type: 'debit',
    category: 'Groceries'
  }
];
