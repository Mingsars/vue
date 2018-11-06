<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(slider,index) in sliders" :key="index"><img :src="slider" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    props:['sliders'],
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay : 3000,
          setWrapperSize :true,
          observeParents:true
        }
      } 
    }  
  }
</script>

<style scoped>
    img{width: 100%;}
</style>
