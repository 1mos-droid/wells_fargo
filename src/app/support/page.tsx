import Link from 'next/link';
import { Construction, ArrowLeft } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="animate-in" style={{ textAlign: 'center', padding: '100px 0' }}>
      <div style={{ background: 'white', maxWidth: '600px', margin: '0 auto', padding: '60px 40px', borderRadius: '12px', boxShadow: 'var(--wf-shadow)', border: '1px solid var(--wf-border-light)' }}>
        <div style={{ width: '80px', height: '80px', background: '#fff5f5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <Construction size={40} color="var(--wf-red)" />
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px' }}>Under Construction</h1>
        <p style={{ color: 'var(--wf-text-gray)', marginBottom: '40px', lineHeight: '1.6' }}>
          This section of <strong>Wells Fargo Online Banking</strong> is currently under maintenance. We are working to provide you with a better experience. Please check back later.
        </p>
        
        <Link href="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <ArrowLeft size={18} /> Return to Accounts
        </Link>

        <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--wf-border-light)', fontSize: '13px', fontStyle: 'italic', opacity: 0.6 }}>
          Reference: SYS-MT-2026
        </div>
      </div>
    </div>
  );
}
