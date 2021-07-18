<template>
<div>
  <Header :title="name"></Header>
  <div class="image" :style="imgURL">
    <div class="price">

    </div>
  </div>
  <van-cell-group  v-model="active">
  <van-cell title="360行车记录仪 G300 迷你隐藏 高清夜视 无限车速 黑灰色">
    <template #right-icon>
      <img class="icon" @click="changeIcon"
      :src="active ? require('../assets/images/已收藏.png') : require('../assets/images/收藏.png')">
    </template>
  </van-cell>
  <van-cell title="6月10日秒杀价308元，报价618，买贵退差价！360行车记录仪，超300万车主的选择"></van-cell>
  </van-cell-group>
  <van-cell-group v-model="show">
    <van-cell is-link></van-cell>
    <van-cell is-link @click="showSku"></van-cell>
  </van-cell-group>
  <!-- 选择商品属性 -->
  <van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :quota="quota"
  :quota-used="quotaUsed"
  :hide-stock="sku.hide_stock"
  :message-config="messageConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
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
      name:'商品详情',
      imgURL:{
        // backgroundImage:'url(' + require('../assets/banner.png') + ')'
        backgroundImage:`url(${require('../assets/images/banner.png')})`
      },
      active:0,
      show: 0,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
    }
  },
  methods: {
    changeIcon() {
      this.active == 0  ? this.active = 1 : this.active = 0
    },
    showSku() {
      this.show == 0 ? this.show = 1 : this.show = 0
    }
  }
}
</script>

<style scoped>
.image{
  width: 100%;
  height: 225px;
}
.price{
  height: 48px;
  background: rgba(0,0,0,0.50);
  position: relative;
  bottom: 0;
}
.icon{
  height: 24px;
  width: 24px;
  padding: 10px 0 0 20px;
}
.van-cell{
  font-size: 18px;
  text-align: left;
}
.van-cell:last-child{
  padding-top: 0;
  font-size: 12px;
  color: #999999;
  line-height: 18px;
}
</style>