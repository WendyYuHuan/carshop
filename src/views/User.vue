<template>
    <div>
        <Header :title="name"></Header>
        <van-cell-group>
            <van-cell>
            <template #icon>
                <van-image round width="60px" height="60px" fit="cover"
                :src="require('../assets/images/默认头像@3x.png')"></van-image>
            </template>
            <template #title>
                <p>懂车小达人</p>
            </template>
            <template #label>
                <span class="info">懂车帝xxxxxxxxx</span>
                <van-button :icon="require('../assets/images/编辑.png')" to="/edit"></van-button>
            </template>
        </van-cell>
        <van-cell title="我的地址" is-link to="/address">
            <template #icon>
                <img src="../assets/images/地址.png" alt="">
            </template>
        </van-cell>
        <van-cell title="我的订单" is-link to="/orders">
            <template #icon>
                <img src="../assets/images/订单.png" alt="">
            </template>
        </van-cell>
        <van-cell title="切换账号" to="/login"></van-cell>
        </van-cell-group>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Bar.vue'
import Footer from '../components/Footer.vue'
    export default {
        components:{
            Header,
            Footer
        },
        data() {
            return{
                name: '我的'
            }
        }
        
    }
</script>

<style  scoped>
.van-image{
    padding-top: 20px;
}
img{
    width: 24px;
    height: 24px;
}
.info{
    float: left;
}
.van-button{
    border: none;
    height: 18px;
    float: left;
    padding: 0 5px;
}
.van-icon__image{
    width: 14px;
    height: 14px;
}
p{
    font-size: 24px;
    margin: 22px 0 0 0;
    height: 34px;
    line-height: 34px;
}
.van-cell{
    height: 50px;
    text-align: left;
}
.van-cell:first-child{
    height: 120px;
    border-bottom: 6px solid #F7F8FC;
}
.van-cell:nth-child(2){
    border-bottom: 1px solid #F7F8FC;
}
.van-cell:last-child{
    text-align: center;
    border-top: 6px solid #F7F8FC;
}
.van-cell__title{
    font-size: 16px;
    font-family: PingFang SC;
    padding-left: 10px;
}
.van-cell__title:nth-child(4){
    padding-left: 0;
}


</style>