import { ActionTree, ActionContext } from 'vuex';
import { api } from '@/socket';
import { APIError } from '@/socket/types';
import { State } from './state';
import { MutationTypes, Mutations } from './mutations';

export enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SIGN_OUT = 'SIGN_OUT',
  SHOW_MESSAGE = 'SHOW_MESSAGE',
}

const MESSAGE_DELAY = 2000;

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
  [ActionTypes.SIGN_UP](
    { commit }: AugmentedActionContext,
    payload: { email: string; password: string },
  ): Promise<void>;
  [ActionTypes.SIGN_OUT](
    { commit }: AugmentedActionContext,
  ): Promise<void>;
  [ActionTypes.SHOW_MESSAGE](
    { commit }: AugmentedActionContext,
    payload: Parameters<Mutations['SET_MESSAGE']>[1],
  ): void;
}

function showMessage(
  { commit }: AugmentedActionContext,
  payload: Parameters<Mutations['SET_MESSAGE']>[1],
): void {
  commit(MutationTypes.SET_MESSAGE, payload);

  setTimeout(() => {
    commit(MutationTypes.SET_MESSAGE, { content: '' });
  }, MESSAGE_DELAY);
}

function handleErrorFromAPI<E extends APIError>(err: E, context: AugmentedActionContext) {
  if (err.code && err.code >= 400) {
    context.commit(MutationTypes.SET_LOADING, false);
    showMessage(context, {
      content: err.message,
      status: 'error',
    });
  }
}

async function signIn(
  context: AugmentedActionContext,
  payload: { email: string; password: string },
): Promise<void> {
  const { commit } = context;

  commit(MutationTypes.SET_LOADING, true);

  try {
    const { user } = await api.authenticate(payload.email, payload.password);

    commit(MutationTypes.SET_USER, { email: user.email, admin: user.admin });
    commit(MutationTypes.SET_LOADING, false);
    showMessage(context, {
      content: 'Successfully authenticated!',
      status: 'success',
    });
  } catch (err) {
    handleErrorFromAPI(err, context);
  }
}

async function signUp(
  context: AugmentedActionContext,
  payload: { email: string; password: string },
): Promise<void> {
  const { commit } = context;

  commit(MutationTypes.SET_LOADING, true);

  try {
    const user = await api.register(payload.email, payload.password);

    commit(MutationTypes.SET_USER, { email: user.email, admin: user.admin });
    commit(MutationTypes.SET_LOADING, false);
    showMessage(context, {
      content: 'Successfully registered!',
      status: 'success',
    });
  } catch (err) {
    handleErrorFromAPI(err, context);
  }
}

async function signOut(context: AugmentedActionContext): Promise<void> {
  const { commit } = context;
  commit(MutationTypes.SET_LOADING, true);

  await api.logout();

  commit(MutationTypes.SET_LOADING, false);
  commit(MutationTypes.SET_USER, { email: '', admin: false });
  showMessage(context, { content: 'Logged out' });
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.SIGN_IN]: signIn,
  [ActionTypes.SIGN_UP]: signUp,
  [ActionTypes.SIGN_OUT]: signOut,
  [ActionTypes.SHOW_MESSAGE]: showMessage,
};
