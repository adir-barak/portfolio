'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wheelchair } from '@phosphor-icons/react/dist/ssr';
import ScrollToLink from './ScrollToLink';

// type Props = {
//   accessibilityFeatures: {
//     monochrome: boolean;
//     inverted: boolean;
//     emphasizeLinks: boolean;
//     accessibleFont: boolean;
//   };
//   setAccessibilityFeatures: React.Dispatch<
//     React.SetStateAction<{
//       monochrome: boolean;
//       inverted: boolean;
//       emphasizeLinks: boolean;
//       accessibleFont: boolean;
//     }>
//   >;
// };

// type Props = {
//   monochrome: boolean;
//   inverted: boolean;
//   emphasizeLinks: boolean;
//   accessibleFont: boolean;
// };
type Props = {};

// type accessibilityFeatures = { monochrome: boolean; emphasizeLinks: boolean };

export default function AccessibilityMenu({}: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const [accessibilityFeatures, setAccessibilityFeatures] = useState({
  //   monochrome: false,
  //   inverted: false,
  //   emphasizeLinks: false,
  //   accessibleFont: false,
  // });
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  const toggleMenu = (e: any) => {
    setMenuIsOpen((prev) => !prev);
  };

  // const handleToggle = (e: any) => {
  //   setAccessibilityFeatures({
  //     ...accessibilityFeatures,
  //     [e.target.name]: !accessibilityFeatures[e.target.name as keyof typeof accessibilityFeatures],
  //   });
  // };

  // const handleReset = (e: any) => {
  //   setAccessibilityFeatures({ monochrome: false, inverted: false, emphasizeLinks: false, accessibleFont: false });
  // };

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
      toggleMenu(e);
    }
  };

  const toggleClassList = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (document.body.classList.contains(e.currentTarget.name)) {
      document.body.classList.remove(e.currentTarget.name);
    } else {
      document.body.classList.add(e.currentTarget.name);
    }
  };

  const resetClassList = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.classList.remove('monochrome', 'inverted', 'emphasizeLinks', 'accessibleFont');
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('keydown', handleEscapeKey);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className={`accessibility-menu ${menuIsOpen ? 'open' : ''}`}>
      <menu className='accessibility-menu-content'>
        <ScrollToLink href='#top' className='accessibility-menu-item' aria-label='scroll to the top of the page'>
          Top
        </ScrollToLink>
        {pathname === '/' && (
          <>
            <ScrollToLink href='#resume' className='accessibility-menu-item' aria-label='scroll to the resume section'>
              Resume
            </ScrollToLink>
            <ScrollToLink href='#portfolio' className='accessibility-menu-item' aria-label='scroll to the portfolio section'>
              Portfolio
            </ScrollToLink>
            <ScrollToLink href='#about' className='accessibility-menu-item' aria-label='scroll to the about section'>
              About
            </ScrollToLink>
          </>
        )}
        <ScrollToLink href='#contact' className='accessibility-menu-item' aria-label='scroll to the contact section'>
          Contact
        </ScrollToLink>
        {pathname !== '/accessibility-statement' && (
          <Link
            href='/accessibility-statement'
            className='accessibility-menu-item'
            aria-label='link to the accessibility statement'>
            Accessibility Statement
          </Link>
        )}
        {pathname !== '/' && (
          <Link href='/' className='accessibility-menu-item' aria-label='link to homepage'>
            Home
          </Link>
        )}
        <button id='monochrome' name='monochrome' onClick={toggleClassList} className='accessibility-menu-item monochrome'>
          <span className='accessibility-menu-item-checkmark monochrome'>&#x2713; </span>
          Monochrome
        </button>
        <button id='inverted' name='inverted' onClick={toggleClassList} className='accessibility-menu-item inverted'>
          <span className='accessibility-menu-item-checkmark inverted'>&#x2713; </span>
          Invert Colors
        </button>
        <button
          id='emphasizeLinks'
          name='emphasizeLinks'
          onClick={toggleClassList}
          className='accessibility-menu-item emphasizeLinks'>
          <span className='accessibility-menu-item-checkmark emphasizeLinks'>&#x2713; </span>
          Emphasize Links
        </button>
        <button
          id='accessibleFont'
          name='accessibleFont'
          onClick={toggleClassList}
          className='accessibility-menu-item accessibleFont'>
          <span className='accessibility-menu-item-checkmark accessibleFont'>&#x2713; </span>
          Accessible Font
        </button>
        <button id='reset' name='reset' onClick={resetClassList} className='accessibility-menu-item'>
          Reset
        </button>
      </menu>
      <button ref={buttonRef} onClick={toggleMenu} className='accessibility-toggle-button'>
        {/* <Image src='/accessibility-icon.png' alt='Accessibility Icon' title='Accessibility Icon' /> */}
        <Wheelchair className='' />
      </button>
    </aside>
  );
}
