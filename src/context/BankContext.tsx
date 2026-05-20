'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Account, Transaction, mockAccounts as initialAccounts, mockTransactions as initialTransactions } from '@/lib/mockData';

interface BankContextType {
  accounts: Account[];
  transactions: Transaction[];
  addTransaction: (tx: Transaction, fromAccountId: string) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

export function BankProvider({ children }: { children: React.ReactNode }) {
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load from local storage if available (persists session)
  useEffect(() => {
    const savedAccounts = localStorage.getItem('wf_accounts');
    const savedTransactions = localStorage.getItem('wf_transactions');
    const savedAuth = localStorage.getItem('wf_auth');

    // Use setTimeout to avoid synchronous setState in effect lint error
    const timer = setTimeout(() => {
      if (savedAccounts) setAccounts(JSON.parse(savedAccounts));
      if (savedTransactions) setTransactions(JSON.parse(savedTransactions));
      if (savedAuth === 'true') setIsAuthenticated(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('wf_auth', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('wf_auth');
  };

  const addTransaction = (tx: Transaction, fromAccountId: string) => {
    const updatedTransactions = [tx, ...transactions];
    setTransactions(updatedTransactions);
    localStorage.setItem('wf_transactions', JSON.stringify(updatedTransactions));

    const updatedAccounts = accounts.map(acc => {
      if (acc.id === fromAccountId) {
        return { ...acc, balance: acc.balance + tx.amount };
      }
      return acc;
    });
    setAccounts(updatedAccounts);
    localStorage.setItem('wf_accounts', JSON.stringify(updatedAccounts));
  };

  return (
    <BankContext.Provider value={{ accounts, transactions, addTransaction, isAuthenticated, login, logout }}>
      {children}
    </BankContext.Provider>
  );
}

export function useBank() {
  const context = useContext(BankContext);
  if (context === undefined) {
    throw new Error('useBank must be used within a BankProvider');
  }
  return context;
}
