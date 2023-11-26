'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ScrollToLink from './ScrollToLink';
import { X, ClipboardText, Envelope, LinkedinLogo, GithubLogo } from '@phosphor-icons/react/dist/ssr';

type Props = {};

export default function Header({}: Props) {
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setMenuIsOpen((prev) => !prev);
  };
  return (
    <header>
      <div className='header-container lg:header-container-lg'>
        <Link href='/' aria-label='link to homepage' className='text-lg sm:text-xl md:text-2xl'>
          ADIR BARAK
        </Link>
        <button className='nav-button lg:hidden' onClick={toggleMenu}>
          {menuIsOpen ? <X className='inline' /> : <ClipboardText className='inline' />}
        </button>

        <nav className={`nav lg:nav-lg ${menuIsOpen ? 'open' : ''} ${pathname !== '/' ? 'partial' : ''}`}>
          <ul className='nav-list lg:nav-list-lg'>
            {pathname === '/' ? (
              <>
                <li>
                  <ScrollToLink href='#resume' ariaLabel='scroll page to Resume' className='nav-list-link' onClick={toggleMenu}>
                    Resume
                  </ScrollToLink>
                </li>
                <li>
                  <ScrollToLink
                    href='#portfolio'
                    ariaLabel='scroll page to Portfolio'
                    className='nav-list-link'
                    onClick={toggleMenu}>
                    Portfolio
                  </ScrollToLink>
                </li>
                <li>
                  <ScrollToLink href='#about' ariaLabel='scroll page to About' className='nav-list-link' onClick={toggleMenu}>
                    About
                  </ScrollToLink>
                </li>
                <li>
                  <ScrollToLink href='#contact' ariaLabel='scroll page to Contact' className='nav-list-link' onClick={toggleMenu}>
                    Contact
                  </ScrollToLink>
                </li>
              </>
            ) : (
              <li>
                <Link href='/' aria-label='link to homepage' className='nav-list-link'>
                  Home
                </Link>
              </li>
            )}

            <li>
              <ul className='nav-list-icons'>
                <li>
                  <Link
                    href='https://www.linkedin.com/in/adir-barak'
                    target='_blank'
                    aria-label='link to my linkedin profile'
                    className='nav-list-link'>
                    <LinkedinLogo />
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://github.com/adir-barak'
                    target='_blank'
                    aria-label='link to my github profile'
                    className='nav-list-link'>
                    <GithubLogo />
                  </Link>
                </li>
                <li>
                  <Link
                    href='mailto:Adir.Barak@mail.huji.ac.il'
                    target='_blank'
                    aria-label='link to contact me via email'
                    className='nav-list-link'>
                    <Envelope />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
