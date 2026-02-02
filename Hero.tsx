import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBikes = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('bicicletas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Imagem de fundo com zoom suave e overlay progressivo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532298229144-0ee0c57515ec?q=80&w=2071&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          alt="Bicicleta de performance"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Showroom em São Paulo - SP
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter text-balance">
            Performance e <br />
            <span className="text-emerald-500">Liberdade</span> sobre <br />
            Duas Rodas.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl leading-relaxed font-light">
            As melhores marcas do mundo e manutenção especializada para quem não aceita nada menos que a perfeição em cada pedalada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#bicicletas"
              onClick={scrollToBikes}
              className="group flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-10 py-5 rounded-2xl font-black transition-all transform active:scale-95 shadow-xl shadow-emerald-500/20"
            >
              Ver Bicicletas 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5511900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 px-10 py-5 rounded-2xl font-black backdrop-blur-md transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-emerald-500" /> Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;