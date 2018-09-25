<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
