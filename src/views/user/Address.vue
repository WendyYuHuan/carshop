<template>
    <div>
        <Header :title="name"></Header>
        <van-cell-group>
            <van-cell v-for="(item, index) in userAddress" :key="index" icon="location-o" center>
                <template #title>
                    <span>{{item.address}}</span>
                </template>
                <template #label>
                    <span>{{item.personName}}</span>
                    <span>{{item.tel}}</span>
                </template>
                <template #right-icon>
                    <van-button :icon="require('../../assets/images/编辑.png')" to="/editAddress"
                    class="editBtn"></van-button>
                </template>
            </van-cell>
        </van-cell-group>
        <div class="add">
            <van-button round color="#FFCC32" to="/addAddress">添加地址</van-button>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Bar.vue'
import {address} from '../../add.js'
    export default {
        components:{
            Header
        },
        data() {
            return{
                name: '我的地址',
                userAddress: address
            }
        }
    }
</script>

<style scoped>
.add{
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
.icon{
    height: 16px;
    width: 16px;
}
.van-cell{
    height: 73px;
}
.van-cell__title{
    font: 16px PingFang SC;
    color: #333333;
    text-align: left;
}
.editBtn{
    border: none;
    height: 16px;
    width: 16px;
}
</style>