'use client';
import React, { useState } from 'react';
import ScrollToLink from './ScrollToLink';
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr';

type Props = {
  point: {
    id: string;
    institution: string;
    jobTitle: string;
    highlight: string;
    start: string;
    end?: string;
    bullets: string[];
  };
};

export default function ResumeCard({ point }: Props) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const toggleCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsCardOpen((prev) => !prev);
  };
  return (
    <article className={`resume-card ${Number(point.id) % 2 ? 'lg:alt' : ''}`} id={`resume-card-${point.id}`}>
      <div className='resume-card-header'>
        <h4 className='resume-card-title'>
          {point.jobTitle} <span className='resume-card-title-span'>@ {point.institution}</span>
        </h4>
        <h5 className='resume-card-subtitle'>{point.highlight}</h5>
        <p className='resume-card-time'>
          {point.start}
          {point.end ? ` - ${point.end}` : ''}
        </p>
        <button className='resume-card-toggle-button button' onClick={toggleCard}>
          <CaretDown className={`transition-all ${isCardOpen && 'rotate-180'} inline`} />
        </button>
      </div>
      <ul className={`resume-card-content ${isCardOpen ? 'h-fit visible' : 'h-0 invisible'}`}>
        {
          <>
            {point.bullets.map((bullet, i) => (
              <li key={i} className='resume-card-bullet'>
                {bullet}
              </li>
            ))}
            {/* <ScrollToLink href={`#resume-card-${point.id}`} onClick={toggleCard} className='resume-card-toggle-button sm:hidden'>
              <CaretUp className='inline' />
            </ScrollToLink> */}
          </>
        }
      </ul>
    </article>
  );
}
