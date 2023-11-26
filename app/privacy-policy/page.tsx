import { Metadata, Viewport } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Adir Barak',
referrer: 'origin-when-cross-origin',
keywords: ['adir barak', 'portfolio', 'programmer', 'resume', 'developer'],
  description: "The privacy policy for Adir Barak's portfolio website.",
metadataBase: new URL('https://adirbarak.com/'),
openGraph: {
  title: 'Privacy Policy - Adir Barak',
  description: "The privacy policy for Adir Barak's portfolio website.",
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
  title: 'Privacy Policy - Adir Barak',
  description: "The privacy policy for Adir Barak's portfolio website.",
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
      <h1>Privacy Policy</h1>
      <section>
        <p>
          Welcome to <Link href='/'>Adir Barak&apos;s</Link> portfolio website.
        </p>
        <p>
          This page provides details about how I protect your privacy and describes the ways in which you can exercise your rights
          regarding personal information.
          <br />
          Various measures are implemented to maintain the confidentiality of the information collected about the website users
          and their details (&apos;user information&apos;).
        </p>
      </section>
      <section>
        <h2>The measures I take to protect your privacy</h2>
        <p>
          I do not collect information about you that identifies you personally, with the exception of such information that you
          voluntarily provide me through:
        </p>
        <ul>
          <li>My Email</li>
          <li>The &apos;Contact&apos; form</li>
        </ul>
      </section>
      <section>
        <h2>What information I collect about you</h2>
        <p>I take various measures to protect the information in my possession, including:</p>
        <ul>
          <li>Security of communication with the website using SSL protection.</li>
          <li>I do not share the information with any other party.</li>
          <li>
            Sending your inquiries directly from the &apos;Contact&apos; form to my personal email address. Answers to your inquiries will
            also be sent by email or on the phone.
          </li>
        </ul>
        <p>
          Despite my efforts, it is not possible to guarantee absolute robustness against the intrusion of third parties into the
          communication that will be conducted between us. In the aforementioned case you will not have any claim, demand or claim
          against us.
        </p>
      </section>
      <section>
        <h2>Why I collect information, and how I use it</h2>
        <p>
          The information you provide me is collected and used solely to answer your inquiries.
          <br />
          Data from cookies (such as Google Analytics) are stored in the website&apos;s Google account for internal statistical
          analysis. This information is used to improve the operation and user experience of the site without disclosing personal
          details to third parties.
          <br />
          <br />
          In specific circumstances, I may disclose your information to relevant parties in case of legal violations, violations
          of agreements, violation of the site&apos;s terms or violations of intellectual property rights.
          <br />
          This may also occur in response to a court order or during any dispute, claim or proceeding involving you and to the
          website owner or its operators.
        </p>
      </section>
      <section>
        <h2>Cookies policy</h2>
        <p>
          The site may use cookies - a standard computer code designed to identify and facilitate users&apos; browsing, and improve the
          overall user experience.
        </p>
        <p>
          Cookies also generate statistical data on the activity of the site and the users. Specifically, I use Cookies
          statistically (like Google Analytics).
        </p>
        <p>In any situation where you are not interested in this, please disable the option for cookies in your browser.</p>
      </section>
    </main>
  );
}
