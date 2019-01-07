<template>
    <div class="returnApplicationProcessing">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'returnApplicationProcessing',
        components: {
            CommonNav
        },
        data() {
            return {
                title: '退货申请处理'
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
</style>