<template>
    <div>
        <!-- footer -->
        <footer>
            <van-tabbar v-model="active" active-color="#515151" route>
                <van-tabbar-item replace to="/">
                    <span>商城</span>
                    <template #icon="props">
                        <img :src="props.active ? require('../assets/images/选中商城.png') : require('../assets/images/商城.png')">
                    </template>
                </van-tabbar-item>
                <van-tabbar-item replace to="/user">
                    <span>我的</span>
                    <template #icon="props">
                        <img :src="props.active ? require('../assets/images/选中用户.png') : require('../assets/images/用户.png')">
                    </template>
                </van-tabbar-item>
            </van-tabbar>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                active: 0
            }
        }
    }
</script>

<style scoped>

</style>