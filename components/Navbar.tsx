
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-orange-600 font-display">Multitienda Gaby</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-orange-600 font-medium transition">Inicio</a>
            <a href="#envios" className="text-gray-700 hover:text-orange-600 font-medium transition">Envíos</a>
            <a href="#productos" className="text-gray-700 hover:text-orange-600 font-medium transition">Mercado</a>
            <a href="#servicios" className="text-gray-700 hover:text-orange-600 font-medium transition">Servicios</a>
            <a href="#contacto" className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition font-medium">Contactar</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-2">
          <a href="#inicio" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">Inicio</a>
          <a href="#envios" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">Envíos</a>
          <a href="#productos" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">Mercado</a>
          <a href="#servicios" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 rounded">Servicios</a>
          <a href="#contacto" className="block px-4 py-2 text-orange-600 font-bold">Contactar</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
