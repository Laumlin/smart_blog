import http from '@/api'

export default {
  state: {
    user_current: {},
    user: {}
  },
  mutations: {
    setUser (state, user) {
      state.user_current = user
    },
    loginout (state, user) {
      state.user_current = {}
    }
  },
  actions: {
    login ({state, commit}, data) {
      return http.post('https://test.com/login', data)
    }
  }
}
