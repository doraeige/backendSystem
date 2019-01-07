<template>
    <div class="addAttributes">
        <common-nav :title="title" :show="show"></common-nav>
        <el-row class="common">
            <el-col :span="22" class="list-header">
                <div class="grid-content bg-purple">添加属性</div>
            </el-col>
            <el-col :span="22">
                <el-form ref="form" :model="form" label-width="150px">
                    <el-form-item label="属性名称" required>
                        <el-col :span="9">
                            <el-input v-model="form.name"></el-input>
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
                    <el-form-item label="分类筛选样式">
                        <el-radio-group v-model="form.style">
                            <el-radio label="普通"></el-radio>
                            <el-radio label="颜色"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="能否进行检索">
                        <el-radio-group v-model="form.search">
                            <el-radio label="不需要检索"></el-radio>
                            <el-radio label="关键字检索"></el-radio>
                            <el-radio label="范围检索"></el-radio>
                        </el-radio-group>
                        <p class="el-upload__tip">不需要该属性成为检索商品条件的情况请选择不需要检索，需要该属性进行关键字检索商品时选择关键字检索，如果该属性检索时希望是指定某个范围时，选择范围检索。</p>
                    </el-form-item>
                    <el-form-item label="相同属性值的商品是否关联">
                        <el-radio-group v-model="form.link">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="属性是否可选">
                        <el-radio-group v-model="form.chioce">
                            <el-radio label="唯一属性"></el-radio>
                            <el-radio label="单选属性"></el-radio>
                            <el-radio label="复选属性"></el-radio>
                        </el-radio-group>
                        <p class="el-upload__tip">选择"单选/复选属性"时，可以对商品该属性设置多个值，同时还能对不同属性值指定不同的价格加价，用户购买商品时需要选定具体的属性值。选择"唯一属性"时，商品的该属性值只能设置一个值，用户只能查看该值。</p>
                    </el-form-item>
                    <el-form-item label="该属性值的录入方式">
                        <el-radio-group v-model="form.way">
                            <el-radio label="手工录入"></el-radio>
                            <el-radio label="从下面的列表中选择(一行代表一个可选值)"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="属性值可选值列表">
                        <el-checkbox-group v-model="form.way">
                            <el-checkbox label="黑色"></el-checkbox>
                            <el-checkbox label="红色"></el-checkbox>
                            <el-checkbox label="白色"></el-checkbox>
                            <el-checkbox label="粉色"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="是否支持手动新增">
                        <el-radio-group v-model="form.add">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="属性排序">
                        <el-col :span="9">
                            <el-input v-model="form.sort"></el-input>
                        </el-col>
                        <el-col :span="24">
                            <p class="el-upload__tip">排序级别最高的属性可单独上传属性图片</p>
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
        name: 'addAttributes',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '添加属性',
                show: true,
                form: {
                    name: '',
                    type: '',
                    style: '',
                    search: '',
                    link: '',
                    chioce: '',
                    way: [],
                    add: '',
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
    .addAttributes /deep/ .el-textarea__inner {
        height: 175px;
    }
    .addAttributes /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        border-color: @color;
        background-color: @color;
    }
    .addAttributes /deep/ .el-radio__input.is-checked .el-radio__inner {
        border-color: @color;
        background-color: #fff;
    }
    .addAttributes /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: @color;
    }
    .addAttributes /deep/ .el-radio__inner::after {
        width: 8px;
        height: 8px;
        background-color: @color;
    }
    .addAttributes /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
        color: @color;
    }
    .addAttributes /deep/ .el-upload__tip {
        margin-top: 0;
        line-height: 20px;
        color: #9FA0A0;
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
            padding: 50px 0 10px 200px;
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
        }
    }
</style>