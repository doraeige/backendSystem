<template>
    <div class="brandManagement">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'brandManagement',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '品牌管理'
            }
        }
    }
</script>

<style scoped lang="less">
@import '../../../assets/common.less';
</style>