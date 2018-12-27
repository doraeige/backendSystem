<template>
    <div class="shopType">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'shopType',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '商品类型'
            }
        }
    }
</script>

<style scoped lang="less">
@import '../../../assets/common.less';
</style>