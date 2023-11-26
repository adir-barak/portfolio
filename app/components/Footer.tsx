import Link from 'next/link';
import ScrollToLink from './ScrollToLink';
import { CaretUp, Copyright, Heart } from '@phosphor-icons/react/dist/ssr';
import ContactForm from './ContactForm';
import ContactBox from './ContactBox';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id='contact'>
      <ScrollToLink href='#top' className='footer-back-to-top'>
        <CaretUp className='inline' />
      </ScrollToLink>
      <ContactBox />
      <h3 className='footer-title'>
        Say hello or contact me directly via{' '}
        <Link href='mailto:Adir.Barak@mail.huji.ac.il'>
          <em>Adir.Barak@mail.huji.ac.il</em>
        </Link>
      </h3>
      {/* <ContactForm /> */}
      <div>
        <div className='footer-links'>
          <Link href='/terms-of-use' className='footer-link' aria-label='link to the terms of use page'>
            Terms of Use
          </Link>
          <Link href='/privacy-policy' className='footer-link' aria-label='link to the privacy policy page'>
            Privacy Policy
          </Link>
          <Link href='accessibility-statement' className='footer-link' aria-label='link to the accessibility statement page'>
            Accessibility Statement
          </Link>
          <Link href='/sitemap' className='footer-link' aria-label='link to the sitemap page'>
            Sitemap
          </Link>
        </div>
        <p className='footer-credit'>
          Built with <Heart className='inline' weight='bold' /> by{' '}
          <Link href='https://www.linkedin.com/in/adir-barak/' target='_blank' aria-label='link to my linkedin profile'>
            Adir Barak
          </Link>{' '}
          <Copyright className='inline' weight='bold' />
          2023
        </p>
      </div>
    </footer>
  );
}
