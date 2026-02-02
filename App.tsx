import React from 'react';
import Navbar from 'navbar.tsx';
import Hero from 'Hero.tsx';
import About from 'About.tsx';
import Products from 'Products.tsx';
import Services from 'Services.tsx';
import Testimonials from 'Testimonials.tsx';
import Contact from 'Contact.tsx';
import Footer from 'Footer.tsx';
import Stats from 'Stats.tsx';
import Brands from 'Brands.tsx';

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
