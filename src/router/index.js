import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Pokedex from '../views/Pokedex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/pokedex/:pokeSearch?',
    name: 'Pokedex',
    component: Pokedex
  },
]

const router = new VueRouter({
  routes
})

export default router
