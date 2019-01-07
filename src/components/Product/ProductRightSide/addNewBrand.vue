<template>
    <div class="addNewBrand">
        <common-nav :title="title" :show="show"></common-nav>
        <el-row class="common">
            <el-col :span="22" class="list-header">
                <div class="grid-content bg-purple">添加分类</div>
            </el-col>
            <el-col :span="22">
                <el-form ref="form" :model="form" label-width="125px">
                    <el-form-item label="品牌名称" required>
                        <el-col :span="9">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="品牌首字母">
                        <el-col :span="9">
                            <el-input v-model="form.letter"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="品牌LOGO" required>
                        <el-upload action="" multiple :limit="3">
                            <el-button class="el-icon-upload" size="small" type="primary">&nbsp;选择上传文件</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png格式文件，文件不能超过50kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="品牌专区大图">
                        <el-upload action="" multiple :limit="3">
                            <el-button class="el-icon-upload" size="small" type="primary">&nbsp;选择上传文件</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png格式文件，文件不能超过50kb</div>
                        </el-upload>
                    </el-form-item>
                    </el-form-item>
                        <el-form-item label="品牌故事">
                        <el-col :span="16">
                            <el-input type="textarea" v-model="form.desc" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-col :span="9">
                            <el-input v-model="form.sort"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="是否显示">
                        <el-radio-group v-model="form.show">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                        <p class="el-upload__tip">当品牌下还没有商品的时候，分类页的品牌区将不会显示该品牌。</p>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'addNewBrand',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '添加新品牌',
                show: true,
                form: {
                    name: '',
                    letter: '',
                    desc: '',
                    show: '',
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
    @import '../../../assets/common.less';
    .addNewBrand /deep/ .el-textarea__inner {
        height: 175px;
    }
    .addNewBrand /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        border-color: @color;
        background-color: @color;
    }
    .addNewBrand /deep/ .el-radio__input.is-checked .el-radio__inner {
        border-color: @color;
        background-color: #fff;
    }
    .addNewBrand /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: @color;
    }
    .addNewBrand /deep/ .el-radio__inner::after {
        width: 8px;
        height: 8px;
        background-color: @color;
    }
    .addNewBrand /deep/ .el-upload__tip {
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
                width: 224px;
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