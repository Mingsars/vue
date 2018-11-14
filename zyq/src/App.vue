<template>
  <div id="app">
    <Nav v-if="this.$store.state.isNavShow"></Nav>
    <router-view/>
  </div>
</template>

<script>
import Nav from './base/Nav.vue'
export default {
  name: 'App',
  components : {Nav}
}
</script>

<style>
p,ul,ol,li,h1,h2,h3,h4,h5,h6,body,html{margin: 0;padding: 0;}
ul,ol,li{list-style: none;}
a{text-decoration: none;color: #000;}
img{width: 100%;vertical-align: top;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content{
  margin-top: 52px;
  margin-bottom: 64px;
}
.container{
  width: 95%;
  margin: 0 auto;
}
</style>
