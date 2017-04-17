import Vue from 'vue';
import Vuex from 'vuex';

import controllers from './modules/controllers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    controllers,
  },
  strict: process.env.NODE_ENV !== 'production',
});
