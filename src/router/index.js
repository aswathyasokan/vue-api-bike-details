import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import product from '@/components/product'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
   
    {
      path: '/product',
      name: 'product',
      component: product
    }    
  ]
})