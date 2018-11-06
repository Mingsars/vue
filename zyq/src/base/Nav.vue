<template>
    <div class="nav">
        <router-link to="/collect"><i class="iconfont icon-collect"></i><p>收藏</p> </router-link>
        <router-link to="/home"><i class="iconfont icon-home1"></i>书城</router-link>
        <router-link to="/user"><i class="iconfont icon-user"></i>我的</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flag : 1
        }
    }
}
</script>

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
        /* line-height: 60px; */
        font-size: 18px;
        display: flex;
        flex-direction: column;
        align-content: space-around;
    }
    .nav a i{
        font-size: 22px;
        margin-top: 5px;
    }
    .nav a:nth-child(2){
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .router-link-exact-active{
        color: #38c;
    }
</style>

