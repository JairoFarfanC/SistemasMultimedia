
import React from 'react';
import { PARTNERS } from '../constants';

const MoneyTransfer: React.FC = () => {
  return (
    <section id="envios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-orange-600 font-bold text-lg mb-2">Transferencias Internacionales</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Tu dinero llega seguro, siempre a tiempo.
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Trabajamos con las principales remesadoras del mundo para asegurar que tu familia reciba el apoyo que necesita.
              Sin cabinas telefónicas, sin complicaciones: solo servicio profesional y humano.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Envíos a cuentas bancarias y pago en ventanilla.',
                'Transacciones 100% encriptadas y seguras.',
                'Atención personalizada con asesores expertos.',
                'Las mejores tasas de cambio del mercado.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-8 items-center grayscale opacity-70">
              {PARTNERS.map((p) => (
                <img key={p.name} src={p.logo} alt={p.name} className="h-10 object-contain" />
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-orange-100 rounded-2xl scale-95 group-hover:scale-100 transition duration-500"></div>
            <img
              src="https://picsum.photos/seed/trust/800/600"
              alt="Security and Trust"
              className="relative rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-600 text-white p-3 rounded-full">
                  <span className="text-2xl font-bold">10+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Años de</p>
                  <p className="text-sm text-gray-500">Experiencia Real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyTransfer;
