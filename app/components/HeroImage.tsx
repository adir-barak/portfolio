'use client';
import { useState, Suspense } from 'react';
import Image from 'next/image';
type Props = {};

// HeroImage component displays an interactive hero section image with scroll over effect
export default function HeroImage({}: Props) {
  // State variable to store the dynamic width value based on mouse position
  const [value, setValue] = useState(54);

  // Render a container for the hero image with interactive mouse movement
  return (
    <div
      className='hero-img-container select-none cursor-crosshair'
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        // Calculate the relative X position of the mouse within the container
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        // Calculate the dynamic width value based on the mouse position
        const value = (relativeX / rect.width) * 100;
        // ensure it goes all the way from 0 to 100
        setValue(value > 50 ? Math.ceil(value) : Math.floor(value));
      }}>
      {/* Dynamic Image component with a variable width based on the state value */}
      <Image
        priority={true}
        src='/me-random.png'
        alt='A picture of me'
        width={1889}
        height={1757}
        className='hero-img-special '
        style={{ width: `${value}%` }}
      />
      <div className='hero-img-base relative -z-50 '>
        {/* Base Image component (non-dynamic) positioned behind the dynamic image */}
        <Image priority={true} src='/me-wordom.png' alt='A picture of me' width={1889} height={1757} className='hero-img-base' />
      </div>
    </div>
  );
}
