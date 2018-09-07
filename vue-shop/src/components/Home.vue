<template>
    <div class="content">
        <header>
            <router-link to="/list"><i class="iconfont icon-liebiao"></i></router-link>
            <form action="">
                <div class="search-box">
                    <span class="search-logo"><i class="iconfont icon-JD"></i></span>
                    <span class="search-btn"><i class="iconfont icon-sousuo"></i></span>
                    <input type="text" class="search-input" placeholder="满减领券">
                </div>
            </form>    
        </header>
        <Swiper :sliders="sliders"></Swiper>
        <div class="block block1">
            <div class="list-link">
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
                <router-link to="/list">超市<i class="iconfont icon-JD"></i></router-link>
            </div>
            <div class="hotNews">
                <span><i class="iconfont icon-JD"></i>:</span>
                <ul class="hotNews-box">
                    <li class="hotNews-box-item" v-for="(hotNew,index) in hotNews" :key="index"><router-link to="/detail"><i class="iconfont icon-JD"></i>&nbsp;&nbsp;{{hotNew}}</router-link></li>  
                </ul>
                <span>更多</span>
            </div>
            <Ads></Ads>
            <div class="seckill">
                <div class="seckill-title">
                    <span>秒杀专场</span>
                    <span>16点场</span>
                    <span><Seckill :hour="secKill.secKillTime"></Seckill></span>    
                </div> 
                <div class="seckill-content">
                    <ul class="seckill-content-box">
                        <li class="seckill-content-box-item" v-for="(secKillItem,index) in secKill.secKillItems" :key="index">
                            <a href="">
                                <img :src="secKillItem.imgUrl" alt="">
                                <p class="curPrice">{{secKillItem.curPrice | money}}</p>
                                <p class="prevPrice">{{secKillItem.prevPrice | money}}</p>
                            </a>
                        </li>
                    </ul>
                </div>   
            </div> 
            <ShopItem v-for="(item,index) in ShopItem" :key="index" :item="item"></ShopItem>    
        </div> 
    </div>
</template>

<style scoped>
    .content{
        position: relative;
    }
    .block{
        background: #fff;
        padding: 10px 0 60px;
    }
    .content header{
        position: absolute;
        top:0;left: 0;
        width: 100%;height: 60px;
        z-index: 9;
        background:rgba(0,0,0,.2);
        padding-top: 10px;padding-bottom: 10px;
        box-sizing: border-box;
    }
    header a{
        display: inline-block;
        margin-left:2.5%;
        width: 30px;height: 40px;
        line-height:40px;
    }
    header i{
        color:#fff;
        font-size:30px;
    }
    header form{
        width: 80%;
        display: inline-block;
        margin-left: 1%;
        vertical-align: top;
    }
    header .search-box{
        background: #fff;height: 40px;
        border-radius: 20px;
        position: relative;
    }
    .search-logo,.search-btn,.search-input{
        position: absolute;
        top: 50%;transform: translateY(-50%);
    }
    .search-logo{
        left: 20px;
    }
    .search-btn{
        left: 60px;
    }
    .search-input{
        left: 100px;
        width: 60%;height: 30px;
        font-size: 16px;
    }
    .search-logo i{
        color:#f23030;
    }
    .search-btn i{
        color: #999;
    }
    .block1{
        padding-top: 16px;
    }
    .list-link{
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 15px;
    }
    .list-link a{
        width: 20%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-bottom: 10px;
    }
    .hotNews{
        display: flex;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        width: 95%;
        margin: 0 auto 20px;
    }
    .hotNews span:first-child{
        width: 10%;
    }
    .hotNews span:last-child{
        width: 8%;
        border-left: 1px solid #ccc;
        text-align: center;
        height: 20px;
        line-height: 20px;
        margin-top: 5px;
    }
    .hotNews .hotNews-box{
        flex: 1;
        transition: 0.3s;
    }
    .hotNews .hotNews-box-item{
        height: 30px;
        line-height: 30px;
    }
    .seckill{
        width: 95%;
        margin: 0 auto;
    }
    .seckill-title{
        display: flex;
        width: 60%;
        font-size: 14px;
        padding-top:5px; 
    }
    .seckill-title span{
        text-align: center;
        margin-right: 10px;
        line-height: 37px;
    }
    .seckill-title span:first-child{
        color: #f23030;
        font-size: 26px;
    }
    .seckill-title span:last-child{
        width: 30%;
    }
    .seckill-content{
        width: 100%;
        overflow: auto;
        margin-top: 10px;
    }
    .seckill-content-box{
        display: flex;
        flex-wrap: nowrap;
        height: 150px;
        width: 660px;
    }
    .seckill-content-box .seckill-content-box-item{
        width: 110px;
        padding: 0 5px;
    }
    .seckill-content-box .seckill-content-box-item p{
        text-align: center;
    }
    .seckill-content-box .curPrice{
        color: #f23030;
        font-size: 16px;
        line-height: 16px;
        height: 16px;
        font-weight: 700;

    }
    .seckill-content-box .prevPrice{
        color: #686868;
        font-size: 12px;
        line-height: 12px;
        margin-top: 5px;
        text-decoration: line-through;
    }
</style>

<script>
import Swiper from '../base/Swiper.vue'
import Ads from '../base/Ads.vue'
import Seckill from '../base/Seckill.vue'
import ShopItem from '../base/ShopItem.vue'
import {getSliders,getSecKills, getShopItems} from '../api'
export default {
    components:{
        Swiper,Ads,Seckill,ShopItem
    },
    created() {
        this.getSlider();
        this.getSecKill();
        this.getShopItem();
    },
    mounted() {
        this.scrollNews();
        // this.secKillWidth();
    },
    data(){
        return{
            sliders : [
                ],
            hotNews : [
                '劲爆消息1',
                '劲爆消息2',
                '劲爆消息3',
                '劲爆消息4',
                '劲爆消息5',
            ],
            secKill : {
                secKillTime : 2,
                secKillItems : []
            },
            ShopItem : []
        }
    },
    methods : {
        async getSlider(){
            var data = await getSliders();
            this.sliders = data;
        },
        async getSecKill(){
            this.secKill.secKillItems = await getSecKills();
        },
        async getShopItem(){
            this.ShopItem = await getShopItems();
        },
        scrollNews(){
            var hotNews = document.getElementsByClassName('hotNews-box')[0],
                hotNewsItemlLen = hotNews.getElementsByClassName('hotNews-box-item').length,
                num = 0;
            var timer = setInterval(function(){
                num++;
                if(num == hotNewsItemlLen){
                    num = 0;
                }
                hotNews.setAttribute('style','transform:translateY(-' + num * 30 + 'px);height:' + hotNewsItemlLen * 30 + 'px;');
            },2000);
        },
        secKillWidth(){
            var len = this.secKill.secKillItems.length;
            var seckillBox = document.getElementsByClassName('seckill-content-box')[0];
            seckillBox.style.width = 110 * len + 'px';
        }
    },
    filters : {
        money(val){
            return '￥' + val;
        }
    }
}
</script>


