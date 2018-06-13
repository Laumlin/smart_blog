import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import demo from './module/demo'

Vue.use(Vuex)

const modules = {
  demo
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
