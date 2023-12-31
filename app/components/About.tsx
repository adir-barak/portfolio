import Link from 'next/link';
import Counter from './Counter';

type Props = {};

export default function About({}: Props) {
  return (
    <section id='about' className='section'>
      <h3 className='section-title fade-in'>About</h3>
      <div className='about-articles-container'>
        <article className='fade-from-left'>
          <h4 className='about-sub-title'>Let&apos;s. get. personal.</h4>
          <p className='about-p'>
            I&apos;m Adir.
            <br />
            Born on June 7th, 1998 - that gives you{' '}
            <span className='about-counter'>
              <Counter />
            </span>{' '}
            seconds to pick the perfect birthday gift – <em className='extra'>no pressure</em>.<br />
            I&apos;m the youngest of three but the first to go in the academic route, currently navigating the world of{' '}
            <em>Computer Science</em> as a student at The Hebrew University of Jerusalem.
          </p>
          <p className='about-p'>
            When I&apos;m not searching for bugs in my code, you&apos;ll find me either drumming or strumming the guitar because{' '}
            <em>music</em> is a huge passion of mine.
            <br />
            <em>Video games, constant learning, exercising, and quality time with my nephews</em> also rank high up on my
            &apos;Things I Enjoy&apos; list.
          </p>
          <p className='about-p'>
            I&apos;m also deeply intrigued by the realms of <em>business, philosophy, psychology, and science</em>.
            <br />I find myself thinking or learning about them almost everyday.
          </p>
        </article>
        <article className='fade-from-left'>
          <h5 className='about-recommendations-title'>My recommendations:</h5>
          <ul className='about-recommendations-list'>
            <li>
              <em>Music:</em> Greta Van Fleet, Dirty Honey, Roger Troutman.
            </li>
            <li>
              <em>TV Shows:</em> Boardwalk Empire, The Good Place, One Piece.
            </li>
            <li>
              <em>Movies:</em> Bullet Train, Life Is Beautiful, Papillon
              <span className='about-recommendations-note'>(1973)</span>.
            </li>
            <li>
              <em>Video Games:</em> Grim Dawn, Farcry 3, Dishonored.
            </li>
            <li>
              <em>Youtube Channels:</em> Ze Frank, Kurzgesagt <span className='about-recommendations-note'>(In a Nutshell)</span>,
              James Jani.
            </li>
            <li>
              <em>Books:</em>
              <ul>
                <li>
                  <em>Non-Fiction:</em> Anything by MJ DeMarco, The Right It{' '}
                  <span className='about-recommendations-note'>(Alberto Savoia)</span>, A Short History of Nearly Everything{' '}
                  <span className='about-recommendations-note'>(Bill Bryson)</span>, The Courage To Be Disliked{' '}
                  <span className='about-recommendations-note'>(Ichiro Kishimi , Fumitake Koga)</span>.
                </li>
                <li>
                  <em>Fiction:</em> Eragon <span className='about-recommendations-note'>(Christopher Paolini)</span>, 1984{' '}
                  <span className='about-recommendations-note'>(George Orwell)</span>, Frankenstein{' '}
                  <span className='about-recommendations-note'>(Mary Shelley)</span>.
                </li>
              </ul>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
