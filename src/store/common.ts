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

export type OperationProduct = Pick<Product, 'title' | 'description' | 'amount' | 'unit'>;

export interface Operation {
  _id: string;
  description: string;
  createdBy: string;
  products: OperationProduct[];
  intoStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  content: string;
  status?: 'success' | 'error' | 'info';
}
