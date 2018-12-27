<template>
    <div class="shopComment">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'shopComment',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '商品评价'
            }
        }
    }
</script>

<style scoped lang="less">
@import '../../../assets/common.less';
</style>