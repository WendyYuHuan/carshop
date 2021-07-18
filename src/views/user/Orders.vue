<template>
    <div>
        <Header :title="name"></Header>
        <van-tabs v-model="activeName" sticky>
        <van-tab title="全部">
            <Card></Card>
        </van-tab>
        <van-tab title="待付款">内容 2</van-tab>
        <van-tab title="待发货">内容 3</van-tab>
        <van-tab title="待收货">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Header from '../../components/Bar.vue'
import Card from '../../components/Card.vue'
    export default {
        components:{
            Header,
            Card
        },
        data() {
            return{
                name:'订单列表',
                avtiveName:'全部'
            }
        }
    }
</script>

<style scoped>

</style>