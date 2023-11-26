
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Portfolio';
import Resume from './components/Resume';

export default function Home() {
  return (
    <main id='top'>
      <Hero />
      <Resume />
      <Projects />
      <About />
    </main>
  );
}
