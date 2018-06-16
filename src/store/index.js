import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './module/user'
import article from './module/article'

Vue.use(Vuex)

const modules = {
  user
}
const initialStateJson = JSON.stringify(new Vuex.Store({
  modules
}).state)
const store = new Vuex.Store({
  modules,
  plugins: [createPersistedState()],
  mutations: {
    resetStore () {
      store.replaceState(JSON.parse(initialStateJson))
    }
  }
})
export default store
