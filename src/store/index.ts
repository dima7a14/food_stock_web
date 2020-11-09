import {
  createStore,
  createLogger,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex';
import VuexPersistence from 'vuex-persist';
import { State, state } from './state';
import { Getters, getters } from './getters';
import { Mutations, mutations } from './mutations';
import { Actions, actions } from './actions';

const vuexLocal = new VuexPersistence<State>({
  key: 'FOOD_STORAGE_DATA',
  storage: window.localStorage,
  reducer: ({ user }) => ({
    user,
  }),
});

export const store = createStore({
  plugins: [
    createLogger(),
    vuexLocal.plugin,
  ],
  state,
  getters,
  mutations,
  actions,
});

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  };
} & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
}

export function useStore() {
  return store as Store;
}
