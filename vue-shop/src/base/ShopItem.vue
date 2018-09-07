<template>
    <div class="shopItem">
        <div class="shopItem-title">
            <img :src="item.itemTitle" alt="">
        </div>
        <div class="shopItem-content">
            <ul class="shopItem-content-box">
                <li class="shopItem-content-box-item" v-for="(item,index) in item.items" :key="index">
                    <a href="">
                        <p>{{item.itemsIntro1}}</p>
                        <p>{{item.itemsIntro2}}</p>
                        <img :src="item.itemsImg" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props : ["item"]
}
</script>

<style scoped>
    
    .shopItem-title{
        min-height: 30px;
        background: #ddd;
    }
    .shopItem-content-box{
        display: flex;
        flex-wrap: wrap;
    }
    .shopItem-content-box-item{
        width: 25%;min-height: 100px;
        padding: 5px 0 0 5px;
        box-sizing: border-box;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .shopItem-content-box-item:nth-of-type(4n){
        border-right: none;
    }
    p{
        text-align: center;
    }
</style>
