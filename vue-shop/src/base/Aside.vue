<template>
    <div class="aside">
        <ul class="aside-box">
            <li class="aside-box-item" v-for="(listitem,index) in listItems" :key="index">
                <router-link :to="{name:'listName',params:{id : index + 1}}">{{listitem.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .aside{
        position: absolute;
        top: 0;left: 0;
        width: 86px;height: 100%;
        overflow: scroll;
    }
    .aside-box-item{
        height: 46px;line-height: 46px;
        background: #f8f8f8;
    }
    .aside-box-item a{
        display: block;
        height: 46px;line-height: 46px;
        font-size: 14px;
        text-align: center;
    }
    .router-link-exact-active{
        background: #ccc !important;
        color: #f23030 !important
    }
</style>

<script>
export default {
    props : ["listItems"]
}
</script>

