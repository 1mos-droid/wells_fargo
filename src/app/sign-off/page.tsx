import { LogOut, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function SignOffPage() {
  return (
    <div className="animate-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', background: 'linear-gradient(135deg, #d71e28 0%, #b91922 100%)', margin: '-25px 0 -50px' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px', padding: '60px 48px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: 'none', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', background: 'rgba(215, 30, 40, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <LogOut size={40} color="var(--wf-red)" />
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: '#000' }}>Signed Off</h1>
        <p style={{ color: '#666', marginBottom: '48px', lineHeight: '1.6', fontSize: '16px' }}>
          Thank you for banking with Wells Fargo. For your security, we recommend closing your browser window.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link href="/login" className="btn btn-primary" style={{ minWidth: '180px', height: '56px', borderRadius: '8px', fontSize: '16px' }}>Sign On Again</Link>
        </div>

        <div style={{ marginTop: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#1a7d1a', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          <ShieldCheck size={20} /> Your session was securely terminated
        </div>
      </div>
    </div>
  );
}
