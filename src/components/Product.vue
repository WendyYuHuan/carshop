<template>
    <div>
        <Header :title="name"></Header>
        <!-- 商品分类 -->
        <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option">
            <template #title>
                <span v-for="(item,index) in cateList" :key="index">{{item}}</span>
            </template>
        </van-dropdown-item>
        </van-dropdown-menu>
        <van-grid :column-num="2" clickable :gutter="7" :center="false">
        <van-grid-item v-for="(item,index) in 8" :key="index" >
            <template #icon>
                <img src="../assets/images/商品.png" alt="">
            </template>
            <template #text>
                <div class="van-multi-ellipsis--l2">{{product_title}}</div>
                <div class="price">
                <span>{{price.now | filterPrice}}</span>
                <span class="origin">{{price.origin | filterPrice}}</span>
                </div>
            </template>
        </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
import Header from './Bar.vue'
    export default {
        components:{
            Header
        },
        data() {
            return{
                name: 'product',
                value: 0,
                option: [
                { text: '全部分类', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
                ],
                cateList:{
                    1:11,
                    2:22
                },
                price:{
                    now:105,
                    origin:1005
                },
                product_title:'xxxxxxxxxxxxxx'
            }
        }
    }
</script>

<style scoped>
.van-grid{
    margin: 12px 2%;
}
.van-dropdown-menu span{
    margin: 0 5px;
}
.price{
    text-align: left;
}
.van-grid-item .origin{
    text-decoration: line-through;
    padding-left: 40%;
}
</style>