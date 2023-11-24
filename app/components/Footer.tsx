import Link from 'next/link';
import ScrollToLink from './ScrollToLink';
import { CaretUp, Copyright, Heart } from '@phosphor-icons/react/dist/ssr';
import ContactForm from './ContactForm';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id='contact'>
      <ScrollToLink href='#hero' className='footer-back-to-top'>
        <CaretUp className='inline' />
      </ScrollToLink>
      <h3 className='footer-title'>
        Say hello or contact me directly via{' '}
        <Link href='#'>
          <em>Adir.Barak@huji.mail.ac.il</em>
        </Link>
      </h3>
      <ContactForm />
      <div>
        <div className='footer-links'>
          <Link href='' className='footer-link'>
            Terms of Use
          </Link>
          <Link href='' className='footer-link'>
            Privacy Policy
          </Link>
          <Link href='' className='footer-link'>
            Accessibility Statement
          </Link>
          <Link href='' className='footer-link'>
            Sitemap
          </Link>
        </div>
        <p className='footer-credit'>
          Built with <Heart className='inline' /> by <Link href=''>Adir Barak</Link> <Copyright className='inline' />
          2023
        </p>
      </div>
    </footer>
  );
}
