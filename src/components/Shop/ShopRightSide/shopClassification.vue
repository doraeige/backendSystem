<template>
    <div class="shopClassification">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'shopClassification',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '商品分类'
            }
        }
    }
</script>

<style scoped lang="less">
@import '../../../assets/common.less';
</style>