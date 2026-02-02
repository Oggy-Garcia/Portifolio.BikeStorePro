import React from 'react';
import { Settings, RefreshCw, Ruler, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading.tsx';
import { Service } from '../types.ts';

const services: Service[] = [
  {
    title: 'Revisão Pro',
    description: 'Desmontagem completa, limpeza por ultrassom, lubrificação premium e ajuste fino de todos os componentes.',
    icon: <Settings className="w-7 h-7" />
  },
  {
    title: 'Check-up Expresso',
    description: 'Inspeção rigorosa de 32 pontos para garantir segurança total no seu próximo pedal ou competição.',
    icon: <RefreshCw className="w-7 h-7" />
  },
  {
    title: 'Bike Fit Avançado',
    description: 'Otimização biomecânica laser para maximizar sua transferência de potência e eliminar dores articulares.',
    icon: <Ruler className="w-7 h-7" />
  },
  {
    title: 'Custom Upgrades',
    description: 'Troca de grupos eletrônicos, rodas de carbono e tuning de suspensão para transformar sua bike.',
    icon: <Zap className="w-7 h-7" />
  }
];

const Services: React.FC = () => {
  const whatsappNumber = '5511900000000';
  const scheduleMessage = encodeURIComponent('Olá! Gostaria de agendar uma revisão/serviço para minha bicicleta.');

  return (
    <section id="servicos" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading 
          badge="Oficina"
          title="Oficina Especializada"
          description="Nossa oficina conta com ferramentas park tool de última geração e mecânicos apaixonados que tratam cada bike como uma obra de arte."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-[40px] bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="bg-zinc-800 p-5 rounded-2xl w-fit mb-8 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-500 transform group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-black mb-4 tracking-tight">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-1 rounded-[40px] bg-gradient-to-r from-emerald-500/50 to-transparent">
          <div className="bg-zinc-900 rounded-[39px] p-8 md:p-12 md:flex items-center justify-between gap-12">
            <div className="mb-8 md:mb-0">
              <h4 className="text-2xl font-black mb-3 tracking-tight">Sua bike merece o melhor.</h4>
              <p className="text-zinc-400 text-lg">Garantia vitalícia em todos os serviços de ajuste fino e 90 dias em revisões completas.</p>
            </div>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${scheduleMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-10 py-5 rounded-2xl font-black transition-all active:scale-95 shadow-xl shadow-emerald-500/20"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;