<template>
    <div class="book-detial" @click="userClick">
        <div class="top" v-if="isShow"><i class="iconfont icon-left"></i></div>
        <div class="container">
            <h3>{{title}}</h3>
            <p v-for="(p,index) in chapterContent" 
                :key="index"
                class="book-p"
            >{{p}}</p>
        </div>
    </div>
</template>

<style scoped>
    .top{
        position: fixed;
        top: 0;left: 0;
        width: 100%;height: 35px;
        line-height: 35px;
        font-size: 20px;
        background: rgba(255,255,255,0.3);
        padding-left: 2em;
    }
    .book-p{
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 10px;
        text-indent: 2em;
    }
    h3{
        margin: 15px  0;
    }
</style>

<script>
import {getChapterContent} from '../api/index.js'
export default {
    created(){
        this.novelId = this.$route.params.novelId;
        this.chapterId = this.$route.params.chapterId;
        this.getChapterContents(this.novelId,this.chapterId);
    },
    mounted() {
        window.addEventListener('scroll',this.showTop)
    },
    updated() {
        window.scroll(0,0);
    },
    data(){
        return {
            chapterContent : '',
            novelId : 0,
            chapterId : 0,
            timer : '',
            timer2 : '',        //屏幕滚动
            totalPage : 0,
            title : '',         //章节名
            isShow : false,      //顶部工具栏flag
            scroll : 0         //屏幕滚动高度
        }
    },
    methods : {
        async getChapterContents(novelId,chapterId){
            var data = await getChapterContent(novelId,chapterId);
            this.chapterContent = data.data.b.content.split('\n');
            this.totalPage = this.$store.state.totalPage;
            this.title = data.data.b.title;
        },
        userClick(e){
            clearTimeout(this.timer)
            this.timer  = setTimeout(()=>{      //防止用户频繁点击
                if(e.offsetX >= document.body.clientWidth * 0.8){   //点击了右侧，下翻页
                this.chapterId++;
                }else if(e.offsetX <= document.body.clientWidth * 0.2){     //点击了左侧，上翻页
                this.chapterId--;
                }
                this.getChapterContents(this.novelId,this.chapterId);
            },250);
        },
        showTop(){
           clearTimeout(this.timer2);
           var that = this;
           this.timer2 = setTimeout(()=>{
               that.isShow  = window.scrollY < that.scroll ? true : false;
               that.scroll = window.scrollY;
               clearTimeout(that.timer2);
           },1000)
        }
    }
}
</script>

