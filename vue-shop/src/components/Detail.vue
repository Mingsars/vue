<template>
    <div class="detail">
        <div class="detail-head">
            <span class="back"><i class="iconfont icon-fanhui"></i></span>
            <p class="detail-title">
                商品
            </p>
        </div>
        <div class="detailimg">
            <img src="https://m.360buyimg.com/mobilecms/s750x750_jfs/t26098/84/777424326/521562/bf1653e/5b7bba0dNa5115c33.jpg!q80.dpg.webp" alt="">
        </div>
        <div class="detail-intro">
            <span class="detail-intro-left detail-span">
                <span class="tag">自营</span>
                华为 HUAWEI P20  AI智慧全面屏 6GB +64GB 极光闪蝶色 全网通版 移动联通电信4G手机 双卡双待
            </span>
            <span class="detail-intro-right detail-span">
                <i class="iconfont icon-like"></i>
                <p>关注</p>
            </span>   
        </div>
        <div class="detail-price">
            {{price | money}}
        </div>
        <div class="buttons">
            <span>加入购物车</span>
            <span>立即购买</span>
        </div>
    </div>
</template>
<script>
export default {
    filters:{
        money(val){
            return '￥' + val;
        }
    },
    data(){
        return{
            price : 3388
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

