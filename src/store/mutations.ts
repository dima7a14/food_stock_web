import { State } from './state';

export enum MutationTypes {
  SET_USER = 'SET_USER',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, payload: { email: string; admin: boolean }): void;
}

export const mutations: Mutations<State> = {
  [MutationTypes.SET_USER](state, payload) {
    state.user = payload;
  },
};
