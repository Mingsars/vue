<template>
    <div class="allList">
        <div class="lists">
            <p class="allList-title">{{item.listBoxTitle}}</p>
            <ul class="allList-box">
                <li class="allList-box-item" v-for="(list,index) in item.lists" :key="index">
                    <router-link to="">
                        <img :src="list.listImg" alt="">
                        <p>{{list.listIntro}}</p>
                    </router-link>
                </li>
            </ul>
        </div> 
    </div>
</template>

<style scoped>
    .allList-box{
        display: flex;
        flex-wrap: wrap;
    }
    .allList-box-item{
        width: calc(100% / 3);
        box-sizing: border-box;
        padding: 4%;
    }
    .allList-box-item p{
        text-align: center;
        font-size: 14px;
    }
</style>

<script>

export default {
    props : ["item"],
}
</script>
