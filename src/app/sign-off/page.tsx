'use client';

import { LogOut, ShieldCheck, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignOffPage() {
  const router = useRouter();

  return (
    <div className="animate-in">
      {/* Header */}
      <header className="header-row">
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#333', fontSize: '13px' }}>
          <Globe size={16} />
          <span>Español</span>
        </div>
        <div className="serif-logo" style={{ fontSize: '18px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          WELLS FARGO
        </div>
        <div style={{ width: 60 }}></div>
      </header>

      <div className="page-container" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', background: '#E3F2FD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <LogOut size={32} color="#D1121F" />
        </div>
        
        <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '16px' }}>You&apos;ve signed off</h1>
        <p style={{ color: '#666', fontSize: '15px', marginBottom: '40px', lineHeight: '1.5' }}>
          Thank you for banking with us. For your security, we recommend closing your browser window.
        </p>

        <button 
          onClick={() => router.push('/login')} 
          className="btn-pill btn-pill-primary" 
          style={{ marginBottom: '24px' }}
        >
          Sign on again
        </button>

        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#666', fontSize: '12px' }}>
          <ShieldCheck size={16} /> Session terminated securely
        </div>
      </div>

      <div className="bottom-footer" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.
      </div>
    </div>
  );
}
