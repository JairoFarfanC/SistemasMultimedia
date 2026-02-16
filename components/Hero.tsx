
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/latinstore/1920/1080" 
          alt="Latin Market Background" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-4">
            Más de 10 años conectando familias
          </h2>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Seguridad y Tradición <br /> 
            <span className="text-orange-500">en cada envío.</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Expertos en envíos de dinero y el mercado líder en productos latinoamericanos. 
            Tu hogar lejos de casa, con la garantía y confianza que mereces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#envios" className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-700 transition text-center">
              Enviar Dinero Ahora
            </a>
            <a href="#productos" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition text-center">
              Ver Productos Latinos
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
