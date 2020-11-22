import { AuthenticationResult } from '@feathersjs/authentication';

export interface APIUser {
  admin: boolean;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface APIProduct {
  _id: string;
  unit: string;
  title: string;
  description: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface APIListResponse<T> {
  total: number;
  limit: number;
  skip: number;
  data: T[];
}

export interface APIError extends Error {
  code?: number;
}

export interface APIService {
  authenticate(email: string, password: string): Promise<AuthenticationResult>;
  register(email: string, password: string): Promise<APIUser>;
  logout(): Promise<void>;
  getProducts(skip?: number): Promise<APIListResponse<APIProduct>>;
}
