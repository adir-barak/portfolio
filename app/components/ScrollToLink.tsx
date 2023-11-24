'use client';
import Link from 'next/link';

type Props = { href: string; ariaLabel?: string; className?: string; onClick?: CallableFunction; children?: React.ReactNode };

export default function ScrollToLink({ href, ariaLabel, className, onClick, children }: Props) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const elem = document.getElementById(e.currentTarget.href.replace(/.*\#/, ''));
    elem?.scrollIntoView({ behavior: 'smooth' });
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link href={href} onClick={handleScroll} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  );
}
