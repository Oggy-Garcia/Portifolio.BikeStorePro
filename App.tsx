import React from 'react';
import Navbar from './navbar';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Stats from './Stats';
import Brands from './Brands';

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
