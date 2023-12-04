'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wheelchair } from '@phosphor-icons/react/dist/ssr';
import ScrollToLink from './ScrollToLink';

type Props = {};

// AccessibilityMenu component provides an accessible menu with various options for improving user experience
export default function AccessibilityMenu({}: Props) {
  // State variable to track whether the menu is open or closed
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null); // Reference to the toggle button for focusing purposes
  const pathname = usePathname(); // Get the current pathname using Next.js hook

  // Toggle the menu's open/closed state
  const toggleMenu = (e: any) => {
    setMenuIsOpen((prev) => !prev);
  };

  // Handle the 'Escape' key event and open/close the menu
  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (buttonRef.current) {
        buttonRef.current.focus(); // Focus the toggle button and close the menu
      }
      toggleMenu(e);
    }
  };

  // Toggle a class in the body element based on button clicks
  const toggleClassList = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (document.body.classList.contains(e.currentTarget.name)) {
      document.body.classList.remove(e.currentTarget.name);
    } else {
      document.body.classList.add(e.currentTarget.name);
    }
  };

  // Reset all class modifications in the body element, and thus disable all enabled features
  const resetClassList = (e: React.MouseEvent<HTMLButtonElement>) => {
    document.body.classList.remove('monochrome', 'inverted', 'emphasizeLinks', 'accessibleFont');
  };

  // useEffect to add and remove the 'Escape' key event listener
  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('keydown', handleEscapeKey);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render the accessibility menu
  return (
    <aside className={`accessibility-menu ${menuIsOpen ? 'open' : ''}`}>
      <menu className='accessibility-menu-content'>
        <ScrollToLink href='#top' className='accessibility-menu-item' aria-label='scroll to the top of the page'>
          Top
        </ScrollToLink>
        {/* Conditional rendering for pathname-specific links - only on the homepage */}
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
        {/* Conditional rendering for pathname-specific links - only outside of the Accessibility Statement */}
        {pathname !== '/accessibility-statement' && (
          <Link
            href='/accessibility-statement'
            className='accessibility-menu-item'
            aria-label='link to the accessibility statement'>
            Accessibility Statement
          </Link>
        )}
        {/* Conditional rendering for pathname-specific links - only outside of the homepage */}
        {pathname !== '/' && (
          <Link href='/' className='accessibility-menu-item' aria-label='link to homepage'>
            Home
          </Link>
        )}
        {/* Buttons for toggling various accessibility features */}
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
        {/* Button to reset all accessibility modifications */}
        <button id='reset' name='reset' onClick={resetClassList} className='accessibility-menu-item'>
          Reset
        </button>
      </menu>
      {/* UI representation and button to toggle the menu visibility */}
      <button ref={buttonRef} onClick={toggleMenu} className='accessibility-toggle-button'>
        <Wheelchair className='' />
      </button>
    </aside>
  );
}
