<template>
    <div class="head">
        <i class="iconfont icon-left" v-show="isBackShow"></i>
        <slot>默认标题</slot>
    </div>
</template>

<style scoped>
    .head{
        position: fixed;
        top: 0;left: 0;
        text-align: center;
        line-height: 50px;
        width: 100%;
        font-size: 18px;
        border-bottom: 1px solid #ccc;
        box-shadow: 0 0 5px #ccc;
        background: #fff;
    }
    .iconfont{
        float: left;
        margin-left: 2.5%;
    }
</style>

<script>
export default {
    data(){
        return{
            isBackShow : false
        }
    }
}
</script>


