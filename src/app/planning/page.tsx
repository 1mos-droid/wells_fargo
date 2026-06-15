'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Target, TrendingUp, Compass, ChevronRight, Home, ArrowUpRight, MoreHorizontal } from 'lucide-react';

export default function PlanningPage() {
  const router = useRouter();

  return (
    <div className="animate-in" style={{ paddingBottom: '100px' }}>
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

      <div className="page-container" style={{ maxWidth: '600px', paddingTop: '40px' }}>
        <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '8px' }}>Plan & Learn</h1>
        <p style={{ color: '#666', marginBottom: '32px' }}>Personalized insights and tools to help you reach your goals.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Goal Setting */}
          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #EEE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: '#E3F2FD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={24} color="#D1121F" />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '18px' }}>Savings Goals</h3>
                <p style={{ fontSize: '13px', color: '#666' }}>Track your progress for what matters most.</p>
              </div>
            </div>
            <div style={{ background: '#F5F5F5', height: '8px', borderRadius: '4px', marginBottom: '8px' }}>
              <div style={{ width: '65%', height: '100%', background: '#008542', borderRadius: '4px' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600 }}>
              <span>Emergency Fund</span>
              <span>65% complete</span>
            </div>
          </div>

          {/* Budgeting */}
          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #EEE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: '#E3F2FD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={24} color="#D1121F" />
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: '18px' }}>Spending Watch</h3>
                <p style={{ fontSize: '13px', color: '#666' }}>You&apos;ve spent $240 less than last month.</p>
              </div>
            </div>
            <button className="btn-pill btn-pill-outline" style={{ height: '40px', fontSize: '14px' }}>View spending</button>
          </div>

          {/* Education */}
          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #EEE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: '#E3F2FD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Compass size={24} color="#D1121F" />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: 700, fontSize: '18px' }}>Financial Health</h3>
                <p style={{ fontSize: '13px', color: '#666' }}>Check your FICO® Score for free.</p>
              </div>
              <ChevronRight size={20} color="#CCC" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', borderTop: '1px solid #EEE', padding: '12px 0 32px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', zIndex: 1000 }}>
        <div onClick={() => router.push('/dashboard')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', cursor: 'pointer' }}>
          <Home size={24} />
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Home</span>
        </div>
        <div onClick={() => router.push('/transfer')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', cursor: 'pointer' }}>
          <ArrowUpRight size={24} />
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Pay & Transfer</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--wf-red)' }}>
          <Target size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Plan</span>
        </div>
        <div onClick={() => router.push('/more')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', cursor: 'pointer' }}>
          <MoreHorizontal size={24} />
          <span style={{ fontSize: '10px', fontWeight: 600 }}>More</span>
        </div>
      </nav>
    </div>
  );
}
