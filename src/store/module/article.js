import http from '@/api'

export default {
  state: {
    articles: [],
    article_current: null
  },
  mutations: {
    setArticles (state, articles) {
      state.articles = articles
    },
    addArticles (state, articles) {
      state.articles = state.articles.concat(articles)
    },
    setArticle (state, article) {
      state.article_current = article
    },
    removeArticles (state) {
      state.articles = []
    },
    removeArticle (state) {
      state.article_current = null
    }
  },
  actions: {
    getArticles ({state, commit}, query) {
      return http.get('https://test.com/articles')
      // return http.get('http://172.18.5.196:8080/Smart_Blog/articles', {
      //   page: query.page
      // })
    },
    getArticle ({state, commit}, params) {
      return http.get('https://test.com/article')
      // return http.get('http://172.18.5.196:8080/Smart_Blog/article/', {
      //   id: params.id
      // })
    }
  }
}
