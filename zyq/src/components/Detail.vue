<template>
    <div class="book-detial" @click="userClick">
        <div class="content">
            <div class="container">
                <p v-for="(p,index) in chapterContent" 
                    :key="index"
                    class="book-p"
                >{{p}}</p>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
    .book-p{
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 10px;
        text-indent: 2em;
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
    data(){
        return {
            chapterContent : '',
            novelId : 0,
            chapterId : 0,
            timer : '',
            totalPage : 0
        }
    },
    methods : {
        async getChapterContents(novelId,chapterId){
            var data = await getChapterContent(novelId,chapterId);
            this.chapterContent = data.data.b.content.split('\n');
            this.totalPage = this.$store.state.totalPage;
            console.log(this.totalPage);
        },
        userClick(e){
            clearTimeout(this.timer)

            //  timer = setTimeout(this.getChapterContents(this.novelId,this.chapterId),500);
            this.timer  = setTimeout(()=>{
                if(e.offsetX >= document.body.clientWidth * 0.8){   //点击了右侧，下翻页
                this.chapterId++;
                }else if(e.offsetX <= document.body.clientWidth * 0.2){     //点击了左侧，上翻页
                this.chapterId--;
                }
                this.getChapterContents(this.novelId,this.chapterId);
            },300);
        }
    }
}
</script>

