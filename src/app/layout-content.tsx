'use client';

import { useBank } from '@/context/BankContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import "./globals.css";

export default function LayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, logout } = useBank();
  const router = useRouter();
  const pathname = usePathname();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem('wf_auth') === 'true';
    if (!authStatus && pathname !== '/login' && pathname !== '/mfa') {
      router.push('/login');
    }
    setIsInitialLoading(false);
  }, [pathname, router]);

  const handleSignOff = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
    router.push('/sign-off');
  };

  if (isInitialLoading) {
    return (
      <html lang="en">
        <body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
          <Loader2 className="animate-spin" size={40} color="#d71e28" />
        </body>
      </html>
    );
  }

  const isAuthPage = pathname === '/login' || pathname === '/mfa' || pathname === '/sign-off';

  return (
    <html lang="en">
      <body>
        {!isAuthPage && (
          <>
            <div className="header-top">
              <div className="container header-top-content">
                <span>Consumer</span>
                <span>Small Business</span>
                <span>Commercial</span>
                <span>Wealth Management</span>
              </div>
            </div>
            <header>
              <div className="container header-main">
                <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <div style={{ background: '#d71e28', padding: '10px 16px', borderRadius: '4px', display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                    <svg width="180" height="28" viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* W */}
                      <path d="M0 0H3.5L6 18L8.5 0H12L14.5 18L17 0H20.5L16.5 24H12.5L10 6L7.5 24H3.5L0 0Z" fill="white"/>
                      {/* E */}
                      <path d="M24 0H34V3.5H27.5V10H33V13.5H27.5V20.5H34V24H24V0Z" fill="white"/>
                      {/* L */}
                      <path d="M38 0H41.5V20.5H48V24H38V0Z" fill="white"/>
                      {/* L */}
                      <path d="M52 0H55.5V20.5H62V24H52V0Z" fill="white"/>
                      {/* S */}
                      <path d="M74 4C74 1.5 72 0 69 0C66 0 64 1.5 64 4C64 6 65.5 7.5 69 8.5C72 9.5 73.5 11 73.5 13.5C73.5 16.5 71.5 18 68.5 18C65.5 18 63.5 16.5 63.5 13.5H67C67 15 67.5 16 68.5 16C69.5 16 70.5 15 70.5 13.5C70.5 12 69 11 66 10C63 9 61 7.5 61 4.5C61 1.5 63 0 66.5 0H73.5L74 4Z" fill="white" transform="translate(2, 3)"/>
                      
                      {/* FARGO */}
                      <g transform="translate(85, 0)">
                        <path d="M0 0H10V3.5H3.5V10H9V13.5H3.5V24H0V0Z" fill="#FFCD00"/>
                        <path d="M12 24L18 0H22L28 24H24.5L23 18H17L15.5 24H12ZM17.5 15H22.5L20 6L17.5 15Z" fill="#FFCD00"/>
                        <path d="M32 0H38C42 0 44 2 44 5C44 8 42 10 39 10.5V11L44.5 24H40.5L35.5 11.5H35.5V24H32V0ZM35.5 3.5V8.5H38C39.5 8.5 40.5 8 40.5 6C40.5 4 39.5 3.5 38 3.5H35.5Z" fill="#FFCD00"/>
                        <path d="M58 12C58 5 55 0 49.5 0C44 0 41 5 41 12C41 19 44 24 49.5 24C53 24 56 22 57.5 19L54.5 17C53.5 18.5 52 19.5 49.5 19.5C46 19.5 44.5 16.5 44.5 12C44.5 7.5 46 4.5 49.5 4.5C52 4.5 53.5 5.5 54.5 7.5L58 5.5V12Z" fill="#FFCD00" transform="translate(8, 0)"/>
                        <path d="M72 12C72 5 69 0 63.5 0C58 0 55 5 55 12C55 19 58 24 63.5 24C69 24 72 19 72 12ZM58.5 12C58.5 7.5 60 4.5 63.5 4.5C67 4.5 68.5 7.5 68.5 12C68.5 16.5 67 19.5 63.5 19.5C60 19.5 58.5 16.5 58.5 12Z" fill="#FFCD00" transform="translate(10, 0)"/>
                      </g>
                    </svg>
                  </div>
                </a>
                <nav>
                  <ul style={{ display: 'flex', alignItems: 'center' }}>
                    <li><a href="/" className={pathname === '/' ? 'active' : ''}>Accounts</a></li>
                    <li><a href="/transfer" className={pathname === '/transfer' ? 'active' : ''}>Transfer & Pay</a></li>
                    <li><a href="/activity" className={pathname === '/activity' ? 'active' : ''}>Activity</a></li>
                    <li><a href="/profile" className={pathname === '/profile' ? 'active' : ''}>Profile</a></li>
                    <li>
                      <div style={{ marginLeft: '15px', padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
                        <div style={{ width: '8px', height: '8px', background: '#4CAF50', borderRadius: '50%', boxShadow: '0 0 4px #4CAF50' }}></div>
                        SECURE SESSION
                      </div>
                    </li>
                    <li style={{ marginLeft: '15px' }}><a href="#" onClick={handleSignOff} style={{ background: 'var(--wf-gold)', color: '#333', padding: '6px 15px', borderRadius: '3px', fontWeight: 'bold' }}>Sign Off</a></li>
                  </ul>
                </nav>
              </div>
            </header>
          </>
        )}
        <main className={!isAuthPage ? 'container' : ''}>
          {children}
        </main>
        {!isAuthPage && (
          <footer>
            <div className="container">
              <div className="footer-links">
                <a href="/privacy">Privacy, Cookies, Security & Legal</a>
                <a href="/privacy">Notice of Data Collection</a>
                <a href="/privacy">General Terms of Use</a>
                <a href="/security">Online Access Agreement</a>
                <a href="/support">Contact Us</a>
              </div>
              <p>&copy; 1999 - 2026 Wells Fargo. All rights reserved. Member FDIC.</p>
              <div className="disclaimer">
                Investment and Insurance Products are: Not Insured by the FDIC or Any Federal Government Agency | Not a Deposit or Other Obligation of, or Guaranteed by, the Bank or Any Bank Affiliate | Subject to Investment Risks, Including Possible Loss of the Principal Amount Invested.
              </div>
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
