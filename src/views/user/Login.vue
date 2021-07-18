<template>
    <div>
        <Header :title="name"></Header>
        <div class="text">
            <p>登录车品商城</p>
        </div>
        <van-cell-group id="input">
            <van-field v-model="username" label="用户名" placeholder="请输入您的用户名 " clearable/>
            <van-field v-model="password" :type="inputType" label="密码" placeholder="请输入您的密码" clearable>
                <template #right-icon>
                    <img style="width:14px;height:14px"
                    :src="inputType=='text'? require('../../assets/images/密码可见.png') : require('../../assets/images/密码不可见.png')"
                    alt="" @click="showPassword">
                </template>
            </van-field>
        </van-cell-group>
        <div class="loginBtn">
            <van-button color="#FFCC32" @click="login">确认</van-button>
            <p>未注册用户会自动注册并登录</p>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Bar.vue'
import {userInfo} from '../../add.js'
    export default {
        components:{
            Header
        },
        data() {
            return{
                name:'登录',
                username:'',
                password:'',
                inputType:'password'
            }
        },
        methods: {
            showPassword() {
                this.inputType = this.inputType == 'password' ? 'text' : 'password'
            },
            login(){
                this.$toast.success('登陆成功')
                this.$router.push('/user')
            }
        }
        
    }
</script>

<style scoped>
.text{
    background-color: #fff;
}
.text p{
    font: 24px PingFang SC;
    color: #1F2129;
    text-align: left;
    height: 34px;
    line-height: 34px;
    padding: 30px 0 30px 8%;
    margin: 0;
}
.van-field{
    height: 50px;
    padding-left: 8%;
    border: 1px solid #FFFFFF;
}
#input /deep/ .van-field .van-field__label{
    color: #222222 ;
    font: 16px PingFang SC;
    line-height: 30px;
    width: 20%;
}
#input /deep/ .van-field .van-field__value{
    color: #999999 ;
    font: 16px PingFang SC;
    line-height: 30px;
    width: 80%;
}
.loginBtn{
    background-color: #fff;
    height: 120px;
    width: 100%;
}
.van-button{
    margin: 30px 0 0 0;
    width: 85%;
}
.van-button__text{
    color: #1A1A1A ;
    font: 16px PingFang SC;
}
.loginBtn p{
    color: #979AA8 ;
    font: 12px PingFang SC;
}
</style>