<template>
    <div class="book">
        <div class="bookCover"><img :src="imgUrl" alt=""></div>
        <div class="bookInfo">
            <p class="bookName">{{book.novel_name}}</p>
            <p class="bookAuthor">{{book.author_name}}</p>
            <p class="bookIntro">{{book.intriduction}}</p>
            <div class="bookTags">
                <span class="tag">{{bookState}}</span>
                <span class="tag">{{book.click}}点击</span>
                <span class="tag">{{book.collect}}收藏</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['book'],
    data(){
        return{
            defaultImgUrl : 'https://img.zhuyeqingbook.cn/'
        }
    },
    computed : {
        bookState(){
            return this.book.mode == 1 ? '连载' : '完结';
        },
        imgUrl(){
            return this.defaultImgUrl + this.book.img_url;
        }
    }
}
</script>

<style scoped>
.book{
    display: flex;
    justify-content: space-between;
}
.bookCover{
    width: 25%;
}
.bookInfo{
    width: 70%;
}
.bookName{
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
}
.bookAuthor{
    font-size: 15px;
    line-height: 3;
}
.bookIntro{
    font-size: 13px;
    height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 1.2;
}
.tag{
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 1% 3%;
    font-size: 12px;
}
.tag:first-child{
    color: #38c;
}
</style>

