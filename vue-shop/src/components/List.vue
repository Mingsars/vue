<template>
    <div>
        <header>
            <span @click="back"><i class="iconfont icon-fanhui"></i></span>
            <form action="">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="搜索">
            </form>
        </header>
        <div class="content">
            <div class="content-body">
                <Aside :listItems="listItems"></Aside>
                <router-view></router-view>
            </div>  
        </div>  
        <Nav></Nav>
    </div>
</template>

<style scoped>
    header{
        height: 44px;
        border-bottom: 1px solid #ccc;
        background: #fff;
    }
    span{
        display: inline-block;
        width: 40px;height: 44px;
        text-align: center;
        line-height: 44px;
        font-weight: 600;
    }
    form{
        display: inline-block;
        width: 80%;
        position: relative;
    }
    form i{
        position: absolute;
        top: 50%;transform: translateY(-50%);
        left: 6%;
    }
    input{
        width: 80%;height: 30px;
        padding-left: 15%;
        background: #f7f7f7;
        border-radius: 15px;
        line-height: 30px;
    }
    .content{
        position: absolute;
        top: 44px;bottom: 60px;
        left: 0;right: 0;
        background: #fff;
    }
</style>

<script>
import Nav from '../base/Nav.vue'
import Aside from '../base/Aside.vue'
import {getListItems} from '../api'
export default {
    components : {Aside,Nav},
    created() {
        this.getListItem();
    },
    data(){
        return{
            listItems : ''
        }
    },
    methods : {
        async getListItem(){
            this.listItems = await getListItems();
        },
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

