import { Metadata, Viewport } from 'next';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Portfolio';
import Resume from './components/Resume';

export const metadata: Metadata = {
  title: 'Adir Barak - Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['adir barak', 'portfolio', 'programmer', 'resume', 'developer'],
  description: "The homepage for Adir Barak's portfolio website.",
  metadataBase: new URL('https://adirbarak.com/'),
  openGraph: {
    title: 'Adir Barak - Portfolio',
    description: "The homepage for Adir Barak's portfolio website.",
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
  // icons: {
  //   icon: '/icon.png',
  // },
  twitter: {
    title: 'Adir Barak - Portfolio',
    description: "The homepage for Adir Barak's portfolio website.",
    images: ['/portfolio-thumbnail.jpg'],
  },
  category: 'portfolio',
};

export const viewport: Viewport = {
  themeColor: '#9B15F4',
};

export default function Home() {
  return (
    <main id='top'>
      <Hero />
      <Resume />
      <Projects />
      <About />
    </main>
  );
}
