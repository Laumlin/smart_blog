import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './module/user'
import article from './module/article'

Vue.use(Vuex)

const modules = {
  user,
  article
}

const store = new Vuex.Store({
  modules,
  plugins: [createPersistedState()],
  mutations: {}
})
export default store
