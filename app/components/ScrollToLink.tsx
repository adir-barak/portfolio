'use client';
import Link from 'next/link';

type Props = { href: string; ariaLabel?: string; className?: string; onClick?: CallableFunction; children?: React.ReactNode };

// ScrollToLink component creates a link that, when clicked, smoothly scrolls to a specified target on the page
export default function ScrollToLink({ href, ariaLabel, className, onClick, children }: Props) {
  // handle the scroll behavior when the link is clicked
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // Get the target element using the provided href
    const elem = document.getElementById(e.currentTarget.href.replace(/.*\#/, ''));
    elem?.scrollIntoView({ behavior: 'smooth' }); // Scroll into view with smooth behavior
    if (onClick) {
      onClick(); // Call the provided onClick callback if available
    }
  };
  
  // Render the Link component with the specified properties and the scroll handling function
  return (
    <Link href={href} onClick={handleScroll} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  );
}
