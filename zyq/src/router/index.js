import Vue from 'vue'
import Router from 'vue-router'
import Collect from '../components/Collect.vue'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'
import User from '../components/User.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      redirect : '/home'
    },
    {
      path : '/collect',
      component : Collect
    },
    {
      path : '/home',
      component : Home
    },
    {
      path : '/detail/:bookId',
      component : Detail,
      name : 'detail',
      children : [
        {
          path : '/detail/:bookId/:pageId'
        }
      ]
    },
    {
      path : '/user',
      component : User
    },
    {
      path : '*',
      redirect : '/home'
    }
  ]
})
