'use client';
import { useState, Suspense } from 'react';
import Image from 'next/image';
type Props = {};

export default function HeroImage({}: Props) {
  const [value, setValue] = useState(54);
  return (
    // <div
    //   className='hero-img-section'
    //   onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
    //     const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    //     setValue((e.clientX / rect.right) * 100);
    //   }}>
    //   <div className='hero-img-container'>
    //     <Image
    //       src='/me-random.png'
    //       alt='A picture of me'
    //       width={1889}
    //       height={1757}
    //       className='hero-img-base'
    //       style={{ width: `${value > 50 ? Math.ceil(value) : value}%` }}
    //     />
    //     <Image src='/me-wordom.png' alt='A picture of me' width={1889} height={1757} className='inset-0' />
    //   </div>
    // </div>
    <div
      className='hero-img-container select-none cursor-crosshair'
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const relativeX = e.clientX - rect.left;
        const value = (relativeX / rect.width) * 100;
        // ensure it goes all the way from 0 to 100
        setValue(value > 50 ? Math.ceil(value) : Math.floor(value));
      }}>
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
        <Image priority={true} src='/me-wordom.png' alt='A picture of me' width={1889} height={1757} className='hero-img-base' />
      </div>
    </div>
  );
}
