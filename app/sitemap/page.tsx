import { Metadata, Viewport } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Sitemap - Adir Barak',
  referrer: 'origin-when-cross-origin',
  keywords: ['adir barak', 'portfolio', 'programmer', 'resume', 'developer'],
    description: "The sitemap for Adir Barak's portfolio website.",
  metadataBase: new URL('https://adirbarak.com/'),
  openGraph: {
    title: 'Sitemap - Adir Barak',
    description: "The sitemap for Adir Barak's portfolio website.",
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
    title: 'Sitemap - Adir Barak',
    description: "The sitemap for Adir Barak's portfolio website.",
    images: ['/portfolio-thumbnail.jpg'],
  },
  category: 'portfolio',
};

export const viewport: Viewport = {
  themeColor: '#9B15F4',
};

type Props = {};

export default function page({}: Props) {
  return (
    <main id='top' className='technical-article'>
      <h1>Sitemap</h1>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/terms-of-use'>Terms of Use</Link>
        </li>
        <li>
          <Link href='/privacy-policy'>Privacy Policy</Link>
        </li>
        <li>
          <Link href='/accessibility-statement'>Accessibility Statement</Link>
        </li>
      </ul>
    </main>
  );
}
