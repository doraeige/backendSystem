<template>
    <div class="orderList">
        <common-nav :title="title"></common-nav>
        
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'orderList',
        components: {
            CommonNav
        },
        data() {
            return {
                title: '订单列表'
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
</style>