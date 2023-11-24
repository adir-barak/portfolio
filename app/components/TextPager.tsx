'use client';
import { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr';

type Props = { array: Array<string> };

export default function TextPager({ array }: Props) {
  const [currentItem, setCurrentItem] = useState(0);
  const last = array.length - 1;
  const previousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentItem((prev) => (prev === 0 ? last : prev - 1));
  };
  const nextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentItem((prev) => (prev === last ? 0 : prev + 1));
  };

  return (
    <div className='text-pager'>
      <p className='text-pager-content'>{array[currentItem]}</p>
      <div className='text-pager-controls'>
        <button className='text-pager-button' onClick={previousPage}>
          <CaretLeft />
        </button>
        <span className='text-pager-info'>
          {currentItem + 1} / {array.length}
        </span>
        <button className='text-pager-button' onClick={nextPage}>
          <CaretRight />
        </button>
      </div>
    </div>
  );
}
