<template>
    <div class="parameterList">
        <!-- <common-nav :title="title" :show="show"></common-nav> -->
        <nav>顶部导航</nav>
        <aside>
            <router-view></router-view>
        </aside>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import CommonNav from '../../../common/CommonNav.vue'
    export default {
        name: 'parameterList',
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