<template>
    <div class="listitem">
        listitem + {{msg}}
    </div>
</template>

<script>
export default {
   mounted() {
       this.msg = this.$route.params.id;
   },
    data(){
        return{
            msg : ''
        }
    }
}
</script>

<style scoped>
    .listitem{
        width: calc(100% - 86px);
        float: right;
    }
</style>

