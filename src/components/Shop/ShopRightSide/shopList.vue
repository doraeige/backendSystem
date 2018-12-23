<template>
    <div class="shopList">
        <common-nav :title="title"></common-nav>
        <el-row>
            <el-col  class="shopStatus common">
                <el-button type="primary">全部商品(<span>1000</span>)</el-button>
                <el-button>已上架(<span>1000</span>)</el-button>
                <el-button>未上架(<span>1000</span>)</el-button>
                <el-button>待审核(<span>1000</span>)</el-button>
                <el-button>未通过(<span>1000</span>)</el-button>
            </el-col>
        </el-row>
        <el-row class="common">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <i class="el-icon-search">筛选查询</i>
                    <span class="inquire">
                        <i class="el-icon-arrow-up" v-show="isClick" @click="handleClickStatu">收起筛选</i>
                        <i class="el-icon-arrow-down" v-show="!isClick" @click="handleClickStatu">收起筛选</i>
                    </span>
                    <el-radio-group size="small" class="right">
                        <el-radio-button label="left">查询结果</el-radio-button>
                        <el-radio-button label="right">高级检索</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="inquireDiv">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="输入搜索" style="margin-left: 10px;">
                            <el-input v-model="formInline.input" placeholder="商品名称/商品货号"></el-input>
                        </el-form-item>
                        <el-form-item label="商品分类" style="margin-left: 10px;">
                            <el-select 
                                v-model="formInline.value"
                                filterable
                                placeholder="请选择商品分类">
                                <el-option
                                    v-for="item in formInline.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="商品品牌" style="margin-left: 10px;">
                           <el-select
                                v-model="formInline.value1"
                                filterable
                                default-first-option
                                placeholder="请选择品牌">
                                <el-option
                                    v-for="item in formInline.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        </el-form>
                </div>               
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'shopList',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '商品列表',
                isClick: false,
                input: '',
                formInline: {
                    input: '',
                    value: [],
                    value1: [],
                    options: [
                        {
                            value: '选项1',
                            label: '黄金糕'
                        }, {
                            value: '选项2',
                            label: '双皮奶'
                        }, {
                            value: '选项3',
                            label: '蚵仔煎'
                        }, {
                            value: '选项4',
                            label: '龙须面'
                        }, {
                            value: '选项5',
                            label: '北京烤鸭'
                        }
                    ] 
                }
            }
        },
        methods: {
            handleClickStatu: function() {
                this.isClick = !this.isClick
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
    .shopList /deep/ .el-col-12 {
        width: 870px;
    }
    .shopList /deep/ .el-input__inner {
        height: 30px;
        line-height: 30px;
    }
    .shopList {
        .shopStatus {
            margin-top: @margin-top;
            margin-bottom: @margin-top;
            .el-button--primary {
                background: @color;
                border-color: @color;
            }
        }
        .common {
            padding-left:calc((100% - 870px) / 2);
            .bg-purple {
                position: relative;
                border: @border;
                background-color: #F7F8F8;
                .inquire {
                    position: absolute;
                    right: 200px;
                    top: 2px;
                }
                .right {
                    position: absolute;
                    right: 8px;
                    top: 4.5px;
                }
            }
            .inquireDiv {
                height: 40px;
                line-height: 40px;
                border: @border;
                font-size: 12px;
            }          
        }
    }
</style>