<template>
    <div class="pages">
        <div class="prevPage page" @click="changePage(0)">&lt;</div>
        <select name="" id="pageSelect" v-model="page">
            <option  v-for="num in totalPage"
                :key="num"
                :value="num"
                >{{(num - 1) * 20 + 1}} ~ {{(num - 1) * 20 + 21}}</option>
        </select>
        <div class="nextPage page" @click="changePage(1)">></div>
    </div>
</template>

<script>
import {getBookList} from '../api/index.js'
export default {
    props : ['total'],
    data(){
       return{
           novelId : 0,
           page : 1,
           totalPage : this.total % 20
       }
    },
    beforeUpdate() {
        this.totalPage = this.$store.state.totalPage % 20;
    },
    methods : {
        changePage(num){
            num == 0 ? this.$store.commit('prevPage') : this.$store.commit('nextPage');
            this.page = (this.$store.state.page - 1) * 20 + 1
            this.$emit('changePages');
        }
    },
    computed : {
        minPage(){
            return (this.page - 1) * 20 +1;
        },
        maxPage(){
            return this.page + 20;
        }
    }

}
</script>

<style scoped>
.pages{
    font-size: 0;
    position: fixed;
    left: 0;bottom:0;
    width: 100%;
    background: #fff;
    box-shadow: 0 0 5px #ccc;
}
.page,#pageSelect{
    display: inline-block;
    font-size: 14px;
    height: 40px;
}
.page{
    width: 20%;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
}
#pageSelect{
    width: 60%;
    text-align: center;
    line-height: 40px;
}
</style>

