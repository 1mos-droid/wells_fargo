'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, FileText, Shield, Eye, ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  const router = useRouter();

  const privacySections = [
    { icon: <FileText size={20} />, label: 'Privacy Policy', desc: 'How we handle your information' },
    { icon: <Shield size={20} />, label: 'Data Security', desc: 'Our encryption standards' },
    { icon: <Eye size={20} />, label: 'Data Collection', desc: 'What we track and why' },
  ];

  return (
    <div className="animate-in">
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
        <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '8px' }}>Privacy & Legal</h1>
        <p style={{ color: '#666', marginBottom: '32px' }}>Your trust is our highest priority.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {privacySections.map((item, idx) => (
            <div key={idx} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #EEE', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: '#D1121F' }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{item.label}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{item.desc}</div>
                </div>
              </div>
              <ChevronRight size={20} color="#CCC" />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', padding: '24px', background: 'white', border: '1px solid #EEE', borderRadius: '16px' }}>
          <h3 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '12px' }}>Legal Disclosure</h3>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>
            Investment and Insurance Products are: Not Insured by the FDIC or Any Federal Government Agency | Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate | Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested.
          </p>
        </div>
      </div>
    </div>
  );
}
