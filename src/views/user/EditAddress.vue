<template>
    <div>
        <Header :title="name"></Header>
        <van-cell-group id="input">
            <van-field v-model="address" label="地址" clearable/>
            <van-field v-model="personName" label="收件人" clearable/>
            <van-field v-model="tel" type="tel" label="手机号" clearable/>
        </van-cell-group>
        <div class="save">
            <van-button round color="#FFCC32" to="/Address">保存</van-button>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Bar.vue'
    export default {
        components:{
            Header
        },
        data(){
            return{
                name:'编辑地址',
                address:'',
                personName:'',
                tel:''
            }
        }
    }
</script>

<style scoped>
.van-field{
    height: 50px;
    border-bottom: 1px solid #FFFFFF;
}
#input /deep/ .van-field .van-field__label{
    color: #222222 ;
    font: 16px PingFang SC;
    padding-left: 8%;
    line-height: 30px;
}
#input /deep/ .van-field .van-field__value{
    color: #999999 ;
    font: 16px PingFang SC;
    line-height: 30px;
}
.save{
    background-color: #fff;
    height: 60px;
    width: 100%;
    position: fixed;
    bottom: 0;
}
.van-button{
    margin: 8px 0;
    width: 90%;
}
.van-button__text{
    color: #1A1A1A ;
    font: 16px PingFang SC;
}
</style>