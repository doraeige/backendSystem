<template>
    <div class="arrivalReminder">
        <common-nav :title="title"></common-nav>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'arrivalReminder',
        components: {
            CommonNav
        },
        data() {
            return {
                title: '到货提醒'
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
</style>