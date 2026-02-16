
export interface Product {
  id: string;
  name: string;
  category: 'Comida' | 'Cosméticos' | 'Congelados' | 'Fresco';
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights?: string[];
}

export interface Partner {
  name: string;
  logo: string;
}
