'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = { array: { src: string; alt: string; width: string; height: string }[]; duration?: number };

// ImagesSlideshow component displays a slideshow of images with a specified duration for transitioning between images
export default function ImagesSlideshow({ array, duration = 3000 }: Props) {
  // State variable to keep track of the index of the currently displayed image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect to handle the automatic transition between images
  useEffect(() => {
    // Set up an interval to change the current image index after a specified duration
    const interinter = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % array.length);
    }, duration);

    // Clear the interval upon unmounting
    return () => clearInterval(interinter);
  }, []);

  // Render the slideshow with Image components based on the provided array
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
          className={`images-slideshow-img ${i === currentImageIndex ? 'opacity-100' : ''}`}
        />
      ))}
    </>
  );
}
