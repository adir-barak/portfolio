import Image from 'next/image';
import Link from 'next/link';
import TextPager from './TextPager';
import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react/dist/ssr';

type Props = {
  point: {
    title: string;
    subTitle: string;
    tools: string[];
    bullets: string[];
    thumbnail: string;
    link?: string;
    github?: string;
  };
};

export default function PortfolioCard({ point }: Props) {
  return (
    <article className='portfolio-card'>
      <h4 className='portfolio-card-title'>{point.title}</h4>

      <div className='portfolio-card-content'>
        <h5 className='portfolio-card-subtitle'>
          {point.subTitle}
          <div className='portfolio-card-links'>
            {point?.link && (
              <Link href={point.link} target='_blank' className='portfolio-card-link'>
                <ArrowSquareOut className='inline' />
              </Link>
            )}
            {point?.github && (
              <Link href={point?.github} target='_blank' className='portfolio-card-link'>
                <GithubLogo className='inline' />
              </Link>
            )}
          </div>
        </h5>
        <Image src={point.thumbnail} alt='alt' width={400} height={400} className='portfilio-card-thumbnail' />
        <TextPager array={point.bullets} />
        <div className='portfolio-card-tools-container'>
          {point.tools.sort().map((tool, i) => (
            <span key={i} className='portfolio-card-tool'>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
