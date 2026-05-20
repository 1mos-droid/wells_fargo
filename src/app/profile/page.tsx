import { ArrowLeft, User, Shield, Bell, Key } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="animate-in">
      <div style={{ marginBottom: '32px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--wf-blue)', textDecoration: 'none', fontWeight: 600, fontSize: '14px', marginBottom: '16px' }}>
          <ArrowLeft size={16} /> Back to Accounts
        </Link>
        <h1 style={{ fontSize: '28px', fontWeight: 700 }}>Profile & Settings</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="card">
          <div className="card-header">
            <h3>Personal Information</h3>
          </div>
          <div className="card-body" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '64px', height: '64px', background: '#f0f4f8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={32} color="var(--wf-text-gray)" />
              </div>
              <div>
                <h4 style={{ fontSize: '18px' }}>John Smith</h4>
                <p style={{ fontSize: '13px', color: 'var(--wf-text-gray)' }}>Customer since 2018</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--wf-text-gray)', fontWeight: 700, textTransform: 'uppercase' }}>Email Address</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>john.smith@example.com</span>
                  <a href="#" style={{ fontSize: '13px', color: 'var(--wf-blue)', fontWeight: 600 }}>Edit</a>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--wf-text-gray)', fontWeight: 700, textTransform: 'uppercase' }}>Phone Number</label>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>+1 (555) 000-0000</span>
                  <a href="#" style={{ fontSize: '13px', color: 'var(--wf-blue)', fontWeight: 600 }}>Edit</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Security Preferences</h3>
          </div>
          <div className="card-body" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Shield size={24} color="var(--wf-red)" />
                <div>
                  <h4 style={{ fontSize: '15px', marginBottom: '4px' }}>Two-Factor Authentication</h4>
                  <p style={{ fontSize: '13px', color: 'var(--wf-text-gray)', marginBottom: '8px' }}>Enabled via SMS verification</p>
                  <a href="#" style={{ fontSize: '13px', color: 'var(--wf-blue)', fontWeight: 600 }}>Manage</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Key size={24} color="var(--wf-red)" />
                <div>
                  <h4 style={{ fontSize: '15px', marginBottom: '4px' }}>Password</h4>
                  <p style={{ fontSize: '13px', color: 'var(--wf-text-gray)', marginBottom: '8px' }}>Last changed 3 months ago</p>
                  <a href="#" style={{ fontSize: '13px', color: 'var(--wf-blue)', fontWeight: 600 }}>Update Password</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Bell size={24} color="var(--wf-red)" />
                <div>
                  <h4 style={{ fontSize: '15px', marginBottom: '4px' }}>Alert Notifications</h4>
                  <p style={{ fontSize: '13px', color: 'var(--wf-text-gray)', marginBottom: '8px' }}>Security and transaction alerts are ON</p>
                  <a href="#" style={{ fontSize: '13px', color: 'var(--wf-blue)', fontWeight: 600 }}>Configure</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
