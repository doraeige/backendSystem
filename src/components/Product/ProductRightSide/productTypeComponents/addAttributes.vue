<template>
    <div class="addAttributes">
        <common-nav :title="title" :show="show"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../../common/CommonNav.vue'
    export default {
        name: 'addAttributes',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '属性列表',
                show: true,
                tableData: [],
                currentPage: 1,
                pagesize: 10
            }
        },
    }
</script>

<style scoped lang="less">
    @import '../../../../assets/common.less';
</style>