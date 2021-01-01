import { MutationTree } from 'vuex';
import { State } from './state';
import { mergeItems } from './utils';
import { Product } from './common';

export enum MutationTypes {
  SET_USER = 'SET_USER',
  SET_MESSAGE = 'SET_MESSAGE',
  SET_LOADING = 'SET_LOADING',
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_OPERATIONS = 'GET_OPERATIONS',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: State['user']): void;
  [MutationTypes.SET_MESSAGE](state: S, payload: State['message']): void;
  [MutationTypes.SET_LOADING](state: S, payload: State['loading']): void;
  [MutationTypes.GET_PRODUCTS](state: S, payload: State['products']): void;
  [MutationTypes.GET_OPERATIONS](state: S, payload: State['operations']): void;
}

export const mutations: MutationTree<State> & Mutations<State> = {
  [MutationTypes.SET_USER](state, payload) {
    state.user = payload;
  },
  [MutationTypes.SET_MESSAGE](state, payload) {
    state.message = payload;
  },
  [MutationTypes.SET_LOADING](state, payload) {
    state.loading = payload;
  },
  [MutationTypes.GET_PRODUCTS](state, payload) {
    state.products = mergeItems(state.products, payload);
  },
  [MutationTypes.GET_OPERATIONS](state, payload) {
    state.operations = mergeItems(state.operations, payload);
  },
};
