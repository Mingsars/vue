<template>
    <div class="type">
        <Top>小说分类</Top>
        <div class="content">
            <div class="container">
                <ul class="type-box">
                    <li class="type-item" 
                        :class="{'type-item-active' : !classFlag}"
                        @click="changeClass('','')"    
                    >全部</li>
                    <li class="type-item"
                        v-for="(list,index) in childLists"
                        :key="list.id"
                        :class="{'type-item-active' : classFlag == index + 1}"
                        @click="changeClass(index + 1,list.name)"
                    >{{list.name}}</li>
                </ul>
                <ul class="update-box type-box">
                    <li class="updata-item type-item" :class="{'type-item-active' : updateFlag == 0}" @click="changeShowBooks(0)">全部</li>
                    <li class="updata-item type-item" :class="{'type-item-active' : updateFlag == 1}" @click="changeShowBooks(1)">连载中</li>
                    <li class="updata-item type-item" :class="{'type-item-active' : updateFlag == 2}" @click="changeShowBooks(2)">完结</li>
                </ul>
                <ul class="type-book-box">
                    <router-link class="type-book-item"
                        tag="li"
                        :to="{name : 'list',params : {novelId : book.id}}"
                        v-for="book in showBooks"
                        :key="book.id"
                    ><Book :book="book"></Book></router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .type-box{
        font-size: 0;
    }
    .type-item{
        width: 20%;
        text-align: center;
        font-size: 14px;
        box-sizing: border-box;
        padding: 1% 2%;
        margin-top: 2%;
        margin-bottom: 2%;
        display: inline-block;
    }
    .type-item-active{
        box-shadow: inset 0 0 5px #ddd;
        color : #38c;
    }
    .type-book-item{
        margin: 15px 0;
    }
</style>

<script>
import Top from '../base/Top.vue'
import Book from '../base/Book.vue'
import {getChildList,getListBook} from '../api/index.js'
export default {
    created(){
        var Id = this.$route.params.classId
        this.getChildLists(Id);
        this.getListBooks(Id);
    },
    components : {Top,Book},
    data(){
        return{
            childLists : [],
            listBooks : [],
            classFlag : '',
            updateFlag : 0,
            showBooks : [],
            bookClass : ''
        }
    },
    methods : {
        async getChildLists(id){
            var data = await getChildList(id);
            this.childLists = data.data.b.data;
        },
        async getListBooks(id){
            var books = await getListBook(id);
            this.listBooks = books.data.b.data;
            this.showBooks = this.listBooks;
        },
        changeClass(index,className){
            //修改被点击样式
            this.classFlag = index ? index : '';
            this.bookClass = className;
            this.resultBooks({classFlag : className})

        },
        resultBooks(book){  //修改展示的图书数据
            var _book = {   //默认书本信息
                bookClass : this.bookClass,
                updateFlag : this.updateFlag
            }
            for(var i in book){     //最终结果书本信息
                _book[i] = book[i] ? book[i] : _book[i];
            }

            if(_book.bookClass == '' ){     //如果是书本分类为 ‘全部’
                if(_book.updateFlag == 0){      //如果连载状态为 ‘全部’
                    this.showBooks = this.listBooks;
                }else{  
                    this.showBooks = this.listBooks.filter(item => item.mode == _book.updateFlag);
                }
            }else{
                if(_book.updateFlag == 0){  //如果连载状态为 ‘全部’
                    this.showBooks = this.listBooks.filter(item => item.class_name == _book.bookClass);
                }else{
                    this.showBooks = this.listBooks.filter(item => item.class_name == _book.bookClass && item.mode == _book.updateFlag);
                }
            }
        },
        changeShowBooks(Flag){
            //修改连载选项
            this.updateFlag = Flag;
            this.resultBooks({updateFlag : Flag})
        }
    }
}
</script>

