<template>
    <div>
        <Head>我的</Head>
        <div class="user">
            <router-link to="/login" tag="p" v-if="isLogin">点击登录</router-link>
            <div class="really" v-else>
                <div class="user-img">
                    <img src="" alt="">
                </div>
                <p class="user-name">{{userMsg.username}}</p>
            </div>
        </div>
        <Nav></Nav>
    </div>
</template>

<script>
import Nav from '../base/Nav.vue'
import Head from '../base/Head.vue'
export default {
    created() {
        console.log(this.$store.state);
        this.userMsg = this.$store.state.userMsg;
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
    components : {Nav,Head}
}
</script>

