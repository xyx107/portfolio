import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Ａrticle from '../views/Article'
import Images from '../views/Images'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Ａrticle',
    component: Ａrticle
  },
  {
    path: '/images',
    name: 'images',
    component: Images
  }
  // {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
