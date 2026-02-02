
import React from 'react';
import { Bike, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-zinc-900">
          
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-emerald-500 p-1.5 rounded-lg">
                <Bike className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">
                BIKEPRO<span className="text-emerald-500">STORE</span>
              </span>
            </a>
            <p className="text-zinc-500 leading-relaxed">
              Performance, liberdade e segurança para o seu pedal. A loja de quem respira bicicleta em São Paulo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 transition-colors group">
                <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 transition-colors group">
                <Facebook className="w-5 h-5 text-zinc-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 transition-colors group">
                <Youtube className="w-5 h-5 text-zinc-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-emerald-500 transition-colors group">
                <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-500 hover:text-emerald-500 transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-zinc-500 hover:text-emerald-500 transition-colors">Quem Somos</a></li>
              <li><a href="#bicicletas" className="text-zinc-500 hover:text-emerald-500 transition-colors">Nossas Bicicletas</a></li>
              <li><a href="#servicos" className="text-zinc-500 hover:text-emerald-500 transition-colors">Serviços</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Atendimento</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>Segunda a Sexta: 09:00 - 19:00</li>
              <li>Sábado: 09:00 - 14:00</li>
              <li>Domingo: Fechado</li>
              <li>Feriados: Sob consulta</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-500 mb-6 text-sm">Inscreva-se para receber novidades e promoções exclusivas.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors">OK</button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm text-center md:text-left">
            &copy; {currentYear} BikePro Store. Todos os direitos reservados. Projeto fictício desenvolvido para portfólio.
          </p>
          <div className="flex gap-8 text-zinc-600 text-sm">
            <a href="#" className="hover:text-zinc-400">Política de Privacidade</a>
            <a href="#" className="hover:text-zinc-400">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
