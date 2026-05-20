'use client';

import { useBank } from '@/context/BankContext';
import { Search, Download, Filter } from 'lucide-react';

export default function ActivityPage() {
  const { transactions } = useBank();
  
  return (
    <div className="animate">
      <div className="hero-section">
        <div className="container">
          <p style={{ color: '#BA0C2F', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '16px' }}>History</p>
          <h1>Transactional Activity.</h1>
        </div>
      </div>

      <div className="container" style={{ marginTop: '60px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={20} style={{ position: 'absolute', right: '0', top: '20px', color: '#888' }} />
            <input 
              type="text" 
              placeholder="Filter by description..." 
              className="input-field"
            />
          </div>
          <button className="btn-wf btn-secondary" style={{ marginTop: '20px' }}>
            <Filter size={16} style={{ marginRight: '8px' }} /> View Options
          </button>
          <button className="btn-wf btn-secondary" style={{ marginTop: '20px' }}>
            <Download size={16} style={{ marginRight: '8px' }} /> Export Statement
          </button>
        </div>

        <table className="account-table">
          <thead>
            <tr>
              <th>Date of Execution</th>
              <th>Description of Transaction</th>
              <th style={{ textAlign: 'right' }}>Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="account-row">
                <td className="mono" style={{ padding: '24px 0' }}>{tx.date}</td>
                <td>
                  <div style={{ fontWeight: 600 }}>{tx.description}</div>
                  <div style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>Settled</div>
                </td>
                <td className="account-balance mono" style={{ color: tx.amount > 0 ? '#008542' : 'inherit' }}>
                  {tx.amount > 0 ? '+' : '-'}{Math.abs(tx.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
