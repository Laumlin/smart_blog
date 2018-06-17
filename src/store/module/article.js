import http from '@/api'

export default {
  state: {
    articles: [],
    article_current: {}
  },
  mutations: {
    setArticles (state, articles) {
      state.articles = articles
    },
    addArticles (state, articles) {
      state.articles.push(articles)
    },
    setArticle (state, article) {
      state.article_current = article
    }
  },
  actions: {
    getArticles ({state, commit}, query) {
      // return http.get('https://test.com/articles', {
      //   page: query.page
      // })
      return http.get('http://172.18.5.196:8080/Smart_Blog/login')
    },
    getArticle ({state, commit}, params) {
      // return http.get('https://test.com/article/', {
      //   id: params.id
      // })
      return http.get('https://test.com/article')
    }
  }
}
