import { MutationTree } from 'vuex';
import { State } from './state';

export enum MutationTypes {
  SET_USER = 'SET_USER',
  SET_MESSAGE = 'SET_MESSAGE',
  SET_LOADING = 'SET_LOADING',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: { email: string; admin: boolean }): void;
  [MutationTypes.SET_MESSAGE](state: S, payload: State['message']): void;
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void;
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
};
