<template>
    <div class="main">
        <div class="center">
            <div class="title11">
                {{platObj.loginName}}
            </div>
            <div class="center_main">
                <div class="yhdl">用户登录</div>
                <div class="zm">
                    <a-form :form="form">
                        <a-form-item>
                            <a-input size="large" v-decorator="['username',{rules: [{required: true, message: '账号不能为空!'}]}]"><img style="width:15px;height:15px;" src="../assets/loginzh.png" slot="prefix"  /></a-input>
                        </a-form-item>

                        <a-form-item>
                            <a-input type="password" size="large" v-decorator="['password',{rules: [{required: true, message: '密码不能为空!'}]}]"><img style="width:15px;height:15px;" src="../assets/loginmm.png" slot="prefix"  /></a-input>
                        </a-form-item>
                    </a-form>
                    <div class="but" @click="hanldok">登录</div>
                </div>
            </div>
        </div>
        <Foot style="margin:100px;"/>
    </div>
</template>
<script>
import { mapActions } from "vuex"
import Vue from 'vue'
import { ACCESS_TOKEN } from "@/store/mutation-types"
import Foot from '@/components/layouts/GlobalFooter.vue'
import {
  getPlatInfo
} from '@/api/allapi'
export default {
    components:{
        Foot,
    },
    data(){
        return{
            form: this.$form.createForm(this),
            nobut:true,
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
        hanldok(){
            if(this.nobut){
                this.nobut=false;
                this.form.validateFields((err, values) => {
                    if (!err) {
                        this.$store.dispatch("user/login",values).then(()=>{
                            this.$router.push({ path: 'zshome' })
                            this.$notification.success({
                                message: '欢迎',
                                description: `欢迎回来`,
                            });
                            this.nobut = true;
                        }).catch(error=>{
                            this.$notification[ 'error' ]({
                                message: '登录失败',
                                description: ((error.response || {}).data || {}).message || error.message || "请求出现错误，请稍后再试",
                                duration: 4,
                            });
                            this.nobut = true;
                        })
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
.zm >>> .ant-input{
    background:rgba(18,172,102,0.1) !important;
    border: 1px solid #12ac66 !important;
    color: #fff !important;
}
.zm >>> .ant-input-lg{
    background:rgba(18,172,102,0.1) !important;
    border: 1px solid #12ac66 !important;
    color: #fff !important;
}
.main{
    position: absolute;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    min-width: 1000px;
    /* min-height: 800px; */
    background-image: url("../../src/assets/loginbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%; 
}
.center{
    width:500px;
    height:500px;
    margin:auto;
    margin-top:10%;
}
.center .title11{
    text-align: center;
    font-size: 30px;
    letter-spacing: 5px;
    color: #12ac66;
    font-weight: bold;
    padding-bottom:20px; 
}
.center_main{
    width: 100%;
    height:400px;
    background-image: url("../../src/assets/logincenter.png");
    background-repeat: no-repeat;
    background-size: 100% 100%; 
}
.yhdl{
    text-align: center;
    font-size: 25px;
    letter-spacing: 4px;
    color: #12ac66;
    padding: 20px 0;
}
.zm{
    width: 100%;
    padding: 50px;
}
.but{
    width:100%;
    height:50px;
    background: rgb(18,172,102);
    margin-top:60px;
    color: #fff;
    text-align:center;
    line-height: 50px;
    font-size: 25px;
    letter-spacing: 10px;
    cursor: pointer;
}
.but:hover{
    background: rgb(11, 107, 64)
}
</style>