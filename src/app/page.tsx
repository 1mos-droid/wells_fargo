'use client';

import { useBank } from '@/context/BankContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { accounts } = useBank();
  const router = useRouter();
  const totalBalance = accounts.reduce((acc, curr) => acc + curr.balance, 0);

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '14px', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>Good morning, John</h2>
          <h1 style={{ fontSize: '32px', margin: 0, fontWeight: 700, color: '#000' }}>Account Summary</h1>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '12px', color: '#888' }}>Last sign on: May 20, 2026 at 09:42 AM ET</p>
        </div>
      </div>

      <div style={{ background: '#FFF9E6', border: '1px solid #FFE58F', padding: '16px 20px', borderRadius: '8px', marginBottom: '32px', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ background: '#FFCD00', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>!</div>
        <div style={{ fontSize: '14px', color: '#856404' }}>
          <strong>Security Alert:</strong> We noticed a sign-on to your account from a new device. If this wasn't you, please <a href="/security" style={{ color: 'var(--wf-blue)', fontWeight: 600 }}>review your activity</a> immediately.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px' }}>
        <div>
          <div className="card" style={{ borderRadius: '12px', overflow: 'hidden', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div className="card-title" style={{ padding: '20px 24px', background: '#f8f9fa', borderBottom: '1px solid #eee' }}>Portfolio Overview</div>
            <div className="card-content" style={{ padding: '32px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Total Available Balance</div>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: '#000' }}>
                    ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: '#008542', fontWeight: 700, background: '#E6F4EA', padding: '4px 12px', borderRadius: '20px' }}>+2.4% THIS MONTH</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ borderRadius: '12px', overflow: 'hidden', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '32px' }}>
            <div className="card-title" style={{ padding: '20px 24px', background: '#f8f9fa', borderBottom: '1px solid #eee' }}>Banking Accounts</div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#fcfcfc' }}>
                  <th style={{ padding: '16px 24px', borderBottom: '1px solid #eee' }}>Account Name</th>
                  <th style={{ padding: '16px 24px', borderBottom: '1px solid #eee' }}>Account Number</th>
                  <th style={{ padding: '16px 24px', borderBottom: '1px solid #eee', textAlign: 'right' }}>Available Balance</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account) => (
                  <tr key={account.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                    <td style={{ padding: '20px 24px' }}>
                      <a href="/activity" className="account-link" style={{ fontSize: '15px' }}>{account.name}</a>
                      <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>{account.type}</div>
                    </td>
                    <td style={{ padding: '20px 24px', color: '#666', fontSize: '14px' }}>{account.accountNumber}</td>
                    <td style={{ padding: '20px 24px', textAlign: 'right', fontWeight: 700, fontSize: '16px' }}>
                      ${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: '16px 24px', background: '#fcfcfc', textAlign: 'center', borderTop: '1px solid #eee' }}>
              <a href="/activity" style={{ fontSize: '13px', color: 'var(--wf-blue)', fontWeight: 600, textDecoration: 'none' }}>View All Account Activity →</a>
            </div>
          </div>
        </div>

        <div>
          <div className="card" style={{ borderRadius: '12px', overflow: 'hidden', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div className="card-title" style={{ padding: '16px 20px', background: 'var(--wf-blue)', color: 'white', border: 'none' }}>Quick Actions</div>
            <div className="card-content" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button className="btn-wf" style={{ width: '100%', height: '48px' }} onClick={() => router.push('/transfer')}>Transfer Money</button>
                <button className="btn-wf btn-secondary" style={{ width: '100%', height: '48px' }} onClick={() => router.push('/activity')}>Pay Bills</button>
                <button className="btn-wf btn-secondary" style={{ width: '100%', height: '48px' }} onClick={() => router.push('/activity')}>Statements & Documents</button>
              </div>
            </div>
          </div>

          <div className="card" style={{ borderRadius: '12px', overflow: 'hidden', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '24px' }}>
            <div className="card-title" style={{ padding: '16px 20px' }}>Planning & Advice</div>
            <div className="card-content" style={{ padding: '20px' }}>
              <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
                <p style={{ marginBottom: '12px' }}>Explore personalized insights to help you reach your financial goals.</p>
                <a href="/planning" style={{ color: 'var(--wf-blue)', fontWeight: 600, textDecoration: 'none', fontSize: '13px' }}>See My Insights →</a>
              </div>
            </div>
          </div>

          <div className="card" style={{ borderRadius: '12px', overflow: 'hidden', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginTop: '24px' }}>
            <div className="card-title" style={{ padding: '16px 20px' }}>Security & Alerts</div>
            <div className="card-content" style={{ padding: '20px' }}>
              <div style={{ fontSize: '13px', lineHeight: '1.6' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ color: 'var(--wf-red)', fontWeight: 'bold' }}>•</div>
                  <div>You have <strong>2</strong> new security alerts in your Message Center.</div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div style={{ color: 'var(--wf-red)', fontWeight: 'bold' }}>•</div>
                  <div><a href="/security" className="account-link">Update your contact information</a> to ensure you receive critical alerts.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
