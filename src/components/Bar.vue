<template>
    <div id="header">
        <van-nav-bar left-arrow @click-left="onClickLeft">
            <template #title>
                <span>{{title}}</span>
            </template>
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
div{
    background: #ffffff;
    width: 100%;
    height: 44px;
}
#header /deep/ .van-nav-bar .van-icon{
    color: #333333;
}
span{
    color: #333333;
}
</style>