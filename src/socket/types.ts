import { AuthenticationResult } from '@feathersjs/authentication';

export interface APIUser {
  admin: boolean;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface APIError extends Error {
  code?: number;
}

export interface APIService {
  authenticate(email: string, password: string): Promise<AuthenticationResult>;
  register(email: string, password: string): Promise<APIUser>;
  logout(): Promise<void>;
}
