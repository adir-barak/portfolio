// 'use client'
import resumeData from '@/json/resumeData.json';
import Link from 'next/link';
import { FilePdf } from '@phosphor-icons/react/dist/ssr';
import ResumeCard from './ResumeCard';

type Props = {};

export default function Resume({}: Props) {
  const data = resumeData.data;
  return (
    <section id='resume' className='section'>
      <span aria-hidden={true} className='hidden lg:resume-decor'>
        MY RESUME
      </span>
      <h3 className='section-title resume-section-title'>
        My Past, Present, and... <span className='font-extralight'>Future?</span>{' '}
        <Link
          href='/Adir Barak - Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block w-fit h-fit text-red-500 cursor-pointer'>
          <FilePdf className='inline text-4xl md:text-5xl lg:text-6xl' />
        </Link>
      </h3>

      <div className='resume-cards-container'>
        {data.map((point, i) => (
          <ResumeCard point={point} key={i} />
        ))}
      </div>
    </section>
  );
}
