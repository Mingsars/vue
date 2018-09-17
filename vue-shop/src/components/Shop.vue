<template>
    <div class="shop">
        <div class="detail-head">
            <span class="back" @click="back"><i class="iconfont icon-fanhui"></i></span>
            <p class="detail-title">
                商品
            </p>
        </div>
        <ul class="shop-box">
            <router-link :to="{name:'productDetail',params:{num : shop.id}}" tag='li' v-for="(shop,index) in shops" :key="index" class="shop-box-item">
                <div class="shop-img"><img :src="shop.imgUrl" alt=""></div>
                <div class="shop-msg">
                    <p class="shop-msg-title">{{shop.intro}}</p>
                    <span class="shop-msg-price">{{shop.curPrice | money}}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {allShop} from '../api'
export default {
    created() {
        this.getAllShop();
    },
    data(){
        return{
            shops : []
        }
    },
    methods:{
        async getAllShop(){
            this.shops = await allShop();
        },
        back(){
            this.$router.go(-1);
        },
    },
    filters:{
        money(val){
            return '￥' + val;
        }
    }
}
</script>
<style scoped>
    .shop-box-item{
        display: flex;
        background: #fff;
        margin-bottom: 5px;
    }
    .shop-img{
        width: 30%;
    }
    .shop-msg{
        width: 70%;
    }
    .detail{
        background: #fff;
        height: 100%;
    }
    .detail-head{
        position: relative;
        border-bottom: 1px solid #ccc;
        box-shadow: 0 0 5px #eee;
        background: #fff;
    }
    .back{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 2%;
    }
    .detail-title{
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        color: #f23030;
    }
    .shop-msg-title{
        margin-bottom: 10px;
    }
    .shop-msg-price{
        color: #f23030;
    }
</style>
