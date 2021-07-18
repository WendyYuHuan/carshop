<template>
  <div id="home">
      <!-- <Header :title="name"></Header> -->
      <Banner></Banner>
      <!-- 导航栏 -->
      <van-grid :column-num="4" clickable :border="false" square>
      <van-grid-item @click="jump()">
          <van-image :src="require('../assets/images/icon_车载电器@3x.png')"/>
          <span>车载电器</span>
      </van-grid-item>
      <van-grid-item >
          <van-image :src="require('../assets/images/icon_车行辅助@3x.png')" />
          <span>车行辅助</span>
      </van-grid-item>
      <van-grid-item >
          <van-image :src="require('../assets/images/icon_汽车装饰@3x.png')" />
          <span>汽车装饰</span>
      </van-grid-item>
      <van-grid-item >
          <van-image :src="require('../assets/images/icon_行车安全@3x.png')" />
          <span>行车安全</span>
      </van-grid-item>
      <van-grid-item >
          <van-image :src="require('../assets/images/其他@3x.png')" />
          <span>工具/其他</span>
      </van-grid-item>
      <van-grid-item >
          <van-image :src="require('../assets/images/icon_维修养护@3x.png')" />
          <span>维修养护</span>
      </van-grid-item>
      <van-grid-item >
          <van-image :src="require('../assets/images/icon_美容清洗@3x.png')" />
          <span>美容清洗</span>
      </van-grid-item>
      <van-grid-item >
          <van-image :src="require('../assets/images/icon_功能小件@3x.png')" />
          <span>功能小件</span>
      </van-grid-item>
      </van-grid>
      <!-- 秒杀功能 -->
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Bar.vue'
import Banner from '../components/Banner.vue'
import Footer from '../components/Footer.vue'
    export default {
        components: {
            Header,
            Banner,
            Footer
        },
        data() {
            return{
                name:''
            }
        },
        methods: {
          jump(data){
            this.$router.push('')
          }
        },
        
    }
</script>

<style scoped>
.van-image{
    width: 50%;
    height: 50%;
}
.van-grid-item span{
    color: #333333;
    font-size: 12px;
    padding-top: 8px;
}
#home /deep/ .van-grid-item__content{
    padding: 0;
}
</style>