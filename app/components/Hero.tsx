// import Image from 'next/image';
// import Link from 'next/link';
import ScrollToLink from './ScrollToLink';
import HeroImage from './HeroImage';
import { HandWaving } from '@phosphor-icons/react/dist/ssr';

type Props = {};

export default function Hero({}: Props) {
  return (
    <section id='hero' className='hero-section'>
      <HeroImage />
      <article className='mx-6'>
        <h1 className='hero-title'>
          PROBLEM
          <br />
          SOLVER.
        </h1>
        <h2 className='hero-subtitle'>That&apos;s who I am.</h2>
        <p>
          You see,
          <br />
          I&apos;m a programmer,
          <br />
          but just as the brush doesn&apos;t define the artist, coding doesn&apos;t define me.
        </p>
        <p>
          <ScrollToLink href='#portfolio'>
            <em className='hero-emphasis'>Developing</em>
          </ScrollToLink>
          , designing, marketing, and crafting exceptional products, to name a few, are merely tools – means to an end.
        </p>
        <p>
          What I actually desire is to creatively orchestrate ideas, skills and resources to{' '}
          <ScrollToLink href='#resume'>
            <em className='hero-emphasis'>solve</em>
          </ScrollToLink>{' '}
          real-world problems and make a meaningful, and positive impact on people&apos;s lives.
        </p>
        <ScrollToLink href='#contact' className='hero-cta-button button'>
          Say Hello
          <HandWaving className='button-icon -scale-x-100' />
        </ScrollToLink>
      </article>
      {/* <div aria-hidden={true} className='absolute bg-secondary-1 w-[150vw] h-36 -rotate-12 bottom-0 left-1/2 -translate-x-1/2 -z-10'></div> */}
      <div aria-hidden={true} className='hero-decor'></div>
    </section>
  );
}
