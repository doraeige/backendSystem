<template>
    <div class="refundRequestProcessing">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'refundRequestProcessing',
        components: {
            CommonNav
        },
        data() {
            return {
                title: '退款申请处理'
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
</style>