
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoneyTransfer from './components/MoneyTransfer';
import Market from './components/Market';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Trust Section */}
        <section className="bg-orange-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm opacity-80">Años de Servicio</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">20k+</p>
                <p className="text-sm opacity-80">Clientes Felices</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-sm opacity-80">Seguro y Legal</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-1">50+</p>
                <p className="text-sm opacity-80">Destinos Globales</p>
              </div>
            </div>
          </div>
        </section>

        <MoneyTransfer />
        <Market />
        <Services />

        {/* Testimonials or Vision */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-900 rounded-3xl p-12 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-display font-bold text-white mb-6 italic">
                  "No somos solo un negocio, somos parte de tu historia. Entendemos el valor de cada moneda enviada y de cada sabor que te recuerda a tu hogar."
                </h3>
                <p className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                  Compromiso Mundo Latino
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
