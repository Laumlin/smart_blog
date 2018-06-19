import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import ('@/view/view-login')
const Home = () => import ('@/view/view-home')
const Article = () => import ('@/view/view-article')
const Edit = () => import ('@/view/view-edit')

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
      component: Article
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit

    }
  ]
})
