import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import ('@/view/view-login')
const Home = () => import ('@/view/view-home')
const Article = () => import ('@/view/view-article')
const Edit = () => import ('@/view/view-edit')
const Send = () => import ('@/view/view-send')
const SendMail = () => import ('@/components/send-mail')
const SendGithub = () => import ('@/components/send-github')

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
    },
    {
      path: '/send',
      name: 'send',
      component: Send,
      redirect: {name: 'send-mail'},
      children: [
        {
          path: '/mail',
          name: 'send-mail',
          component: SendMail
        }, {
          path: '/github',
          name: 'send-github',
          component: SendGithub
        }
      ]
    }
  ]
})
