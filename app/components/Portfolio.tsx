import portfolioData from '@/json/portfolioData.json';
import Image from 'next/image';
import PortfolioCard from './PortfolioCard';
type Props = {};

export default function Portfolio({}: Props) {
  const data = portfolioData.data;
  return (
    <section id='portfolio' className='section'>
      <h3 className='section-title'>Portfolio</h3>
      <div className='portfolio-cards-container'></div>
      {data.map((point, i) => {
        return <PortfolioCard key={i} point={point} />;
      })}
    </section>
  );
}
