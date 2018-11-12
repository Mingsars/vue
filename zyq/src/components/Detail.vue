<template>
    <div class="book-detial">
        <div class="content">
            <div class="container">
                {{chapterContent}}
            </div>
        </div>
        
    </div>
</template>

<script>
import {getChapterContent} from '../api/index.js'
export default {
    created(){
        this.novelId = this.$route.params.novelId;
        this.chapterId = this.$route.params.chapterId + 1;
        this.getChapterContents(this.novelId,this.chapterId);
    },
    data(){
        return {
            chapterContent : '',
            novelId : 0,
            chapterId : 0
        }
    },
    methods : {
        async getChapterContents(novelId,chapterId){
            var data = await getChapterContent(novelId,chapterId);
            // this.chapterContent = data.data.b.content;
            this.chapterContent = data
        }
    }
}
</script>

