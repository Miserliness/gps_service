import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '../views/Map/index.vue'
import Auth from '../views/Auth/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Map
  },
  {
    path: '/auth',
    component: Auth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
