import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import ('@/view/view-login')
const Home = () => import ('@/view/view-home')
const ArticlesDetail = () => import ('@/view/view-articles-detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticlesDetail
    }
  ]
})
