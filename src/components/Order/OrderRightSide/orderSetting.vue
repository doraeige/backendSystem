<template>
    <div class="orderSetting">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'orderSetting',
        components: {
            CommonNav
        },
        data() {
            return {
                title: '订单设置'
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
</style>