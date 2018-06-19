import http from '@/api'

export default {
  state: {
    user_current: null,
    user: null
  },
  mutations: {
    setUserCurrent (state, user) {
      state.user_current = user
    },
    setUser (state, user) {
      state.user = user
    },
    loginout (state) {
      state.user = null
    }
  },
  actions: {
    login ({state, commit}, data) {
      return http.post('https://test.com/login')
      // return http.post('http://172.18.5.196:8080/Smart_Blog/login/', {
      //   username: data.username,
      //   password: data.password
      // })
    },
    loginout ({state}) {
      return http.post('https://test.com/loginout', {
        id: state.user.id
      })
    }
  }
}
