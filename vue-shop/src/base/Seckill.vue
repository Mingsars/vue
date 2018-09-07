<template>
    <div class="time">
        <span>{{hour}}</span>:
        <span>{{minute}}</span>:
        <span>{{second}}</span>
    </div>
</template>

<script>
export default {
    props : ['hour'],
    mounted() {
        this.readSec();
    },
    data(){
        return{
            minute : 59,
            second : 60
        }
    },
    methods : {
        readSec(){
            var that = this;
            var timer = setInterval(function(){
                that.second --;     //秒数递减
                if(that.second < 0){    //如果过了一分钟
                   that.second = 0;
                   that.minute--;   //分钟数减一
                   if(that.minute < 0){     //如果过了一小时
                        that.minute = 0;
                        that.hour--;    //小时数减一
                        if(that.hour < 0){  //如果小时数为负数，即代表倒计时结束
                            that.hour = that.minute = that.second = 0;      //计数归0
                            clearInterval(timer);
                        }else{      //到及时未结束
                            that.minute = 59;   //数重新计数
                            that.second = 59;
                        }            
                   }else{
                       that.second = 59;
                   }
                }
            },1000);
            
        }
    }
}
</script>

<style scoped>
    .time{
        display: flex;
        justify-content: space-around;
        height: 20px;
        line-height: 20px;
        margin-top: 8px;
    }
    .time span{
        border: 1px solid #ccc;
        width: 20px;height: 20px;
        line-height: 20px;
    }
</style>


