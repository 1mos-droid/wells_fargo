'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Smartphone, ShieldCheck, Loader2, Globe } from 'lucide-react';
import { useBank } from '@/context/BankContext';

export default function MFAPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useBank();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate verification
    setTimeout(() => {
      login();
      router.push('/dashboard');
    }, 2000);
  };

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
        <div style={{ width: '60px', height: '60px', background: '#E3F2FD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <Smartphone size={32} color="#D1121F" />
        </div>
        
        <h1 className="offer-h1" style={{ fontSize: '28px', marginBottom: '12px' }}>Verify your identity</h1>
        <p style={{ color: '#666', fontSize: '15px', marginBottom: '40px', lineHeight: '1.5' }}>
          We&apos;ve sent a 6-digit code to your mobile device ending in **00.
        </p>

        <form onSubmit={handleVerify}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '40px' }}>
            {code.map((digit, idx) => (
              <input 
                key={idx}
                id={`code-${idx}`}
                type="text" 
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                style={{ width: '42px', height: '54px', textAlign: 'center', fontSize: '20px', fontWeight: 700, borderRadius: '4px', border: '1px solid #999', background: 'white' }}
                required
              />
            ))}
          </div>

          <button 
            type="submit" 
            className="btn-pill btn-pill-primary" 
            style={{ marginBottom: '24px' }}
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" size={24} /> : 'Verify'}
          </button>
        </form>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px' }}>
          <a href="#" style={{ color: '#000', fontWeight: 600, textDecoration: 'none' }}>Resend code</a>
          <a href="#" style={{ color: '#000', fontWeight: 600, textDecoration: 'none' }}>Try another way</a>
        </div>

        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#666', fontSize: '12px' }}>
          <ShieldCheck size={16} /> Secure Verification
        </div>
      </div>

      <div className="bottom-footer" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.
      </div>
    </div>
  );
}
