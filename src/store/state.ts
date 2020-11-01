import { User, Product, Operation } from './common';

export interface State {
  user: User;
  products: Product[];
  operations: Operation[];
}

export const state: State = {
  user: {
    admin: false,
    email: '',
  },
  products: [],
  operations: [],
};
