import Vue from 'vue'
import Router from 'vue-router'
import Collect from '../components/Collect.vue'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import User from '../components/User.vue'
import Detail from '../components/Detail.vue'
import Type from '../components/Type.vue'

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
      path : '/list/:novelId',
      component : List,
      name : 'list',
    },
    {
      path : '/detail/:novelId/:chapterId',
      component : Detail,
      name : 'detail'
    },
    {
      path : '/user',
      component : User
    },
    {
      path : '/type/:classId',
      component : Type,
      name : 'type'
    },
    {
      path : '*',
      redirect : '/home'
    }
  ]
})
