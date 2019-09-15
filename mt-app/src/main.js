// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'

Vue.use(ElementUI)
Vue.config.productionTip = false
// 注册一个全局自定义指令 `v-focus`
Vue.directive('document-click', {
  // 当被绑定的元素插入到 DOM 中时……
  bind (el, binding, vnode) {
    console.log('...')
    document.addEventListener('click', binding.value, false)
  },
  inserted () {
    console.log('inserted')
  },
  update () {
    console.log('update')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
