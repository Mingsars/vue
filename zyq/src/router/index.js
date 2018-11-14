import Vue from 'vue'
import Router from 'vue-router'
import Collect from '../components/Collect.vue'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import User from '../components/User.vue'
import Detail from '../components/Detail.vue'
import Type from '../components/Type.vue'
import store from '../store/index.js'
Vue.use(Router)
 
var route = new Router({
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

route.beforeEach(function(to,from,next){
  var path = to.path;
  //判断是否隐藏底部tab
  //需要隐藏的有：List,Detail
  if(path.indexOf('list') != -1 || path.indexOf('detail') != -1){
    store.commit('hideNavStatus');
  }else{
    store.commit('showNavStatus');
  }

  //判断是否显示顶部back按钮
  //需要显示的有：type,list,detail,
  if(path.indexOf('type') != -1 || path.indexOf('list') != -1 || path.indexOf('detail') != -1){
    store.commit('showBackStatus');
  }else{
    store.commit('hideBackStatus');
  }
  next();
})
export default route