// import Image from 'next/image';
// import Link from 'next/link';
import ScrollToLink from './ScrollToLink';
import HeroImage from './HeroImage';
import { HandWaving } from '@phosphor-icons/react/dist/ssr';

type Props = {};

export default function Hero({}: Props) {
  return (
    <section id='hero' className='hero-section xl:hero-section-xl'>
      <HeroImage />
      <article className='hero-section-article'>
        <div>
          <h1 className='hero-title'>
            {/* PROBLEM
            <br />
            SOLVER. */}
            SOLVING
            <br />
            PROBLEMS.
          </h1>
          {/* <h2 className='hero-subtitle'>That&apos;s who I am.</h2> */}
          <h2 className='hero-subtitle'>That&apos;s what I do.</h2>
        </div>
        <div>
          <p className='hero-p'>
            You see,
            <br />
            I&apos;m a programmer,
            <br />
            but just as the brush doesn&apos;t define the artist, coding doesn&apos;t define me.
          </p>
          <p className='hero-p'>
            <ScrollToLink href='#portfolio'>
              <em className='hero-emphasis'>Developing</em>
            </ScrollToLink>
            , designing, marketing, and crafting exceptional products, to name a few, are merely tools – means to an end.
          </p>
          <p className='hero-p'>
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
        </div>
      </article>
      {/* <div aria-hidden={true} className='hero-decor'></div> */}
    </section>
  );
}
