import { Metadata, Viewport } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'מפת אתר - מ.י אלומיניום',
  referrer: 'origin-when-cross-origin',
  keywords: ['אלומיניום', 'אלומיניום ירושלים', 'חלונות', 'תריסים', 'הרכבה אישית', 'אבי יעל'],
  description: 'מפת אתר עבור אתר מ.י אלומיניום',
  metadataBase: new URL('https://m-i-aluminium.vercel.app/'),
  openGraph: {
    title: 'מפת אתר - מ.י אלומיניום',
    description: 'מפת אתר עבור אתר מ.י אלומיניום',
    siteName: 'מ.י אלומיניום',
    images: [
      {
        url: '/closeup-shot.jpg',
        width: 1257,
        height: 623,
      },
    ],
    locale: 'he',
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
    icon: '/logo-icon.png',
  },
  twitter: {
    title: 'מפת אתר - מ.י אלומיניום',
    description: 'מפת אתר עבור אתר מ.י אלומיניום',
    images: ['/closeup-shot.jpg'],
  },
  category: 'אלומיניום',
};

export const viewport: Viewport = {
  themeColor: 'black',
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
