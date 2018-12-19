<template>
    <div class="systemIndex">
        <el-col :span="24">
            <span class="title">系统首页</span>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'systemIndex'
    }
</script>

<style scoped lang="less">
    .systemIndex {
        .el-col-24 {
            height: 39px;
            line-height: 39px;
            background-color: #EFEFEF;
            .title {
                font-size: 14px;
                font-weight: bold;
                color: #595757;
                &:before {
                    content: '||';
                    height: 19px;
                    background-color: #5BC0BF;
                    color: #5BC0BF;
                    margin-right: 20px;
                    margin-left: 5px;
                }
            }
        }
    }
</style>