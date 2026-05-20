'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import { useBank } from '@/context/BankContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isAuthenticated } = useBank();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
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
    <div className="animate-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', background: 'linear-gradient(135deg, #d71e28 0%, #b91922 100%)', margin: '-25px 0 -50px' }}>
      <div className="card" style={{ width: '100%', maxWidth: '440px', padding: '48px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: 'none' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ background: '#d71e28', padding: '12px 20px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', marginBottom: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
            <svg width="180" height="28" viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* W */}
              <path d="M0 0H3.5L6 18L8.5 0H12L14.5 18L17 0H20.5L16.5 24H12.5L10 6L7.5 24H3.5L0 0Z" fill="white"/>
              {/* E */}
              <path d="M24 0H34V3.5H27.5V10H33V13.5H27.5V20.5H34V24H24V0Z" fill="white"/>
              {/* L */}
              <path d="M38 0H41.5V20.5H48V24H38V0Z" fill="white"/>
              {/* L */}
              <path d="M52 0H55.5V20.5H62V24H52V0Z" fill="white"/>
              {/* S */}
              <path d="M74 4C74 1.5 72 0 69 0C66 0 64 1.5 64 4C64 6 65.5 7.5 69 8.5C72 9.5 73.5 11 73.5 13.5C73.5 16.5 71.5 18 68.5 18C65.5 18 63.5 16.5 63.5 13.5H67C67 15 67.5 16 68.5 16C69.5 16 70.5 15 70.5 13.5C70.5 12 69 11 66 10C63 9 61 7.5 61 4.5C61 1.5 63 0 66.5 0H73.5L74 4Z" fill="white" transform="translate(2, 3)"/>
              
              {/* FARGO */}
              <g transform="translate(85, 0)">
                <path d="M0 0H10V3.5H3.5V10H9V13.5H3.5V24H0V0Z" fill="#FFCD00"/>
                <path d="M12 24L18 0H22L28 24H24.5L23 18H17L15.5 24H12ZM17.5 15H22.5L20 6L17.5 15Z" fill="#FFCD00"/>
                <path d="M32 0H38C42 0 44 2 44 5C44 8 42 10 39 10.5V11L44.5 24H40.5L35.5 11.5H35.5V24H32V0ZM35.5 3.5V8.5H38C39.5 8.5 40.5 8 40.5 6C40.5 4 39.5 3.5 38 3.5H35.5Z" fill="#FFCD00"/>
                <path d="M58 12C58 5 55 0 49.5 0C44 0 41 5 41 12C41 19 44 24 49.5 24C53 24 56 22 57.5 19L54.5 17C53.5 18.5 52 19.5 49.5 19.5C46 19.5 44.5 16.5 44.5 12C44.5 7.5 46 4.5 49.5 4.5C52 4.5 53.5 5.5 54.5 7.5L58 5.5V12Z" fill="#FFCD00" transform="translate(8, 0)"/>
                <path d="M72 12C72 5 69 0 63.5 0C58 0 55 5 55 12C55 19 58 24 63.5 24C69 24 72 19 72 12ZM58.5 12C58.5 7.5 60 4.5 63.5 4.5C67 4.5 68.5 7.5 68.5 12C68.5 16.5 67 19.5 63.5 19.5C60 19.5 58.5 16.5 58.5 12Z" fill="#FFCD00" transform="translate(10, 0)"/>
              </g>
            </svg>
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#000', marginBottom: '8px' }}>Online Banking</h1>
          <p style={{ color: '#666', fontSize: '15px' }}>Access your accounts securely</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              autoFocus
              required 
            />
          </div>

          <div className="input-wrapper" style={{ marginBottom: '16px' }}>
            <label>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '12px', background: 'none', border: 'none', cursor: 'pointer', color: '#999' }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', fontSize: '14px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', color: '#444' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px' }} /> Save username
            </label>
            <a href="#" style={{ color: 'var(--wf-blue)', fontWeight: 600, textDecoration: 'none' }}>Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: '100%', height: '56px', fontSize: '18px', fontWeight: 800, borderRadius: '4px', letterSpacing: '0.5px' }}
            disabled={loading}
          >
            {loading ? 'AUTHENTICATING...' : 'SIGN ON'}
          </button>
        </form>

        <div style={{ marginTop: '32px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '24px' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>
            New to Online Banking? <a href="#" style={{ color: 'var(--wf-blue)', fontWeight: 600, textDecoration: 'none' }}>Enroll Now</a>
          </p>
        </div>
      </div>
    </div>
  );
}
