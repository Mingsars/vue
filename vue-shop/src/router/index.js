import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Shop from '../components/Shop.vue'
import User from '../components/User.vue'
import Detail from '../components/Detail.vue'
import ListItem from '../components/ListItem.vue'
import Regist from '../components/Regist.vue'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      redirect : 'home',
      component : Home
    },
    {
      path : '/home',
      component : Home
    },
    {
      path : '/list',
      component : List,
      children : [
        {
          path : '/list',
          redirect : '/list/listitem/1',
          component : ListItem
        },
        {
          path: 'listitem/:id',
          component : ListItem,
          name : 'listName'
        }
      ]
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
      path : '/detail/:num',
      component : Detail,
      name : 'productDetail'
    },
    {
      path : '/regist',
      component : Regist
    },
    {
      path : '/login',
      component : Login
    }
  ]
})
