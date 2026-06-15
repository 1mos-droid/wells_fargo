'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Globe } from 'lucide-react';
import { useBank } from '@/context/BankContext';

export default function LoginPage() {
  const [username, setUsername] = useState('orockwell221@gmail.com');
  const [password, setPassword] = useState('Wayneb27');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useBank();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      router.push('/mfa');
    }, 1500);
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

      <div className="page-container" style={{ paddingTop: '40px' }}>
        <h1 className="offer-h1" style={{ fontSize: '28px', marginBottom: '24px' }}>Sign on</h1>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Username</label>
            <input 
              type="text" 
              className="input-field"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '12px', border: '1px solid #999', borderRadius: '4px' }}
              required 
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="input-field"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px', border: '1px solid #999', borderRadius: '4px' }}
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '12px', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <label className="toggle-switch" style={{ width: '40px', height: '22px' }}>
              <input type="checkbox" />
              <span className="slider" style={{ borderRadius: '22px' }}></span>
            </label>
            <span style={{ fontSize: '14px' }}>Save username</span>
          </div>

          <button 
            type="submit" 
            className="btn-pill btn-pill-primary" 
            style={{ marginBottom: '24px' }}
            disabled={loading}
          >
            {loading ? 'Signing on...' : 'Sign on'}
          </button>
        </form>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '15px' }}>
          <a href="#" style={{ color: '#000', fontWeight: 600, textDecoration: 'none' }}>Forgot username or password?</a>
          <a href="#" style={{ color: '#000', fontWeight: 600, textDecoration: 'none' }}>Enroll now</a>
        </div>
      </div>

      <div className="bottom-footer" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.
      </div>
    </div>
  );
}
