<template>
    <div class="productType">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'productType',
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