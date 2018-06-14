import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'

const Login = () => import ('@/view/view-login')
const ArticlesList = () => import ('@/view/view-articles-list') 
const ArticlesDetail = () => import ('@/view/view-articles-detail') 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/article',
      name: 'articles-list',
      component: ArticlesList
    },
    {
      path: '/article/:id',
      name: 'articles-detail',
      component: ArticlesDetail
    }
  ]
})
