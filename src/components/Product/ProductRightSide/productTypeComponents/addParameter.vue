<template>
    <div class="addParameter">
        <common-nav :title="title" :show="show"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../../common/CommonNav.vue'
    export default {
        name: 'addParameter',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '添加参数',
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