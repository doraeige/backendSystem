<template>
    <div class="addClassification">
        <common-nav :title="title" :show="show"></common-nav>
        <el-row class="common">
            <el-col :span="22" class="list-header">
                <div class="grid-content bg-purple">添加分类</div>
            </el-col>
            <el-col :span="22">
                <el-form ref="form" :model="form" label-width="125px">
                    <el-form-item label="分类名称" required>
                        <el-col :span="9">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="上级分类">
                        <el-select v-model="form.region" class="sub-headings" placeholder="请选择分类">
                            <el-option label="服装" value="服装"></el-option>
                            <el-option label="配件" value="配件"></el-option>
                            <el-option label="餐厨" value="餐厨"></el-option>
                            <el-option label="居家" value="居家"></el-option>
                            <el-option label="洗护" value="洗护"></el-option>
                        </el-select>
                        <p class="el-upload__tip">不选择分类默认为顶级分类</p>
                    </el-form-item>
                    <el-form-item label="数量单位">
                        <el-col :span="9">
                            <el-input v-model="form.number"></el-input>
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
                    </el-form-item>
                    <el-form-item label="是否显示在导航栏">
                        <el-radio-group v-model="form.navshow">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="分类图标">
                        <el-upload action="" multiple :limit="3">
                            <el-button class="el-icon-upload" size="small" type="primary">&nbsp;选择上传文件</el-button>
                            <div slot="tip" class="el-upload__tip">图标尺寸为18*18比例，大小不能超过200KB，图片只能为jpg、png、gif格式</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="筛选属性">
                        <el-select v-model="form.value1" placeholder="服装">
                            <el-option
                            v-for="item in form.options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>

                        <el-select
                            v-model="form.value2"
                            collapse-tags
                            style="margin-left: 20px;"
                            placeholder="尺寸">
                            <el-option
                            v-for="item in form.options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="">
                        <el-select v-model="form.value1" placeholder="选择属性类型">
                            <el-option
                            v-for="item in form.options1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>

                        <el-select
                            v-model="form.value2"
                            collapse-tags
                            style="margin-left: 20px;"
                            placeholder="选择筛选属性">
                            <el-option
                            v-for="item in form.options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="关键词">
                        <el-col :span="9">
                            <el-input v-model="form.keyword"></el-input>
                        </el-col>
                    </el-form-item>
                        <el-form-item label="分类描述">
                        <el-col :span="16">
                            <el-input type="textarea" v-model="form.desc" placeholder="请输入内容"></el-input>
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
        name: 'addClassification',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '添加分类',
                show: true,
                form: {
                    name: '',
                    number: '',
                    region: '',
                    sort: '',
                    show: false,
                    navshow: false,
                    type: [],
                    keyword: '',
                    desc: '',
                    value1: '',
                    value2: '',
                    options1: [
                        {
                            value: '选项1',
                            label: '服装'
                        }, {
                            value: '选项2',
                            label: '餐厨'
                        }, {
                            value: '选项3',
                            label: '配件'
                        }, {
                            value: '选项4',
                            label: '洗护'
                        }, {
                            value: '选项5',
                            label: '婴童'
                        }
                    ],
                    options2: [
                        {
                            value: '选项1',
                            label: '尺寸'
                        }, {
                            value: '选项2',
                            label: '颜色'
                        }
                    ],
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
    .addClassification /deep/ .el-textarea__inner {
        height: 175px;
    }
    .addClassification /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        border-color: @color;
        background-color: @color;
    }
    .addClassification /deep/ .el-radio__input.is-checked .el-radio__inner {
        border-color: @color;
        background-color: #fff;
    }
    .addClassification /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: @color;
    }
    .addClassification /deep/ .el-radio__inner::after {
        width: 8px;
        height: 8px;
        background-color: @color;
    }
    .addClassification /deep/ .el-upload__tip {
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