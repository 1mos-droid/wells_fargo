'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBank } from '@/context/BankContext';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function TransferForm() {
  const { accounts, addTransaction } = useBank();
  
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
    
    try {
      const response = await fetch('/api/send-money', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setTimeout(() => {
        if (response.ok) {
          addTransaction({
            id: 't-' + Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            description: 'Intl Transfer: ' + formData.recipientName,
            amount: -Number(formData.amount),
            type: 'debit'
          }, formData.fromAccount);
          setStatus('success');
        } else {
          setStatus('error');
        }
      }, 2000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="animate">
      <div className="hero-section">
        <div className="container">
          <p style={{ color: '#BA0C2F', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', marginBottom: '16px' }}>Execution</p>
          <h1>Funds Transfer.</h1>
        </div>
      </div>

      <div className="container" style={{ marginTop: '60px' }}>
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: 'center', padding: '100px 0' }}
            >
              <CheckCircle2 size={64} color="#008542" style={{ margin: '0 auto 32px' }} />
              <h2 style={{ fontSize: '32px', fontWeight: 400, marginBottom: '16px' }}>Transfer Successfully Authorized.</h2>
              <p style={{ color: '#666', marginBottom: '48px' }}>The funds have been dispatched and are awaiting institutional settlement.</p>
              <button onClick={() => window.location.href = '/'} className="btn-wf">Return to Accounts</button>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ maxWidth: '800px' }}
            >
              <form onSubmit={handleSubmit}>
                <label className="form-label">From Account</label>
                <select name="fromAccount" className="input-field" value={formData.fromAccount} onChange={handleChange} required>
                  {accounts.map(acc => (
                    <option key={acc.id} value={acc.id}>
                      {acc.name} ({acc.accountNumber}) — ${acc.balance.toLocaleString()}
                    </option>
                  ))}
                </select>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                  <div>
                    <label className="form-label">Recipient Name</label>
                    <input type="text" name="recipientName" className="input-field" value={formData.recipientName} onChange={handleChange} placeholder="Full Name" required />
                  </div>
                  <div>
                    <label className="form-label">Recipient Email</label>
                    <input type="email" name="recipientEmail" className="input-field" value={formData.recipientEmail} onChange={handleChange} placeholder="email@example.com" required />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                  <div>
                    <label className="form-label">Routing Number</label>
                    <input type="text" name="recipientRouting" className="input-field" value={formData.recipientRouting} onChange={handleChange} placeholder="9-digit Routing Number" required />
                  </div>
                  <div>
                    <label className="form-label">Account Number</label>
                    <input type="text" name="recipientAccount" className="input-field" value={formData.recipientAccount} onChange={handleChange} placeholder="Recipient's Account Number" required />
                  </div>
                </div>

                <label className="form-label">Amount ($)</label>
                <input 
                  type="number" 
                  name="amount" 
                  className="input-field mono" 
                  value={formData.amount} 
                  onChange={handleChange} 
                  placeholder="0.00"
                  step="0.01"
                  required 
                />

                <label className="form-label">Memo (Optional)</label>
                <input type="text" name="memo" className="input-field" value={formData.memo} onChange={handleChange} placeholder="What's this for?" />

                <div style={{ marginTop: '60px', display: 'flex', gap: '20px' }}>
                  <button type="submit" className="btn-wf" disabled={status === 'loading'}>
                    {status === 'loading' ? <><Loader2 className="animate-spin" size={20} style={{ marginRight: '12px' }} /> Authorizing...</> : 'Send Money Now'}
                  </button>
                  <button type="button" onClick={() => window.location.href = '/'} className="btn-wf btn-secondary">Cancel</button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
