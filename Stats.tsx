
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Bikes Entregues', value: '+5.000' },
    { label: 'Anos de Estrada', value: '12+' },
    { label: 'Clientes Satisfeitos', value: '100%' },
    { label: 'Mecânicos Certificados', value: '08' },
  ];

  return (
    <section className="py-16 bg-zinc-950 text-white border-y border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-emerald-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
