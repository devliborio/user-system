import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
