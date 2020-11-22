export interface User {
  admin: boolean;
  email: string;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  amount: number;
  unit: string;
  createdAt: string;
  updatedAt: string;
}

export interface Operation {
  _id: string;
  description: string;
  createdBy: string;
  products: Product[];
  intoStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  content: string;
  status?: 'success' | 'error' | 'info';
}
