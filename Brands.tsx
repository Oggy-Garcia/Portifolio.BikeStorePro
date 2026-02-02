
import React from 'react';

const Brands: React.FC = () => {
  const brands = ["Shimano", "Specialized", "Scott", "Cannondale", "Trek", "Giant"];

  return (
    <section className="py-16 bg-white border-t border-zinc-100">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="text-zinc-400 font-bold tracking-widest uppercase text-xs mb-10 block">
          Marcas que você encontra aqui
        </span>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map(brand => (
            <span key={brand} className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tighter italic uppercase">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
