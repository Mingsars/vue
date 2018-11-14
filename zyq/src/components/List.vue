<template>
    <div class="list">
        <Top>{{novelName}}</Top>
        <div class="content">
            <div class="container">
                <ul class="page-box">
                    <router-link 
                        v-for="(list,index) in pageLists" :key="index"
                        :to="{name : 'detail',params : {chapterId : list.id}}"
                        tag="li"
                        class="page-item"
                    >{{list.title}}  <span class="chapter-words">{{list.words}}</span>  </router-link>
                </ul>
            </div>
        </div>
        <Pages @changePages="changePage" :total="totalPage"></Pages>
    </div>
</template>

<style scoped>
.content{
    margin-bottom: 35px;
}
.page-item{
    padding: 2% 0;
    border-bottom: 1px solid #ccc;
    line-height: 23px;
}
.page-item:last-child{
    border-bottom: none;
}
.chapter-words{
    font-size: 12px;
    display: block;
    float: right;
    line-height: 23px;
}
</style>

<script>
import {getBookList} from '../api/index.js'
import Top from '../base/Top.vue'
import Pages from '../base/Pages.vue'
export default {
    created() {
        this.novelId = this.$route.params.novelId;
        this.getBookLists(this.novelId);
        this.$store.commit('changeTotalPage',this.totalPage);   //修改最大页数
        
    },
    data(){
        return{
            novelId : 0,
            pageLists : [
                
            ],
            novelName : '',
            totalPage : 0
        }
    },
    methods : {
        async getBookLists(novelId){
            var bookData = await getBookList(novelId);
            this.pageLists = bookData.data.b.chapter;
            this.novelName = bookData.data.b.novel.novel_name;
            this.totalPage = bookData.data.b.page.total;
            this.$store.commit('changeTotalPage',this.totalPage);   //修改最大页码 
        },
        async changePage(){     //点击翻页按钮，改变章节列表
            var bookData = await getBookList(this.novelId,this.$store.state.page);
            this.pageLists = bookData.data.b.chapter;
        }
    },
    components : {Top,Pages}
}
</script>

