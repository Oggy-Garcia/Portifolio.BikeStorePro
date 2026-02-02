import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types.ts';

const testimonials: Testimonial[] = [
  {
    name: 'Ricardo Santos',
    comment: 'Atendimento nota 10! Levei minha bike para uma revisão completa e ela voltou parecendo nova. O pessoal entende muito de mecânica.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Juliana Oliveira',
    comment: 'Comprei minha primeira bike elétrica aqui. Me ajudaram a escolher o modelo ideal para o meu trajeto diário. Super satisfeita!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Marcos Lima',
    comment: 'Fiz o Bike Fit e a diferença no pedal foi absurda. Acabaram as dores nas costas e melhorei muito meu desempenho.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Feedback</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 tracking-tight">O que dizem nossos clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-200" />
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-300'}`} />
                ))}
              </div>
              <p className="text-zinc-600 mb-6 italic">"{testimonial.comment}"</p>
              <h4 className="font-bold text-zinc-900 text-lg">{testimonial.name}</h4>
              <span className="text-sm text-zinc-400 font-medium">Ciclista Entusiasta</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;