import Vue from 'vue'
import Router from 'vue-router'
import Principal from '../components/Principal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    },
    
  ],
  mode:'history'
 
})
