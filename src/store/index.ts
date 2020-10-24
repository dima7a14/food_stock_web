import { createStore, createLogger } from 'vuex';

export default createStore({
  plugins: [
    createLogger(),
  ],
  state: {
    user: {
      admin: false,
      email: '',
    },
  },
  getters: {
    userEmail: (state) => state.user.email,
    isAdmin: (state) => state.user.admin,
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  },
});
