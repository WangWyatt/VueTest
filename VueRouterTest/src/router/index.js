import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Manager from '@/components/Manager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/list',
      name:'List',
      component:List
    },{
      path:'/manager',
      name:'Manager',
      component:Manager
    }
  ]
})
