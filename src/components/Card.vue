<template>
    <div id="card">
        <div class="state">
            <span>车品商城</span>
            <span>未付款</span>
        </div>
        <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            origin-price="10.00"
            :thumb="require('../assets/images/商品.png')"/>
            <van-button plain round color="#FF9100">确认收货</van-button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#card{
    background-color: #fff;
    border-radius: 5px;
    padding: 12px 10px;
    margin: 10px 3.47%;
}
.van-card{
    background-color: #fff;
}
.van-card__title{
    font-size: 14px;
    color: #333333;
}
.state{
    color: #333333;
    font: 13px PingFang SC;
    height: 18px;
    line-height: 18px;
}
.state span:first-child{
    float: left; 
}
.state span:last-child{
    float: right; 
    color: #FF9100;
}
.van-card__content{
    text-align: left;
}
.van-button{
    width: 20%;
    height: 22px;
    padding: 0;
    margin-left: 80%;
    
}
.van-button__text{
    font-size: 12px;
    line-height: 12px;
}
</style>