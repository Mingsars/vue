<template>
    <div class="regist">
        <Head>注册</Head>
        <div class="body">
            <div class="username"><label for="username">用户名</label><input type="text" placeholder="请输入用户名" id="username" v-model.lazy="userMsg.username"></div>
            <div class="password"><label for="pwd">密码</label><input type="text" placeholder="请输入密码" id="pwd" v-model.lazy="userMsg.password"></div>
            <div class="nickname"><label for="nickname">昵称</label><input type="text" placeholder="请输入昵称" id="nickname" v-model.lazy="userMsg.nickname"></div>
            <div class="code"><input type="text" placeholder="请输入验证码" v-model.lazy="curCode"><input @click="getCode" type="button" :value="time" class="getCode" :disabled="isClick"></div>
            <div class="submit" @click="regist">注册</div>
        </div>
    </div>
</template>

<script>
import {registUser} from '../api'
import Head from '../base/Head.vue'
export default {
    data(){
        return{
            userMsg : {},
            rightCode : 1,
            curCode : '',
            time : '获取验证码',
            isClick : false,
            timer : 0,
            timer2 : 0
        }
    },
    components : {
        Head
    },
    methods : {
        getCode(){
            this.cleanCode();
            this.isClick = true;
            this.rightCode = '';
            let code = 0;
            let that = this;
            for(let i = 0;i < 4;i++){
                code = Math.floor(Math.random() * 10);
                this.rightCode += code;
            }
            alert('验证码：' + this.rightCode);
            this.time = 60;
            this.timer = setInterval(function(){
                that.time --;
                if(that.time < 0){
                    that.time = '获取验证码';
                    clearInterval(that.timer);
                    that.isClick = false;
                }
            },1000);
        },
        cleanCode(){
            clearInterval(this.timer2);
            let lazy = 10;
            let that = this;
            this.time2 = setInterval(()=>{
                lazy--;
                if(lazy < 0){
                    lazy = 0;
                    that.rightCode = null;
                    clearInterval(that.timer2);
                }
            },1000);
        },
        async regist(){
            if(this.curCode === this.rightCode){
                alert('注册成功');
                await registUser(JSON.stringify(this.userMsg));
                this.$router.push('/login');
            }
        }
    }
}
</script>

<style scoped>
    
    .body{
        width: 96%;
        margin: 0 auto;
    }
    .body>div{
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #ccc;
    }
    .body input{
        font-size: 15px;
        height: 32px;
    }
    .username label,.password label,.nickname label{
        width: 20%;
        line-height: 32px;
    }
    .username input,.password input,.code input,.nickname input{
        width: 75%;
    }
    .code .getCode{
        height: 30px;
        line-height: 30px;
        width: 20%;
        text-align: center;
        border: 1px solid #ccc;
        width: 20%;
    }
    .body .submit{
        width: 80%;
        margin: 0 auto;
        text-align: center;
        display: block;
        border: 1px solid #f23030;
        color: #f23030;
        margin-top: 15px;
    }
</style>

