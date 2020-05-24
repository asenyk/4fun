import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../components/TodoList.vue'
import Login from '../components/Login.vue'
import Singup from '../components/Signup.vue'
import ForgotPassword from '../components/ForgotPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/singup',
    name: 'Singup',
    component: Singup
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
