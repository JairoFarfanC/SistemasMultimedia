
import { Product, Service, Partner } from './types';

export const PARTNERS: Partner[] = [
  { name: 'Western Union', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Western_Union_logo.svg/2560px-Western_Union_logo.svg.png' },
  { name: 'RIA Money Transfer', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ria_Money_Transfer_logo.svg/1200px-Ria_Money_Transfer_logo.svg.png' },
  { name: 'MoneyGram', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/MoneyGram_Logo.svg/1280px-MoneyGram_Logo.svg.png' }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Queso Fresco Latino',
    category: 'Fresco',
    description: 'El auténtico sabor de casa, ideal para acompañar tus arepas o desayunos.',
    image: 'https://picsum.photos/seed/cheese/400/300'
  },
  {
    id: '2',
    name: 'Chorizos Artesanales',
    category: 'Congelados',
    description: 'Selección premium de embutidos tradicionales con el sazón original.',
    image: 'https://picsum.photos/seed/sausage/400/300'
  },
  {
    id: '3',
    name: 'Hojas de Plátano',
    category: 'Congelados',
    description: 'Esenciales para tus tamales, hallacas o envueltos.',
    image: 'https://picsum.photos/seed/leaves/400/300'
  },
  {
    id: '4',
    name: 'Salsas Tradicionales',
    category: 'Comida',
    description: 'Picantes, de ajo, y chimichurris que realzan cada bocado.',
    image: 'https://picsum.photos/seed/sauce/400/300'
  },
  {
    id: '5',
    name: 'Cosméticos de Catálogo',
    category: 'Cosméticos',
    description: 'Tus marcas favoritas de Latinoamérica ahora a tu alcance.',
    image: 'https://picsum.photos/seed/makeup/400/300'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'remesas',
    title: 'Envíos de Dinero',
    description: 'Seguridad garantizada hacia todos los países de Latinoamérica y bancos nacionales.',
    icon: '💸',
    highlights: ['RIA', 'Western Union', 'MoneyGram']
  },
  {
    id: 'recargas',
    title: 'Recargas Móviles',
    description: 'Recarga saldo a cualquier operador nacional o internacional de forma instantánea.',
    icon: '📱'
  },
  {
    id: 'impresiones',
    title: 'Impresiones y Copias',
    description: 'Servicio rápido de impresión en blanco y negro para tus documentos importantes.',
    icon: '🖨️'
  },
  {
    id: 'catalogos',
    title: 'Venta por Catálogo',
    description: 'Acceso exclusivo a cosméticos y productos de belleza latinoamericanos.',
    icon: '💄'
  }
];
