<template>
    <div class="nav">
        <router-link to="/collect">收藏</router-link>
        <router-link to="/home">书城</router-link>
        <router-link to="user">我的</router-link>
    </div>
</template>

<style scoped>
    .nav{
        display: flex;
        position: fixed;
        bottom: 0;left: 0;
        width: 100%;height: 60px;
        border-top: 1px solid #ccc;
        box-shadow: 0 0 5px #ccc;
    }
    .nav a{
        text-align: center;
        flex: 1;
        line-height: 60px;
        font-size: 18px;
    }
    .nav a:nth-child(2){
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .router-link-exact-active{
        color: #38c;
    }
</style>

