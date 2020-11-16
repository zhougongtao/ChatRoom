import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatRoom.vue' )
  }
]

const router = new VueRouter({
  routes
})

export default router
