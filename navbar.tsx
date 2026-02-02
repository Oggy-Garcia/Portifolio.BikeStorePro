import React, { useState, useEffect } from 'react';
import { Bike } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-zinc-950/95 backdrop-blur-xl py-4 border-b border-zinc-800/50 shadow-2xl' 
        : 'bg-transparent py-6 border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center md:justify-start items-center">
          {/* Logo & Nome */}
          <a 
            href="#home" 
            onClick={scrollToTop}
            className="flex items-center gap-3 group site-logo"
            aria-label="Voltar ao início"
          >
            <div className="bg-emerald-500 p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
              <Bike className="text-white w-6 h-6" aria-hidden="true" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white site-logo-text" aria-hidden="true">
              BIKEPRO<span className="text-emerald-500">STORE</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;