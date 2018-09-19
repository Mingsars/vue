<template>
    <div>
        user
    </div>
</template>

<script>

export default {
    created() {
        this.token = this.$store.state.isLogin;
    },
    data(){
        return{
            token : 0
        }
    },
    beforeRouteEnter (to, from, next) {
        // ...
        next(vm => {
            if(vm.token == 0){
                next('/login');
            }else{
                next();
            }
        })
    }
}
</script>

