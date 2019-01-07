<template>
    <div class="confirmGoods">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'confirmGoods',
        components: {
            CommonNav
        },
        data() {
            return {
                title: '确认收货'
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
</style>