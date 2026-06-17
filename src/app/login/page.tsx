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
    <div className="animate-in" style={{ minHeight: '100vh', background: 'white' }}>
      {/* 1. Header */}
      <header className="header-row" style={{ borderBottom: '1px solid #EEE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#333', fontSize: '13px', cursor: 'pointer' }}>
          <Globe size={16} />
          <span>Español</span>
        </div>
        <div className="serif-logo" style={{ fontSize: '18px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          WELLS FARGO
        </div>
        <div style={{ width: 60 }}></div>
      </header>

      {/* 2. Login Form Section */}
      <div className="page-container" style={{ paddingTop: '32px', paddingBottom: '48px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>Sign on</h1>
        
        <form onSubmit={handleSubmit} style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Username</label>
            <input 
              type="text" 
              className="input-field"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '14px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '16px' }}
              required 
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="input-field"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '14px', border: '1px solid #CCC', borderRadius: '8px', fontSize: '16px' }}
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '14px', top: '14px', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
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
            <span style={{ fontSize: '15px', fontWeight: 500 }}>Save username</span>
          </div>

          <button 
            type="submit" 
            className="btn-pill btn-pill-primary" 
            style={{ height: '54px', fontSize: '16px' }}
            disabled={loading}
          >
            {loading ? 'Signing on...' : 'Sign on'}
          </button>
        </form>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px' }}>
          <a href="#" style={{ color: '#D1121F', fontWeight: 700, textDecoration: 'none' }}>Forgot username or password?</a>
          <div style={{ height: '1px', background: '#EEE', width: '60px', margin: '0 auto' }}></div>
          <a href="#" style={{ color: '#333', fontWeight: 700, textDecoration: 'none' }}>Enroll now</a>
        </div>
      </div>

      {/* 3. Discovery / Promotional Section */}
      <section style={{ background: '#F8F9FA', padding: '48px 0', borderTop: '1px solid #EEE' }}>
        <div className="page-container">
          <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', textAlign: 'center' }}>Explore & Discover</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Card 1: Your dreams, your plan */}
            <div style={{ 
              background: 'white', 
              borderRadius: '20px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
              overflow: 'hidden',
              border: '1px solid #EEE'
            }}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop" 
                  alt="High-five point-of-view with a smiling woman wearing a white helmet and red jacket on a mountain top."
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#000', marginBottom: '8px' }}>
                  Your dreams, your plan
                </h3>
                <p style={{ fontSize: '15px', color: '#666', marginBottom: '20px', lineHeight: 1.5 }}>
                  Start crafting the foundation for the future you see yourself in.
                </p>
                <button 
                  className="btn-pill-outline" 
                  style={{ height: '48px', fontSize: '14px', fontWeight: 700 }}
                >
                  Get started
                </button>
              </div>
            </div>

            {/* Card 2: Secure your next chapter */}
            <div style={{ 
              background: 'white', 
              borderRadius: '20px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
              overflow: 'hidden',
              border: '1px solid #EEE'
            }}>
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Smiling older man kneeling in a sunlit grassy field, petting a large tan dog."
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#000', marginBottom: '8px' }}>
                  Secure your next chapter
                </h3>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.5 }}>
                  Protect what you&apos;ve built as you look ahead.
                </p>
              </div>
            </div>

            {/* Card 3: Community Commitment */}
            <div style={{ 
              background: 'white', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
              overflow: 'hidden',
              border: '1px solid #EEE'
            }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                <img 
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Two smiling Black women in a greenhouse."
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#000', marginBottom: '12px' }}>
                  Why we&apos;re committed to communities
                </h3>
                <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6, marginBottom: '24px' }}>
                  We don&apos;t just serve our communities—we are our communities. We&apos;re committed to helping customers and neighborhoods across the country thrive.
                </p>
                <button 
                  className="btn-pill-outline" 
                  style={{ height: '50px', fontSize: '15px', fontWeight: 700 }}
                >
                  Wells Fargo Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer style={{ background: 'white', padding: '48px 20px', borderTop: '1px solid #EEE' }}>
        <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px', flexWrap: 'wrap', fontSize: '13px', fontWeight: 600 }}>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Security</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Legal</a>
            <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Ad Choices</a>
          </div>
          <p style={{ fontSize: '11px', color: '#999', lineHeight: 1.6 }}>
            © 1999 - 2026 Wells Fargo. All rights reserved. NMLSR ID 399801<br />
            Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.
          </p>
        </div>
      </footer>
    </div>
  );
}
