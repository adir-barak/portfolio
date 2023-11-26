'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = { array: { src: string; alt: string; width: string; height: string }[]; duration?: number };

export default function ImagesSlideshow({ array, duration = 3000 }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interinter = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % array.length);
    }, duration);

    return () => clearInterval(interinter);
  }, []);
  return (
    <>
      {array.map((img, i) => (
        <Image
          loading='lazy'
          key={i}
          src={img.src}
          alt={img.alt}
          width={Number(img.width)}
          height={Number(img.height)}
          className={`images-slideshow-img ${
            i === currentImageIndex ? 'opacity-100' : ''
          }`}
        />
      ))}
    </>
  );
}
