'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, User, Shield, HelpCircle, FileText, Settings, LogOut, Home, ArrowUpRight, Target, MoreHorizontal } from 'lucide-react';
import { useBank } from '@/context/BankContext';

export default function MorePage() {
  const router = useRouter();
  const { logout } = useBank();

  const handleSignOff = () => {
    logout();
    router.push('/sign-off');
  };

  const menuItems = [
    { icon: <User size={22} />, label: 'Profile Settings', path: '/profile' },
    { icon: <Shield size={22} />, label: 'Security Center', path: '/security' },
    { icon: <FileText size={22} />, label: 'Statements & Docs', path: '/activity' },
    { icon: <Settings size={22} />, label: 'App Settings', path: '/profile' },
    { icon: <HelpCircle size={22} />, label: 'Help & Support', path: '/support' },
  ];

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
        <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '32px' }}>Menu</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#EEE', borderRadius: '16px', overflow: 'hidden', border: '1px solid #EEE' }}>
          {menuItems.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => router.push(item.path)}
              style={{ background: 'white', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }}
            >
              <div style={{ color: '#D1121F' }}>{item.icon}</div>
              <span style={{ fontWeight: 600, flex: 1 }}>{item.label}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={handleSignOff}
          style={{ width: '100%', marginTop: '32px', background: 'white', border: '1px solid #D1121F', color: '#D1121F', padding: '16px', borderRadius: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <LogOut size={20} /> Sign off
        </button>

        <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '13px', color: '#999' }}>
          <div style={{ color: '#333', fontWeight: 600, marginBottom: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p>Support: +1 786-872-0946</p>
            <p>wellsfargo.org@proton.me</p>
          </div>
          <p>Version 5.12.0 (Build 2026)</p>
          <p style={{ marginTop: '8px' }}>© 2026 Wells Fargo. All rights reserved.</p>
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
        <div onClick={() => router.push('/planning')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#666', cursor: 'pointer' }}>
          <Target size={24} />
          <span style={{ fontSize: '10px', fontWeight: 600 }}>Plan</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--wf-red)' }}>
          <MoreHorizontal size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>More</span>
        </div>
      </nav>
    </div>
  );
}
