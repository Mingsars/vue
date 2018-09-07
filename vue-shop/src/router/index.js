import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Shop from '../components/Shop.vue'
import User from '../components/User.vue'
import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/home',
      component : Home
    },
    {
      path : '/list',
      component : List
    },
    {
      path : '/shop',
      component : Shop
    },
    {
      path : '/user',
      component : User
    },
    {
      path : '/detail',
      component : Detail
    }
  ]
})
