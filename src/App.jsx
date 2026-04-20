import { useReveal } from './hooks/useReveal';
import { Navbar }       from './components/Navbar';
import { Hero }         from './components/Hero';
import { Services }     from './components/Services';
import { Integrations } from './components/Integrations';
import { Demos }        from './components/Demos';
import { About }        from './components/About';
import { Contact }      from './components/Contact';
import { Footer }       from './components/Footer';

export default function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Integrations />
      <Demos />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
