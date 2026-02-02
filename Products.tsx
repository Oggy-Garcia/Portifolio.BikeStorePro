import React from 'react';
import SectionHeading from './SectionHeading.tsx';
import { Product } from '../types.ts';

const products: Product[] = [
  {
    id: '1',
    name: 'Mountain Bike Pro X',
    description: 'Quadro em carbono leve de alta performance, suspensão a ar RockShox e grupo Shimano Deore 12v.',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1948&auto=format&fit=crop',
    priceTag: 'R$ 14.500'
  },
  {
    id: '2',
    name: 'Bike Urbana City Ride',
    description: 'Design minimalista e eficiente para o caos urbano. Inclui paralamas, bagageiro e luzes integradas.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop',
    priceTag: 'R$ 4.200'
  },
  {
    id: '3',
    name: 'Bike Elétrica Volt E1',
    description: 'Motor central silencioso de 250W, bateria integrada de 500Wh e autonomia de até 80km.',
    image: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=2070&auto=format&fit=crop',
    priceTag: 'R$ 18.900'
  }
];

const Products: React.FC = () => {
  return (
    <section id="bicicletas" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          badge="Catálogo"
          title="Nossas Máquinas"
          description="Modelos premium selecionados a dedo para garantir que você tenha a melhor experiência possível sobre o selim."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col h-full bg-white rounded-[32px] overflow-hidden border border-zinc-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden bg-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg shadow-emerald-500/20">
                    Premium
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zinc-500 mb-8 leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>
                
                <div className="pt-8 border-t border-zinc-100 flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Preço Sugerido</span>
                    <span className="text-zinc-900 font-black text-xl tracking-tight">{product.priceTag}</span>
                  </div>
                  
                  <a 
                    href={`https://wa.me/5511900000000?text=Olá! Vi no site a ${product.name} e gostaria de saber mais.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-4 bg-zinc-950 text-white font-black rounded-2xl hover:bg-emerald-500 transition-all active:scale-95 shadow-xl hover:shadow-emerald-500/20"
                  >
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;