<template>
    <div class="nav">
        <router-link to="/home"><i class="iconfont icon-home"></i>首页</router-link>
        <router-link to="/list"><i class="iconfont icon-liebiao"></i>分类</router-link>
        <router-link to="/shop"><i class="iconfont icon-gouwuche2"></i>购物车</router-link>
        <router-link to="/user"><i class="iconfont icon-wo"></i>我的</router-link>
    </div>
</template>

<style scoped>
    .nav{
        position: fixed;
        left: 0;bottom: 0;
        width: 100%;height: 60px;
        background: #fff;
        box-shadow: 0 0 5px #ccc;
        display: flex;
    }
    .nav a{
        flex: 1;height: 60px;
        text-align: center;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .nav i{
        font-size: 24px;
    }
    .router-link-exact-active{
        color: #f23030;
    }
</style>
