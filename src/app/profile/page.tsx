'use client';

import Link from 'next/link';
import { User, Shield, Bell, Smartphone, CreditCard, ChevronRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="animate-in">
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

      <div className="page-container" style={{ maxWidth: '800px', paddingTop: '40px' }}>
        <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '32px' }}>Profile & Settings</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
          <div style={{ background: 'white', padding: '32px', borderRadius: '12px', border: '1px solid #EEE' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
              <div style={{ width: '80px', height: '80px', background: '#E3F2FD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={40} color="#D1121F" />
              </div>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 700 }}>Oscar Luna Rockwell</h2>
                <p style={{ fontSize: '14px', color: '#666' }}>Customer since 2022</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#666', marginBottom: '4px' }}>Email</label>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '16px' }}>orockwell221@gmail.com</span>
                  <button style={{ color: '#D1121F', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Edit</button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#666', marginBottom: '4px' }}>Phone</label>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '16px' }}>+1 786-872-0946</span>
                  <button style={{ color: '#D1121F', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Edit</button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#666', marginBottom: '4px' }}>Location</label>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '16px' }}>Tucson, AZ</span>
                  <button style={{ color: '#D1121F', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Edit</button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: <Shield size={20} />, label: 'Security Center' },
              { icon: <Bell size={20} />, label: 'Notifications' },
              { icon: <Smartphone size={20} />, label: 'Mobile Banking' },
              { icon: <CreditCard size={20} />, label: 'Card Management' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #EEE', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ color: '#D1121F' }}>{item.icon}</div>
                  <span style={{ fontWeight: 600 }}>{item.label}</span>
                </div>
                <ChevronRight size={20} color="#CCC" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
