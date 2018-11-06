<template>
    <div class="list">
        <div class="content">
            <div class="container">
                <ul class="pageBox">
                    <router-link 
                        v-for="(list,index) in pageLists" :key="index"
                        :to="{name : 'detail',params : {pageId : index}}"
                        tag="li"
                    >{{list}}</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.bookId = this.$route.params.bookId;
    },
    data(){
        return{
            bookId : 0,
            pageLists : [
                '第一章','第二章','第三章','第四章','第五章','第六章',
                '第七章','第八章','第九章','第十章','第十一章','第十二章',
                '第十三章','第十四章','第十五章','第十六章','第十七章','第十八章'
            ]
        }
    }
}
</script>

