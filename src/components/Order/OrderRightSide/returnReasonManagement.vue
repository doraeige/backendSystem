<template>
    <div class="returnReasonManagement">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'returnReasonManagement',
        components: {
            CommonNav
        },
        data() {
            return {
                title: '退货原因管理'
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
</style>