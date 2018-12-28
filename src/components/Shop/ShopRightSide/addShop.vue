<template>
    <div class="addShop">
        <common-nav :title="title"></common-nav>
        <div class="wrapper">
            <el-row>
                <el-col :span="24">
                    <!-- finish-status="success" -->
                    <el-steps :space="300" :active="step" finish-status="success" align-center>
                        <el-step title="选择商品分类"></el-step>
                        <el-step title="填写商品信息"></el-step>
                        <el-step title="填写商品属性"></el-step>
                    </el-steps>
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </el-row>
            <div class="btnDiv">
                <el-button class="btn" @click.native.prevent="handlePreStep" v-show="preStep">
                    上一步,
                    <span v-show="step == 1">{{step0}}</span>
                    <span v-show="step == 2">{{step1}}</span>
                </el-button>
                <el-button class="btn" @click.native.prevent="handleNextStep" v-show="nextStep" type="primary">
                    下一步,
                    <span v-show="step == 0">{{step1}}</span>
                    <span v-show="step == 1">{{step2}}</span>
                </el-button>
                <el-button class="btn" @click.native.prevent="handlePublish" v-show="publish">完成，提交商品</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'addShop',
        components: {
            CommonNav
        },
        data(){        
            return {
                title: '添加商品',
                step: 0,
                step0: '选择商品分类',
                step1: '选择商品信息',
                step2: '填写商品属性',
                isRouter: false,
                preStep: false,
                nextStep: true,
                publish: false
            }
        },
        methods: {
            handlePreStep() {
                this.$router.go(-1)
                this.step --
                this.goStep(this.step)
            },
            handleNextStep() {
                this.$router.push('/addShop/step' + (this.step + 1))
                setTimeout(() => {
                    if (this.isRouter) {
                        this.step ++
                        this.goStep(this.step)
                    }
                })
            },
            handlePublish() {
                console.log('发布')
            },
            goStep(n) {
                this.preStep = n == 0 ? false : (n == 1 ? true : true)
                this.nextStep = n == 0 ? true : (n == 1 ? true : false)
                this.publish = n == 0 ? false : (n == 1 ? false : true)
            }
        },
        watch:{
            '$route'(to,from) {
                this.isRouter = true
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
    .addShop /deep/ .el-step__icon {
        width: @margin-top * 2.2;
        height: @margin-top * 2.2;
        font-size: @margin-top * 1.4;
        background-color: @color;
        color: #fff;
        border-color: @color;
        margin-top: 23px;
    }
    .addShop /deep/ .el-step.is-horizontal .el-step__line {
        top: 43px;
    }
    .addShop /deep/ .el-step__title.is-process {
        color: @color;
    }
    .addShop /deep/ .el-step__title.is-success {
        color: @color;
    }
    .addShop /deep/ .el-step__head.is-success {
        color: @color;
        border-color: @color;
    }
    .wrapper {
        width: 900px;
        margin: 0 auto;  
        box-sizing: border-box;
        .btnDiv {
            .flex;
        }
        .btn {
            width: 176px;
            text-align: center;
            margin-top: @margin-top;
            background-color: @color;
            border-color: @color;
            color: #fff;
        }
    }
</style>