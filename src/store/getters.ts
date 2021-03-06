import { GetterTree } from 'vuex';
import { Product, Operation, Message } from './common';
import { State } from './state';

export type Getters = {
  userEmail(state: State): string;
  isAdmin(state: State): boolean;
  isAuthenticated(state: State): boolean;
  products(state: State): Product[];
  operations(state: State): Operation[];
  message(state: State): Message;
  isLoading(state: State): boolean;
}

export const getters: GetterTree<State, State> & Getters = {
  userEmail: (state) => state.user.email,
  isAdmin: (state) => state.user.admin,
  isAuthenticated: (state) => !!state.user.email,
  products: (state) => state.products,
  operations: (state) => state.operations,
  message: (state) => state.message,
  isLoading: (state) => state.loading,
};
