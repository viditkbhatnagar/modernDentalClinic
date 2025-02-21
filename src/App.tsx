import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Carousel />
      <section id="services">
        <Services />
      </section>
      <section id="doctors">
        <Doctors />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;