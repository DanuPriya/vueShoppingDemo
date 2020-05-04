import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    component: Login,
    name: 'login'

  }
  , {
    path: 'home',
    component: Home,
    name: 'home'

  },
  {
    path: '/product/:id',
    component: Product,
    name: 'product',
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
