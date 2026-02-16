
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h4 className="text-3xl font-display font-bold text-orange-500 mb-6">Mundo Latino</h4>
            <p className="text-gray-400 max-w-sm mb-8">
              Llevamos más de una década siendo el punto de encuentro de la comunidad latina. 
              Seguridad, confianza y sabor en un solo lugar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition">Facebook</a>
              <a href="#" className="hover:text-orange-500 transition">Instagram</a>
              <a href="#" className="hover:text-orange-500 transition">WhatsApp</a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6">Enlaces Rápidos</h5>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#envios" className="hover:text-white transition">Envíos de Dinero</a></li>
              <li><a href="#productos" className="hover:text-white transition">Mercado Latino</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Servicios Digitales</a></li>
              <li><a href="#" className="hover:text-white transition">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6">Visítanos</h5>
            <ul className="space-y-4 text-gray-400">
              <li>Calle de la Tradición, 123</li>
              <li>Madrid, España</li>
              <li>Lunes - Sábado: 10:00 - 21:00</li>
              <li>Domingos: 11:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Mundo Latino. Todos los derechos reservados. | Tu conexión con casa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
