<template>
    <div class="head">
        <span @click="back"><i class="iconfont icon-fanhui"></i></span>
        <slot>这是一个默认标题</slot>
    </div>
</template>
<style scoped>
    .head{
        height: 45px;
        position: relative;
        text-align: center;
        line-height: 45px;
        font-size: 17px;
        border-bottom: 2px solid #ccc;
        background: #fff;
    }
    .head span{
        position: absolute;
        top: 50%;transform: translateY(-50%);
        left: 2%;
    }
</style>

<script>
export default {
    methods : {
        back(){
            this.$router.go(-1);
        }
    }
}
</script>


