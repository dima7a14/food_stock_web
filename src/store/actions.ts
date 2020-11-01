import { ActionTree, ActionContext } from 'vuex';
import { authenticate } from '@/socket';
import { State } from './state';
import { MutationTypes, Mutations } from './mutations';

export enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.SIGN_IN](
    { commit }: AugmentedActionContext,
    payload: { email: string; password: string },
  ): Promise<void>;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.SIGN_IN]({ commit }, payload: { email: string; password: string }) {
    const { user } = await authenticate(payload.email, payload.password);

    commit(MutationTypes.SET_USER, { email: user.email, admin: user.admin });
  },
};
