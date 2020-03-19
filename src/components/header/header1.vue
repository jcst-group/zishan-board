<template>
    <div class="header">
        <span class="title">{{platObj.name}}</span>
        <div class="top_left">
            <!-- <img src="../../assets/header_1_left.png"> -->
        </div>
        <div class="top_right">
            <span v-if="showtime" class="date">{{date}}</span>
        </div>
        <div class="center_t">
            
        </div>
        <div class="center_b">
            
        </div>
    </div>
</template>
<script>
import {
  getPlatInfo
} from '@/api/allapi'
export default {
    created() {
        setInterval(() => {
            var date = new Date().toString().split(' ')
            var month = new Date().getMonth() + 1
            var str = ''
            this.date = str + date[3] + '-' + month + '-' + date[2] + ' ' + date[4]
        }, 1000)
    },
    data() {
        return {
            date: '',
            showtime:true,
            platObj: {}
        }
    },
    created() {
        getPlatInfo({
            type: 1
        }).then(res => {
            this.platObj = res.result ? res.result : {}
        })
    },
    methods:{
        notime(){
            this.showtime=false;
        },
    }
}
</script>
<style scoped>
.header{
    min-width: 1200px;
    height:100px;
    position:relative;
    text-align:center;
}
.center_t{
    position: absolute;
    top:0;
    width:100%;
    height:50px;
}
.center_b{
    position: absolute;
    bottom: 0;
    width:100%;
    height: 50px;
    background-image:url("../../assets/header_1.png");
    background-repeat:no-repeat;
    background-size:100% 100%;
}
.title{
    line-height: 120px;
    color:#13B068;
    font-size: 41px;
    font-weight:bold;
}
.top_left{
    position: absolute;
    bottom: 25px;
    left: 20px;
    width: 13%;
    height: 50px;
}
.top_left img{
    width: 100%;
    height: 50px;
}
.top_right{
    position: absolute;
    bottom:-80px;
    right: 20px;
    width: 20%;
    height: 50px;
    text-align: right;
}
.top_right .date{
    font-size:24px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:18px;
}
</style>

