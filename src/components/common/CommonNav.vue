<template>
    <div class="CommonNav">
        <el-col :span="24">
            <span class="title">{{title}}</span>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'CommonNav',
        props: {
            title: String
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/common.less';
    .el-col-24 {
        height: 39px;
        line-height: 39px;
        background-color: #EFEFEF;
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
    }
</style>