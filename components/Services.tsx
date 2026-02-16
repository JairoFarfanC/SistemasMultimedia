
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold text-lg mb-2">Servicios Adicionales</h2>
          <h3 className="text-4xl font-display font-bold text-gray-900 mb-4">Más que un mercado</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition duration-300 inline-block">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
              {service.highlights && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.highlights.map(h => (
                    <span key={h} className="text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded">
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
