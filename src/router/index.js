import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sidebar from '../views/layouts/Sidebar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, sidebar: Sidebar},
  }
]

const router = new VueRouter({
  routes
})

export default router
