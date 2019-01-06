<template>
    <div class="addParameter">
        <common-nav :title="title" :show="show"></common-nav>
         <el-row class="common">
            <el-col :span="22" class="list-header">
                <div class="grid-content bg-purple">添加属性</div>
            </el-col>
            <el-col :span="22">
                <el-form ref="form" :model="form" label-width="180px">
                    <el-form-item label="参数名称" required>
                        <el-col :span="9">
                            <el-input v-model="form.name" placeholder="上市年份"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="商品类型">
                        <el-select v-model="form.type" class="sub-headings" placeholder="请选择类型">
                            <el-option label="服装" value="服装"></el-option>
                            <el-option label="配件" value="配件"></el-option>
                            <el-option label="餐厨" value="餐厨"></el-option>
                            <el-option label="居家" value="居家"></el-option>
                            <el-option label="洗护" value="洗护"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="能否进行检索">
                        <el-radio-group v-model="form.search">
                            <el-radio label="不需要检索"></el-radio>
                            <el-radio label="关键字检索"></el-radio>
                            <el-radio label="范围检索"></el-radio>
                        </el-radio-group>
                        <el-col :span="20">
                             <p class="tip">不需要该属性成为检索商品条件的情况请选择不需要检索，需要该属性进行关键字检索商品时选择关键字检索，如果该属性检索时希望是指定某个范围时，选择范围检索。</p> 
                        </el-col>
                    </el-form-item>
                    <el-form-item label="相同参数值的商品是否关联">
                        <el-radio-group v-model="form.link">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="参数录入方式">
                        <el-radio-group v-model="form.way">
                            <el-radio label="手动录入"></el-radio>
                            <el-radio label="多选参数"></el-radio>
                            <el-radio label="单选参数"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="参数列表">
                        <el-checkbox-group v-model="form.list">
                            <el-checkbox label="2013年"></el-checkbox>
                            <el-checkbox label="2014年"></el-checkbox>
                            <el-checkbox label="2015年"></el-checkbox>
                            <el-checkbox label="2016年"></el-checkbox>
                            <el-checkbox label="2017年"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="参数排序">
                        <el-col :span="9">
                            <el-input v-model="form.sort"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
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
                form: {
                    name: '',
                    type: '',
                    style: '',
                    search: '',
                    link: '',
                    list: [],
                    sort: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!')
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../../assets/common.less';
    .addParameter /deep/ .el-textarea__inner {
        height: 175px;
    }
    .addParameter /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        border-color: @color;
        background-color: @color;
    }
    .addParameter /deep/ .el-radio__input.is-checked .el-radio__inner {
        border-color: @color;
        background-color: #fff;
    }
    .addParameter /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: @color;
    }
    .addParameter /deep/ .el-radio__inner::after {
        width: 8px;
        height: 8px;
        background-color: @color;
    }
    .addParameter /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
        color: @color;
    }
    .common {
        margin-top: 20px;
        padding-left: calc((100% - 924px) / 2);
        .bg-purple {
            position: relative;
            border: @border;
            background-color: #F7F8F8;
        }
        .el-form {
            border: @border;
            box-sizing: border-box;
            padding: 50px 0 10px 150px;
            .sub-headings {
                width: 216px;
            }
            .el-button--primary {
                border-color: @color;
                background-color: @color;
                &:hover {
                    background-color: rgba(91,192,191,0.9);
                }
            }
            .tip {
                font-size: 12px;
                color: #9FA0A0;
                line-height: 20px;
            }
        }
    }
</style>