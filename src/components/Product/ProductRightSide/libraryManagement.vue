<template>
    <div class="libraryManagement">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'libraryManagement',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '图片库管理'
            }
        }
    }
</script>

<style scoped lang="less">
@import '../../../assets/common.less';
</style>