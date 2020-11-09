import {
  User,
  Product,
  Operation,
  Message,
} from './common';

export interface State {
  user: User;
  products: Product[];
  operations: Operation[];
  loading: boolean;
  message: Message;
}

export const state: State = {
  user: {
    admin: false,
    email: '',
  },
  products: [],
  operations: [],
  loading: false,
  message: {
    content: '',
  },
};
