<template>
    <div>
        <Head>我的</Head>
        <div class="user">
            <router-link to="/login" tag="p">点击登录</router-link>
            <div class="really">
                <div class="user-img">
                    <img src="" alt="">
                </div>
                <p class="user-name"></p>
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
        this.token = this.$store.state.isLogin;
    },
    data(){
        return{
            token : 0
        }
    },
    // beforeRouteEnter (to, from, next) {
    //     // ...
    //     next(vm => {
    //         if(vm.token == 0){
    //             vm.$router.push('/login');
    //         }else{
    //             next();
    //         }
    //     })
    // },
    components : {Nav,Head}
}
</script>

