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
  const { logout } = useBank();
  const router = useRouter();
  const pathname = usePathname();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const authStatus = localStorage.getItem('wf_auth') === 'true';
    const publicPages = ['/', '/login', '/mfa', '/sign-off', '/privacy', '/support'];
    
    if (!authStatus && !publicPages.includes(pathname)) {
      router.push('/login');
    }
    
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [pathname, router]);

  if (isInitialLoading) {
    return (
      <html lang="en">
        <body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'var(--wf-blue-gradient)' }}>
          <Loader2 className="animate-spin" size={40} color="#D1121F" />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
