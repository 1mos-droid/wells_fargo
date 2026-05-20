'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Smartphone, ShieldCheck, Loader2 } from 'lucide-react';
import { useBank } from '@/context/BankContext';

export default function MFAPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useBank();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
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
      router.push('/');
    }, 2000);
  };

  return (
    <div className="animate-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', background: 'linear-gradient(135deg, #d71e28 0%, #b91922 100%)', margin: '-25px 0 -50px' }}>
      <div className="card" style={{ width: '100%', maxWidth: '440px', padding: '48px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: 'none', textAlign: 'center' }}>
        <div style={{ width: '72px', height: '72px', background: 'rgba(0, 75, 141, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <Smartphone size={40} color="var(--wf-blue)" />
        </div>
        
        <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px', color: '#000' }}>Verification</h1>
        <p style={{ color: '#666', fontSize: '15px', marginBottom: '40px', lineHeight: '1.5' }}>
          For your security, we've sent a 6-digit code to your mobile device ending in **00.
        </p>

        <form onSubmit={handleVerify}>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
            {code.map((digit, idx) => (
              <input 
                key={idx}
                id={`code-${idx}`}
                type="text" 
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                style={{ width: '48px', height: '60px', textAlign: 'center', fontSize: '24px', fontWeight: 700, borderRadius: '8px', border: '2px solid #ddd', background: '#fcfcfc' }}
                required
              />
            ))}
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', height: '56px', fontSize: '17px', borderRadius: '8px' }}
            disabled={loading}
          >
            {loading ? <><Loader2 className="animate-spin" size={20} style={{ marginRight: '12px' }} /> Verifying...</> : 'Verify & Continue'}
          </button>
        </form>

        <p style={{ marginTop: '32px', fontSize: '14px', color: '#666' }}>
          Didn't receive the code? <a href="#" style={{ color: 'var(--wf-blue)', fontWeight: 600, textDecoration: 'none' }}>Resend Code</a>
        </p>

        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#1a7d1a', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          <ShieldCheck size={18} /> Secure Verification Service
        </div>
      </div>
    </div>
  );
}
