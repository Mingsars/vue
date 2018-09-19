<template>
  <div id="app">
    <router-view></router-view>
    <Nav v-show="isShow"></Nav>
  </div>
</template>

<script>
import Nav from './base/Nav.vue'

export default {
  name: 'App',
  components: {Nav},
  watch : {
    $route(){
      if(this.$route.path.indexOf('/detail')!= -1){
        this.isShow = false;
      }
    }
  },
  data() {
    return {
      isShow : true
    }  
  }
}
</script>

<style>
*{margin: 0;padding: 0;}
ul,li{list-style: none;}
a{text-decoration: none;color: #313131;}
.container{
  width: 95%;
  margin: 0 auto;
}
img{width: 100%;}
input{border: none;outline: none;}
body,html{
  height: 100%;
}
#app{
  height: 100%;
}
</style>
