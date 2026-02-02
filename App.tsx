import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Products from './components/Products.tsx';
import Services from './components/Services.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Stats from './components/Stats.tsx';
import Brands from './components/Brands.tsx';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-emerald-500 selection:text-white bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Products />
        <Services />
        <Brands />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;