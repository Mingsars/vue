<template>
    <div class="login">
        <Head>登录</Head>
        <div class="body">
            <div class="username"><label for="username">用户名</label><input type="text" placeholder="请输入用户名" id="username" v-model.lazy="userMsg.username"></div>
            <div class="password"><label for="pwd">密码</label><input type="text" placeholder="请输入密码" id="pwd" v-model.lazy="userMsg.password"></div>
            <div class="buttons">
                <router-link to="/regist" tag="div" class="button registBtn">用户注册</router-link>
                <div class="button loginBtn" @click="userLogin">登录</div>
            </div>
        </div>
    </div> 
</template>

<script>
import Head from '../base/Head.vue'
import {login} from '../api'
export default {
    components : {
        Head
    },
    data(){
        return{
            userMsg : {}
        }
    },
    methods : {
        async userLogin(){
            await login(this.userMsg);
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
    .username label,.password label{
        width: 20%;
        line-height: 32px;
    }
    .username input,.password input{
        width: 75%;
    }  
    .body .buttons{
        display: flex;
        border: none;
        justify-content: space-between;
    }
    .button{
        border: 1px solid #ccc;
        height: 40px;width: 45%;
        text-align: center;
        line-height: 40px;
    }
    .loginBtn{
        color: #38c;
        border-color: #38c;
    }
    .registBtn{
        color: #64b587;
        border-color: #64b587;
    }
</style>


