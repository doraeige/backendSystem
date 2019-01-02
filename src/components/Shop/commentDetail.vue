<template>
    <div class="commentDetail">
        <div class="nav">
            <div class="header">
                <common-nav :title="title"></common-nav>
                <div class="right-side">
                    <el-button icon="el-icon-close" @click="toCommentPage">关闭</el-button>
                    <el-button icon="el-icon-refresh">刷新</el-button>
                    <!-- <span><i class="el-input__icon el-icon-close"></i></span>
                    <span><i class="el-input__icon el-icon-refresh"></i>刷新</span> -->
                </div>
            </div>
        </div>
        ssss
    </div>
</template>

<script>
    import CommonNav from '../common/CommonNav.vue'
    export default {
        name: "commentDetail",
        components: {
            CommonNav
        },
        data() {
            return {
                title: '评价详情'
            }
        },
        methods: {
            toCommentPage() {
                this.$router.push({ name: 'shopComment'})
            }
        },
        created() {
            this.$store.commit('hiddenLeftSide')
        }
    }
</script>

<style scoped lang="less">
    .nav {
        width: 100%;
        height: 39px;
        background-color: #EFEFEF;
        .header {
            width: 752px;
            margin: 0 auto;
            position: relative;
            .right-side {
                position: absolute;
                right: 0;
            }
        }
    }
</style>