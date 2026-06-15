'use client';

import { useBank } from '@/context/BankContext';
import { Search, Download, Filter, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ActivityPage() {
  const { transactions } = useBank();
  const router = useRouter();
  
  return (
    <div className="animate-in">
      {/* Header */}
      <header className="header-row" style={{ borderBottom: '1px solid #EEE', background: 'white' }}>
        <button onClick={() => router.push('/dashboard')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '14px' }}>
          <ArrowLeft size={20} /> Back
        </button>
        <div className="serif-logo" style={{ fontSize: '18px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          WELLS FARGO
        </div>
        <div style={{ width: 60 }}></div>
      </header>

      <div className="page-container" style={{ maxWidth: '800px', paddingTop: '40px' }}>
        <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '32px' }}>Activity</h1>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }}>
          <button style={{ padding: '8px 16px', background: 'black', color: 'white', border: 'none', borderRadius: '20px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>
            All
          </button>
          <button style={{ padding: '8px 16px', background: 'white', color: 'black', border: '1px solid #CCC', borderRadius: '20px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>
            Deposits
          </button>
          <button style={{ padding: '8px 16px', background: 'white', color: 'black', border: '1px solid #CCC', borderRadius: '20px', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>
            Withdrawals
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#EEE' }}>
          {transactions.map((tx) => (
            <div key={tx.id} style={{ background: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px' }}>{tx.description}</div>
                <div style={{ fontSize: '13px', color: '#666' }}>{tx.date}</div>
              </div>
              <div style={{ textAlign: 'right', fontWeight: 700, fontSize: '16px', color: tx.amount > 0 ? '#008542' : 'black' }}>
                {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <button style={{ background: 'none', border: 'none', color: '#666', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}>
            <Download size={16} /> Export statements
          </button>
        </div>
      </div>

      <div className="bottom-footer" style={{ marginTop: '60px' }}>
        Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.
      </div>
    </div>
  );
}
