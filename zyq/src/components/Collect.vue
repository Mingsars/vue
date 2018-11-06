<template>
    <div class="collect">
        <Top>我的收藏</Top>
        <div class="content">
            <div class="container">
                <ul class="bookBox">
                    <router-link :to="{name : 'list',params:{bookId : index}}" tag="li" class="bookBox-item" v-for="(book,index) in books" :key="index">
                        <img src="../assets/bg1.jpg" alt="">
                        <p>{{book.bookTitle}}</p>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bookBox{
        font-size: 0;
    }
    .bookBox-item{
        display: inline-block;
        font-size: 16px;
        width: calc(100% / 3);
        margin: 15px 0 30px;
        padding: 0 5%;
        box-sizing: border-box;
    }
    .bookBox-item p{
        text-align: center;
        font-size: 16px;
    }
</style>

<script>
import Top from '../base/Top.vue'
export default {
    components : {Top},
    data(){
        return{
            books : [
                {
                    bookCover : '',
                    bookTitle : 'js'
                },
                {
                    bookCover : '',
                    bookTitle : 'css'
                },
                {
                    bookCover : '',
                    bookTitle : 'html'
                },
                {
                    bookCover : '',
                    bookTitle : 'php'
                },
                {
                    bookCover : '',
                    bookTitle : 'java'
                }
            ]
        }
    }
}
</script>

