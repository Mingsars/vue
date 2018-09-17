<template>
    <div class="detail">
        <div class="detail-head">
            <span class="back" @click="back"><i class="iconfont icon-fanhui"></i></span>
            <p class="detail-title">
                商品
            </p>
        </div>
        <div class="detailimg">
            <img :src="productMsg.imgUrl">
        </div>
        <div class="detail-intro">
            <span class="detail-intro-left detail-span">
                <span class="tag">{{productMsg.tag}}</span>
                {{productMsg.intro}}
            </span>
            <span class="detail-intro-right detail-span">
                <i class="iconfont icon-like"></i>
                <p>关注</p>
            </span>   
        </div>
        <div class="detail-price">
            {{productMsg.curPrice | money}}
        </div>
        <div class="buttons">
            <span @click="addToShop">加入购物车</span>
            <span>立即购买</span>
        </div>
    </div>
</template>
<script>
import {getAllProducts,addShop} from '../api'
export default {
    filters:{
        money(val){
            return '￥' + val;
        }
    },
    created() {
        this.productId = (+this.$route.params.num);
        this.getAllProduct();   
    },
    data(){
        return{
            productId : 0,
            productMsg : ''
        }
    },
    methods : {
        async getAllProduct(){
            var newData = '';
            newData = await getAllProducts();
            this.productMsg = newData[this.productId - 1];     
        },
        back(){
            this.$router.go(-1);
        },
        async addToShop(){
            await addShop(JSON.stringify(this.productMsg));
        }
    },
    watch : {
        $route(){
            this.productId = this.$route.params.ProductId;
        }
    }
}
</script>

<style scoped>
    .detail{
        background: #fff;
        height: 100%;
    }
    .detail-head{
        position: relative;
        border-bottom: 1px solid #ccc;
        box-shadow: 0 0 5px #eee;
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
    .detail-intro{
        font-size: 0;
        position: relative;
        padding-left: 2%;
    }
    .detail-intro .detail-span{
        display: inline-block;
    }
    .detail-intro-left{
        width: 88%;
        font-size: 16px;
        line-height: 1.3;
    }
    .detail-intro-right{
        width: 10%;
        position: absolute;
        top: 0;
        right: 0;
        text-align: center;
        box-sizing: border-box;
        border-left: 1px solid #ccc;
    }
    .detail-intro-right i{
        font-size: 26px;
    }
    .detail-intro-right p{
        font-size: 14px;
    }
    .tag{
        padding: 0 3px;
        background: #f23030;
        color: #fff;
        font-size: 12px;
        border-radius: 5px;
    }
    .detail-price{
        color: #f23030;
        padding: 8px 0;
        padding-left: 2%;
    }
    .buttons{
        position: fixed;
        left: 0;bottom: 0;
        display: flex;
        height: 50px;
        width: 100%;
    }
    .buttons span{
        flex: 1;
        text-align: center;
        line-height: 50px;
        color: #fff;
    }
    .buttons span:first-child{
        background: #ff9600;
    }
    .buttons span:last-child{
        background: #e4393c;
    }
</style>

