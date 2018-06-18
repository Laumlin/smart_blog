import http from '@/api'

export default {
  state: {
    user_current: {},
    user: {}
  },
  mutations: {
    setUserCurrent (state, user) {
      state.user_current = user
    },
    setUser (state, user) {
      state.user = user
    },
    loginout (state, user) {
      state.user_current = {}
    }
  },
  actions: {
    login ({state, commit}, data) {
      // return http.post('http://172.18.5.196:8080/Smart_Blog/login/', data)
      return http.post('https://test.com/login')
    }
  }
}
