import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityMenu from './components/AccessibilityMenu';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html dir='ltr' lang='en'>
      <body className={`${inter.className} body`}>
        <Header />
        {children}
        <Footer />
        <AccessibilityMenu />
        <Analytics />
      </body>
    </html>
  );
}
