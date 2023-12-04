import portfolioData from '@/json/portfolioData.json';
import PortfolioCard from './PortfolioCard';
type Props = {};

export default function Portfolio({}: Props) {
  const data = portfolioData.data; // extracts the portfolio's objects array 'data'
  return (
    <section id='portfolio' className='section'>
      <h3 className='section-title fade-in'>Portfolio</h3>
      <div className='portfolio-cards-container'>
        {data.map((point, i) => {
          return <PortfolioCard key={i} point={point} />;
        })}
      </div>
    </section>
  );
}
