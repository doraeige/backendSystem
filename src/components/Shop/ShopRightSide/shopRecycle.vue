<template>
    <div class="shopRecycle">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'shopRecycle',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '商品回收站'
            }
        }
    }
</script>

<style scoped lang="less">
@import '../../../assets/common.less';
</style>