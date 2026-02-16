
import React from 'react';
import { PRODUCTS } from '../constants';

const Market: React.FC = () => {
  return (
    <section id="productos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-orange-600 font-bold text-lg mb-2">Nuestro Mercado Latino</h2>
        <h3 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Los Sabores de Nuestra Tierra
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Desde quesos frescos hasta productos congelados y cosméticos por catálogo. 
          Todo lo que extrañas de casa está aquí.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
                <span className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {product.category}
                </span>
              </div>
              <div className="p-6 flex-grow">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full border-2 border-orange-600 text-orange-600 py-2 rounded-lg font-bold hover:bg-orange-600 hover:text-white transition">
                  Consultar Disponibilidad
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;
