<template>
    <div class="listitem">
        <AllList v-for="(item,index) in data.listbox" :key="index" :item="item"></AllList>
        <p v-if="havaData">什么都没有哦:{{dataId}}</p>
    </div>
</template>

<script>
import AllList from '../base/AllList.vue'
import {getListItems} from '../api'
export default {
    mounted() {
        this.dataId = this.$route.params.id;
    },
    created() {
        this.getListItem();
    },
    data(){
        return{
            dataId : '',
            data : ''
        }
    },
    components : {AllList},
    watch : {
        $route(){
            this.dataId = this.$route.params.id;
            this.getListItem();
        }
    },
    methods : {
        async getListItem(){
            var newData = await getListItems();
            this.data = newData[this.dataId - 1];
        }
    },
    computed : {
        havaData(){
            var flag = false;
            if(this.data.listbox == ''){
                flag = true;
            }
            return flag;
        }
    }
}
</script>

<style scoped>
    .listitem{
        width: calc(100% - 86px);
        float: right;
    }
</style>

