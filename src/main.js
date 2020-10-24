import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './utils/components.js'
import './assets/css/global.css'
import VueTypedJs from 'vue-typed-js'
import VueLazyload from 'vue-lazyload'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import animate from "animate.css";

Vue.use(animate)

Vue.use(VueTypedJs)
// or with options 也可以直接在这里设置参数
Vue.use(VueLazyload, {
  // 预加载的宽高比
  preLoad: 1.3,
  // 图片加载失败时使用的图片源
  error: 'http://img01.taopic.com/160312/267851-16031210562321.jpg',
  // 图片加载的路径
  loading: 'http://img01.taopic.com/160312/267851-16031210562321.jpg',
  // 尝试加载次数
  attempt: 1
})

Vue.use(VueAwesomeSwiper /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
