<template>
    <div class="detail">
        <div class="content">
            <div class="container">
                <div class="pageBox">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.bookId = this.$route.params.id;
    },
    data(){
        return{
            bookId : 0
        }
    }
}
</script>

