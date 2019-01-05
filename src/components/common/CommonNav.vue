<template>
    <div class="CommonNav">
        <el-col :span="24">
            <span class="title">{{title}}</span>
            <div class="right-side">
                <el-button v-show="show" icon="el-icon-back" size="small" @click="goBack">返回</el-button>
                <el-button icon="el-icon-refresh" size="small" @click="refresh">刷新</el-button>
            </div>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'CommonNav',
        props: {
            title: String,
            show: Boolean
        },
        inject: ['reload'], // 页面刷新
        methods: {
            goBack () {
                this.$router.go(-1)
            },
            refresh() {
                this.reload()
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/common.less';
    .CommonNav /deep/ .el-button:focus, .el-button:hover {
        color: @color;
        border-color: @color;
        background-color: #fff;
    }
    .CommonNav {
        width: 100%;
        height: 39px;
        .el-col-24 {
            height: 39px;
            line-height: 39px;
            background-color: #EFEFEF;
            position: relative;
            .title {
                font-size: 14px;
                font-weight: bold;
                color: @text-color;
                &:before {
                    content: '||';
                    height: 19px;
                    background-color: @color;
                    color: @color;
                    margin-right: @margin-top;
                    margin-left: @margin-top / 4;
                }
            }
            .right-side {
                position: absolute;
                top: 0;
                right: 10px;
                line-height: 35px;
            }
        }
    }   
</style>