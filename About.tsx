import React from 'react';
import { ShieldCheck, Wrench, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative group">
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.2)] aspect-square lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=2070&auto=format&fit=crop"
                alt="Interior da nossa oficina premium"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-emerald-500/10 -z-0 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all"></div>
            
            <div className="absolute -bottom-6 -left-6 p-8 bg-zinc-950 text-white rounded-3xl shadow-2xl z-20 border border-zinc-800">
              <div className="flex items-center gap-4 mb-2">
                 <Award className="w-10 h-10 text-emerald-500" />
                 <span className="text-5xl font-black text-emerald-500">12+</span>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-bold">Anos de Liderança</p>
              <p className="text-xs text-zinc-500 mt-1 font-medium">Referência técnica no Brasil</p>
            </div>
          </div>

          <div className="lg:pl-10">
            <span className="inline-block font-bold tracking-[0.3em] uppercase text-xs mb-6 text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-500/10">
              Nossa Herança
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-zinc-900 mb-8 tracking-tighter text-balance leading-[0.95]">
              Onde o Cuidado <br />
              Encontra a <span className="text-emerald-500 italic">Alta Engenharia.</span>
            </h2>
            <p className="text-xl text-zinc-500 leading-relaxed mb-10 font-light">
              Na BikePro Store, não vendemos apenas bicicletas. Nós curamos máquinas de performance e oferecemos suporte técnico de nível Pro Tour para ciclistas que exigem o máximo de seus equipamentos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col gap-4">
                <div className="bg-emerald-50 p-3 rounded-2xl w-fit text-emerald-600 border border-emerald-500/10">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 text-lg tracking-tight mb-2">Qualidade sem Compromisso</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">Representantes oficiais das maiores marcas do mundo.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-emerald-50 p-3 rounded-2xl w-fit text-emerald-600 border border-emerald-500/10">
                  <Wrench className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 text-lg tracking-tight mb-2">Engenharia de Precisão</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">Processos de montagem e ajuste inspirados na F1.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-50 rounded-[32px] border border-zinc-100 flex items-center gap-6 group hover:border-emerald-500/30 transition-all">
              <div className="bg-zinc-950 p-4 rounded-2xl text-white group-hover:bg-emerald-500 transition-all group-hover:text-zinc-950">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-1">Nosso Endereço Premium</p>
                <p className="font-black text-zinc-900 text-lg tracking-tight">Avenida Paulista, 1000 — Jardins, SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;