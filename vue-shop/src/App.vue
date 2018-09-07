<template>
  <div id="app">
    <router-view></router-view>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './base/Nav.vue'

export default {
  name: 'App',
  components: {Nav}
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
body{
  background: #eee;
}
img{width: 100%;}
</style>
