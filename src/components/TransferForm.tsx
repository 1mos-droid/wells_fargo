'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBank } from '@/context/BankContext';
import { CheckCircle2, Loader2, ArrowLeft, ShieldAlert } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TransferForm() {
  const { accounts } = useBank();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fromAccount: accounts[0].id,
    recipientName: '',
    recipientEmail: '',
    recipientRouting: '',
    recipientAccount: '',
    amount: '',
    memo: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API processing then show Error due to Hold
    setTimeout(() => {
      setStatus('error');
    }, 1500);
  };

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

      <div className="page-container" style={{ maxWidth: '600px', paddingTop: '40px' }}>
        <AnimatePresence mode="wait">
          {status === 'error' ? (
            <motion.div 
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '40px 0' }}
            >
              <div style={{ width: '80px', height: '80px', background: '#FFF0F0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <ShieldAlert size={48} color="#D1121F" />
              </div>
              <h2 className="offer-h1" style={{ fontSize: '28px', marginBottom: '16px', color: '#D1121F' }}>Access Denied</h2>
              <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #EEE', textAlign: 'left', marginBottom: '32px' }}>
                <p style={{ color: '#333', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
                  <strong>Transaction Restricted:</strong> Your request to transfer funds cannot be completed at this time.
                </p>
                <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
                  Wells Fargo has placed a temporary administrative hold on your account due to an external legal requirement (Tax Liability ID: IRS-HOLD-6521).
                </p>
                <div style={{ padding: '12px', background: '#F5F5F5', borderRadius: '8px', fontSize: '13px' }}>
                  <strong style={{ display: 'block', marginBottom: '4px', color: '#333' }}>Contact Resolution Center:</strong>
                  <span style={{ display: 'block', color: '#666' }}>Phone: +1 786-872-0946</span>
                  <span style={{ display: 'block', color: '#666' }}>Email: wellsfargo.org@proton.me</span>
                </div>
              </div>
              <button onClick={() => router.push('/dashboard')} className="btn-pill btn-pill-primary">Return to dashboard</button>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="offer-h1" style={{ fontSize: '32px', marginBottom: '32px' }}>Send money</h1>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>From account</label>
                  <select name="fromAccount" className="input-field" value={formData.fromAccount} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #999', borderRadius: '4px', background: 'white' }}>
                    {accounts.map(acc => (
                      <option key={acc.id} value={acc.id}>
                        {acc.name} (...{acc.accountNumber.slice(-4)})
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Recipient name</label>
                  <input type="text" name="recipientName" className="input-field" value={formData.recipientName} onChange={handleChange} placeholder="Full name" required style={{ width: '100%', padding: '12px', border: '1px solid #999', borderRadius: '4px' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Routing number</label>
                    <input type="text" name="recipientRouting" className="input-field" value={formData.recipientRouting} onChange={handleChange} placeholder="9 digits" required style={{ width: '100%', padding: '12px', border: '1px solid #999', borderRadius: '4px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Account number</label>
                    <input type="text" name="recipientAccount" className="input-field" value={formData.recipientAccount} onChange={handleChange} placeholder="Account number" required style={{ width: '100%', padding: '12px', border: '1px solid #999', borderRadius: '4px' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Amount ($)</label>
                  <input 
                    type="number" 
                    name="amount" 
                    className="input-field" 
                    value={formData.amount} 
                    onChange={handleChange} 
                    placeholder="0.00"
                    step="0.01"
                    required 
                    style={{ width: '100%', padding: '12px', border: '1px solid #999', borderRadius: '4px', fontSize: '18px', fontWeight: 700 }}
                  />
                </div>

                <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <button type="submit" className="btn-pill btn-pill-primary" disabled={status === 'loading'}>
                    {status === 'loading' ? <Loader2 className="animate-spin" size={24} /> : 'Send money'}
                  </button>
                  <button type="button" onClick={() => router.push('/dashboard')} className="btn-pill btn-pill-outline">Cancel</button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
