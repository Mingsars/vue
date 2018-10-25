<template>
    <div class="head">
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
    }
</style>

