<template>
    <div>
        <Head>
            我的    
        </Head>
        <div class="content">
            <div class="user">
                <router-link to="/login" tag="p" v-if="!isLogin" class="login">点击登录</router-link>
                <div class="really" v-else>
                    <div class="user-img">
                        <img src="" alt="">
                    </div>
                    <p class="user-name">{{userMsg.username}}</p>
                </div>
            </div>
            <div class="out" @click="out" v-show="isLogin">退出登录</div>
        </div> 
        <Nav></Nav>
    </div>
</template>
<style scoped>
    .content{
        position: absolute;
        top: 47px;bottom: 60px;left: 0;right: 0;
    }
    .user{
        background: #eee;
        height: 120px;
        overflow: hidden;
    }
    .login{
        text-align: center;
        font-size: 20px;
        line-height: 6;
    }
    .really{
        display: flex;
        height: 100px;
        margin-top: 10px;
    }
    .user-img{
        margin-left: 10%;
        width: 100px;height: 100px;
        background: #fff;
        border-radius: 50%;
    }
    .user-name{
        width: calc(90% - 120px);
        height: 100px;
        line-height: 100px;
        font-size: 24px;
        margin-left: 20px;
    }
    .out{
        width: 90%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 30px auto 0;
        border: 1px solid #f23030;
        color: #f23030;
    }
</style>

<script>
import Nav from '../base/Nav.vue'
import Head from '../base/Head.vue'
export default {
    created() {
        this.userMsg = this.$store.state.userMsg;
        this.isLogin = this.$store.state.isLogin;
    },
    data(){
        return{
            userMsg : {

            },
            isLogin : false
        }
    },
    computed : {
        nickName(){
            return this.$store.state.userMsg.nickname;
        }
    },
    components : {Nav,Head},
    methods : {
        back(){
            this.$router.go(-1);
        },
        out(){
            this.isLogin = false;
            this.$store.commit('changeStatus');
        }
    }
}
</script>

