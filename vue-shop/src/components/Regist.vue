<template>
    <div class="regist">
        <div class="head">
            <span><i class="iconfont icon-fanhui"></i></span>
            注册
        </div>
        <div class="body">
            <div class="username"><span></span><input type="text" placeholder="请输入用户名"></div>
            <div class="password"><span></span><input type="text" placeholder="请输入密码"></div>
            <div class="code"><input type="text"><span>获取验证码</span></div>
            <div class="submit">注册</div>
        </div>
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
    }
    .head span{
        position: absolute;
        top: 50%;transform: translateY(-50%);
        left: 2%;
    }
    .body{
        width: 96%;
        margin: 0 auto;
    }
</style>

