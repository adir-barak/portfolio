'use client';
import { useState } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr';

type Props = { array: Array<string> };

// TextPager component displays text content from an array with navigation controls
export default function TextPager({ array }: Props) {
  // State variable to keep track of the index of the currently displayed item
  const [currentItem, setCurrentItem] = useState(0);
  // Calculate the index of the last item in the array
  const last = array.length - 1;

  // navigate to the previous item in the array
  const previousPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentItem((prev) => (prev === 0 ? last : prev - 1));
  };

  // navigate to the next item in the array
  const nextPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentItem((prev) => (prev === last ? 0 : prev + 1));
  };

  // Render the component with text content, navigation controls, and item information
  return (
    <div className='text-pager'>
      <p className='text-pager-content'>{array[currentItem]}</p>
      <div className='text-pager-controls'>
        {/* Button to navigate to the previous item */}
        <button className='text-pager-button' onClick={previousPage}> 
          <CaretLeft />
        </button>
        {/* Display current item information */}
        <span className='text-pager-info'>
          {currentItem + 1} / {array.length}
        </span>
        {/* Button to navigate to the next item */}
        <button className='text-pager-button' onClick={nextPage}>
          <CaretRight />
        </button>
      </div>
    </div>
  );
}
