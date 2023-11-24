'use client';
import { useState } from 'react';
import Image from 'next/image';
type Props = {};

export default function HeroImage({}: Props) {
  const [value, setValue] = useState(54);
  return (
    <div
      className='hero-img-section'
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        setValue((e.clientX / rect.right) * 100);
      }}>
      <div className='hero-img-container'>
        <Image
          src='/me-random.png'
          alt='A picture of me'
          width={2519}
          height={2543}
          className='hero-img-base'
          style={{ width: `${value > 50 ? Math.ceil(value) : value}%` }}
        />
        <Image
          src='/me-wordom.png'
          alt='A picture of me'
          width={2519}
          height={2543}
          className='w-full inset-0'
        />
      </div>
    </div>
  );
}
