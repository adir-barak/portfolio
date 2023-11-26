import { Metadata, Viewport } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 Page Not Found - Adir Barak',
  referrer: 'origin-when-cross-origin',
  keywords: ['adir barak', 'portfolio', 'programmer', 'resume', 'developer'],
  description: "404 Error. Page not found on Adir Barak's portfolio website.",
  metadataBase: new URL('https://portfolio-tawny-five-74.vercel.app/'),
  openGraph: {
    title: '404 Page Not Found - Adir Barak',
    description: "404 Error. Page not found on Adir Barak's portfolio website.",
    siteName: 'Adir Barak',
    images: [
      {
        url: '/portfolio-thumbnail.jpg',
        width: 796,
        height: 796,
      },
    ],
    locale: 'en',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
      noimageindex: true,
    },
  },
  icons: {
    icon: '/icon.png',
  },
  twitter: {
    title: '404 Page Not Found - Adir Barak',
    description: "404 Error. Page not found on Adir Barak's portfolio website.",
    images: ['/portfolio-thumbnail.jpg'],
  },
  category: 'portfolio',
};

export const viewport: Viewport = {
  themeColor: '#9B15F4',
};

type Props = {};

export default async function NotFound() {
  return (
    <div className='fallback-section'>
      <h1>404</h1>
      <h1>NOT FOUND</h1>
      <Link href='/' className='fallback-button button'>
        Take Me Home!
      </Link>
    </div>
  );
}
