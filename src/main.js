// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MavonEditor from 'mavon-editor'
import Notification from 'vue-notification'
import filter from '@/init/filter'
import './api'
import "@/mock/mock"
import hljs from 'highlight.js'

Vue.directive('highlight', (el) => {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

import '@/assets/css/default.css'
import '@/assets/css/index.css'
import '@/assets/css/github-markdown.css'
import '@/assets/iconfont/iconfont.css'
import 'highlight.js/styles/googlecode.css'
import 'mavon-editor/dist/css/index.css'

for (let key of Object.keys(filter)) {
  Vue.filter(key, filter[key])
}

Vue.config.productionTip = false
Vue.use(Notification)
Vue.use(MavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
