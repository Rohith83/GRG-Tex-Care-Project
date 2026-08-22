import { useRef } from 'react';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustedCompaniesMarquee from './components/TrustedCompaniesMarquee.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Machinery from './components/Machinery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const machineryRef = useRef(null);

  const handleExplore = () => {
    machineryRef.current?.expandAndScroll();
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-cream">
      <Header />

      <main className="w-full">
        <Hero onExplore={handleExplore} />

        <TrustedCompaniesMarquee />

        <About />

        <Services />

        <Machinery ref={machineryRef} />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}