'use client';

import { useBank } from '@/context/BankContext';
import { useRouter } from 'next/navigation';
import { Globe, LogOut, Bell, ChevronRight, Home, ArrowUpRight, Target, MoreHorizontal, User } from 'lucide-react';

export default function Dashboard() {
  const { accounts, transactions, logout } = useBank();
  const router = useRouter();
  
  const cashAccounts = accounts.filter(a => a.type === 'Checking' || a.type === 'Savings');
  const creditAccounts = accounts.filter(a => a.type === 'Credit Card');
  const investmentAccounts = accounts.filter(a => a.type === 'Investment');
  
  const totalCash = cashAccounts.reduce((acc, curr) => acc + curr.balance, 0);

  const handleSignOff = () => {
    logout();
    router.push('/sign-off');
  };

  return (
    <div className="animate-in" style={{ paddingBottom: '100px' }}>
      {/* 1. Header */}
      <header className="header-row" style={{ borderBottom: '1px solid #EEE', background: 'white', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="serif-logo" style={{ fontSize: '18px' }}>
          WELLS FARGO
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Bell size={22} color="#333" />
            <div style={{ position: 'absolute', top: -2, right: -2, width: '10', height: '10', background: 'var(--wf-red)', borderRadius: '50%', border: '2px solid white' }}></div>
          </div>
          <button onClick={() => router.push('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <User size={22} color="#333" />
          </button>
        </div>
      </header>

      <div className="page-container" style={{ maxWidth: '600px' }}>
        {/* 2. Welcome & Hero Balance */}
        <div style={{ margin: '32px 0' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 300, marginBottom: '8px', color: '#666' }}>Good morning, Oscar</h1>
          <div style={{ fontSize: '42px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            ${totalCash.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div style={{ fontSize: '14px', color: '#666', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            Total cash balance <ChevronRight size={14} />
          </div>
        </div>

        {/* 3. Message Center / Alert */}
        <div style={{ background: '#FFF0F0', padding: '16px', borderRadius: '12px', border: '1px solid #FFCCCB', marginBottom: '32px', display: 'flex', gap: '12px' }}>
          <div style={{ color: '#D1121F', fontWeight: 700, fontSize: '20px' }}>!</div>
          <div style={{ fontSize: '14px', color: '#333' }}>
            <p style={{ marginBottom: '8px' }}><strong style={{ color: '#D1121F' }}>Account on Hold:</strong> Your account is currently restricted due to an outstanding tax liability of <strong>$6,521.00</strong>. Outgoing transfers and bill payments are temporarily disabled.</p>
            <p style={{ fontSize: '13px', color: '#666' }}><strong>Need help resolving this?</strong> Call <strong>+1 (518) 253-5015</strong> or email <strong>wellsfargo.org@proton.me</strong></p>
          </div>
        </div>

        {/* 4. Quick Actions Row */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '4px' }}>
          <button onClick={() => router.push('/transfer')} style={{ flexShrink: 0, background: 'white', border: '1px solid #EEE', padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '14px' }}>
            <ArrowUpRight size={18} color="var(--wf-red)" /> Transfer
          </button>
          <button style={{ flexShrink: 0, background: 'white', border: '1px solid #EEE', padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '14px' }}>
            <Target size={18} color="var(--wf-red)" /> Pay Bills
          </button>
          <button style={{ flexShrink: 0, background: 'white', border: '1px solid #EEE', padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '14px' }}>
            <Globe size={18} color="var(--wf-red)" /> Zelle®
          </button>
        </div>

        {/* 5. Banking Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Banking</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cashAccounts.map((account) => (
              <div key={account.id} onClick={() => router.push('/activity')} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #EEE', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{account.name}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{account.accountNumber}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, fontSize: '18px' }}>
                    ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Credit Cards Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Credit Cards</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {creditAccounts.map((account) => (
              <div key={account.id} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #EEE', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{account.name}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{account.accountNumber}</div>
                  {account.rewardPoints && (
                    <div style={{ fontSize: '12px', color: '#008542', fontWeight: 700, marginTop: '4px' }}>
                      {account.rewardPoints.toLocaleString()} Rewards Points
                    </div>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, fontSize: '18px' }}>
                    ${Math.abs(account.balance).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Current balance</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Investments Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Investments</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {investmentAccounts.map((account) => (
              <div key={account.id} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #EEE', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{account.name}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{account.accountNumber}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, fontSize: '18px' }}>
                    ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Recent Activity Snippet */}
        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recent Activity</h2>
            <button onClick={() => router.push('/activity')} style={{ background: 'none', border: 'none', color: '#D1121F', fontWeight: 700, fontSize: '13px', cursor: 'pointer' }}>View all</button>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #EEE', overflow: 'hidden' }}>
            {transactions.slice(1, 4).map((tx, idx) => (
              <div key={tx.id} style={{ padding: '16px 20px', borderBottom: idx < 2 ? '1px solid #F5F5F5' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '15px' }}>{tx.description}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{tx.date}</div>
                </div>
                <div style={{ fontWeight: 700, color: tx.amount > 0 ? '#008542' : '#333' }}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Promotional Card */}
        <div style={{ background: 'linear-gradient(135deg, #004b8d 0%, #002d54 100%)', padding: '24px', borderRadius: '16px', color: 'white', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Personal Loan</h3>
          <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '16px' }}>You could be eligible for a personal loan with a fixed rate and no origination fee.</p>
          <button style={{ background: 'white', color: '#004b8d', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 700, fontSize: '14px' }}>Check your rate</button>
        </div>
      </div>

      {/* 10. Bottom Navigation Bar */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #EEE', padding: '12px 0 32px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 1000 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--wf-red)' }}>
          <Home size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Home</span>
        </div>
        <div onClick={() => router.push('/transfer')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', cursor: 'pointer' }}>
          <ArrowUpRight size={24} />
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Pay & Transfer</span>
        </div>
        <div onClick={() => router.push('/planning')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', cursor: 'pointer' }}>
          <Target size={24} />
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Plan</span>
        </div>
        <div onClick={() => router.push('/more')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', cursor: 'pointer' }}>
          <MoreHorizontal size={24} />
          <span style={{ fontSize: '10px', fontWeight: 600 }}>More</span>
        </div>
      </nav>
    </div>
  );
}
