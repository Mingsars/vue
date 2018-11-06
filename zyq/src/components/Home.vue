<template>
    <div class="find-book">
        <Top>书城</Top>
        <div class="content">
            <div class="container">
                <ul class="list-box">
                    <router-link 
                        v-for="list in lists" :key="list.id"
                        :to="{name : 'type',params : {classId : list.id}}"
                        tag="li"
                        class="book-item"
                    >
                        <img src="../assets/logo.png" alt="">
                        <p class="book-title">{{list.name}}</p>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .list-box{
        font-size: 0;
    }
    .book-item{
        cursor: pointer;
        font-size: 22px;
        width: calc(100% / 3);
        box-sizing: border-box;
        padding: 5%;
        display: inline-block;
    }
    .book-title{
        text-align: center;
        margin-top: 10px;
    }
</style>

<script>
import {getList} from '../api'
import Top from '../base/Top.vue'
export default {
    created(){
        this.getLists();
    },
    data(){
        return{
            lists : []
        }
    },
    methods : {
        async getLists(){
            var data = await getList();
            this.lists = data.data.b.data;
        }
    },
    components : {Top}
}
</script>

