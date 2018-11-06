<template>
    <div class="book-detial">
        {{pageListId}}
    </div>
</template>

<script>
export default {
    created(){
        this.pageListId = this.$route.params.pageId;
    },
    data(){
        return {
            pageListId : 1
        }
    }
}
</script>

