
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-zinc-50 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* Form / Contact Details */}
          <div className="p-8 md:p-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Vamos conversar?</span>
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-8 tracking-tight">Entre em Contato</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-5">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Telefone / WhatsApp</h4>
                  <p className="text-zinc-500">(11) 90000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">E-mail</h4>
                  <p className="text-zinc-500">contato@bikeprostore.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Horário de Atendimento</h4>
                  <p className="text-zinc-500">Seg a Sex: 09h - 19h | Sáb: 09h - 14h</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5511900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white py-5 rounded-2xl text-lg font-bold transition-all shadow-lg hover:shadow-emerald-500/20"
            >
              <MessageCircle className="w-6 h-6" /> Chamar no WhatsApp
            </a>
          </div>

          {/* Map / Decorative Part */}
          <div className="relative h-full min-h-[400px]">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1974751415!2d-46.65882422369688!3d-23.561349161271172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da1737f7%3A0x6769e6b36e86488a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1709424368532!5m2!1spt-BR!2sbr" 
                className="w-full h-full grayscale border-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="absolute top-8 left-8 bg-zinc-900 text-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-zinc-800 backdrop-blur-md bg-opacity-90">
                <div className="bg-emerald-500 p-2.5 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                    <h5 className="font-bold text-sm">Visite nossa loja</h5>
                    <p className="text-xs text-zinc-400">São Paulo, SP - Av. Paulista</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
