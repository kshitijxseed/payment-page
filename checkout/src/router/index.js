import Vue from 'vue'
import VueRouter from 'vue-router'
import Success from '../views/success.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/success',
    name: 'Success',
    component:Success
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
