import { Phone, WhatsappLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

type Props = {};

export default function ContactBox({}: Props) {
  return (
    <div className='contact-box'>
      <p className='contact-box-p'>
        Call me at{' '}
        <Link href='tel:0543842978'>
          <Phone className='contact-box-icon inline' weight='fill' />
          <span className='contact-box-phone-number'>054-384-2978</span>
        </Link>
        , or hit me up on{' '}
        <Link href='https://wa.me/+972543842978'>
          <WhatsappLogo className='contact-box-icon inline-block text-[#0dbf41] bg-main-0 rounded-full' weight='fill' />
        </Link>
        .
      </p>
    </div>
  );
}
