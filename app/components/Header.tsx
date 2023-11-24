'use client';
import { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import ScrollToLink from './ScrollToLink';
import { X, ClipboardText, Envelope, LinkedinLogo, GithubLogo } from '@phosphor-icons/react/dist/ssr';

type Props = {};

export default function Header({}: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setMenuIsOpen((prev) => !prev);
  };
  return (
    <header>
      <div className='header-container'>
        <Link href='/' aria-label='link home'>
          Adir Barak
        </Link>
        <button className='nav-button' onClick={toggleMenu}>
          {menuIsOpen ? <X className='inline' /> : <ClipboardText className='inline' />}
        </button>
        <nav className={`${menuIsOpen && 'open'}`}>
          <ul className='nav-list'>
            <li>
              <ScrollToLink href='#resume' ariaLabel='link to Resume' className='nav-list-link' onClick={toggleMenu}>
                Resume
              </ScrollToLink>
            </li>
            <li>
              <ScrollToLink href='#portfolio' ariaLabel='link to Portfolio' className='nav-list-link' onClick={toggleMenu}>
                Portfolio
              </ScrollToLink>
            </li>
            <li>
              <ScrollToLink href='#about' ariaLabel='link to About' className='nav-list-link' onClick={toggleMenu}>
                About
              </ScrollToLink>
            </li>
            <li>
              <ScrollToLink href='#contact' ariaLabel='link to Contact' className='nav-list-link' onClick={toggleMenu}>
                Contact
              </ScrollToLink>
            </li>
            <li>
              <ul className='nav-list-icons'>
                <li>
                  <ScrollToLink href='#contact' ariaLabel='link to Contact' className='nav-list-link' onClick={toggleMenu}>
                    <LinkedinLogo />
                  </ScrollToLink>
                </li>
                <li>
                  <ScrollToLink href='#contact' ariaLabel='link to Contact' className='nav-list-link' onClick={toggleMenu}>
                    <GithubLogo />
                  </ScrollToLink>
                </li>
                <li>
                  <ScrollToLink href='#contact' ariaLabel='link to Contact' className='nav-list-link' onClick={toggleMenu}>
                    <Envelope />
                  </ScrollToLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
