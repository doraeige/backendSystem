<template>
    <div class="shopList" v-cloak>
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
                <div class="inquireDiv" v-show="isClick">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="输入搜索" style="margin-left: 20px;">
                            <el-input v-model="formInline.input" placeholder="商品名称/商品货号"></el-input>
                        </el-form-item>
                        <el-form-item label="商品分类" style="margin-left: 20px;">
                            <el-select 
                                v-model="formInline.value"
                                placeholder="请选择商品分类">
                                <el-option
                                    v-for="item in formInline.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="商品品牌" style="margin-left: 20px;">
                           <el-select
                                v-model="formInline.value1"
                                default-first-option
                                placeholder="请选择品牌">
                                <el-option
                                    v-for="item in formInline.options1"
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
        <el-row class="common">
            <el-col :span="12" class="list-header">
                <div class="grid-content bg-purple">数据列表</div>
            </el-col>
            <el-table
                ref="multipleTable"
                :data="tableData.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
                border
                :row-key="getRowKeys"
                @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    :reserve-selection="true"
                    width="55">
                </el-table-column>
                <el-table-column
                    prop="number"
                    label="编号"
                    width="90">
                </el-table-column>
                <el-table-column
                    label="商品图片"
                    width="120">
                    <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="商品图片" width="92" height="66" >
                    </template>
                </el-table-column>
                <el-table-column
                    label="商品名称"
                    width="120">
                    <template slot-scope="scope">
                        {{ scope.row.shopName }}
                        品牌：{{ scope.row.shopBrand }}
                    </template>
                </el-table-column>
                <el-table-column
                    label="价格/货号"
                    width="105">
                    <template slot-scope="scope">
                        价格：￥{{ scope.row.price }}
                        货号：{{ scope.row.shopNum }}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="tag"
                    label="标签"
                    width="80">
                    <template slot-scope="scope">
                        上架 <el-switch v-model="scope.row.value1" active-color="#13ce66"></el-switch>
                        <span class="status">新品</span> <el-switch v-model="scope.row.value2" active-color="#13ce66"></el-switch>
                        <span class="status">推荐</span> <el-switch v-model="scope.row.value3" active-color="#13ce66"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="sort"
                    label="排序"
                    width="60">
                </el-table-column>
                <el-table-column
                    label="SKU库存"
                    width="70">
                    <template slot-scope="scope">
                        <i class="iconfont icon-bianji"></i>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="sale"
                    label="销量"
                    width="70">
                </el-table-column>
                <el-table-column
                    label="审核状态"
                    width="76">
                    <template slot-scope="scope">
                        {{ scope.row.status }}
                        <p class="status">审核详情</p>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span class="scope-text">查看</span>
                        <span class="scope-text">编辑</span>
                        <span class="scope-text">日志</span>
                        <span class="scope-text danger">删除</span>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                background
                :page-sizes="[5, 10, 20, 30, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length">    
            </el-pagination>
            <div class="left-side">
                    <el-checkbox :indeterminate="indeterminate" v-model="checkAll">全选</el-checkbox>
                    <el-select v-model="value" placeholder="批量操作" class="select-input">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                    <el-button size="mini" @click="onSubmit">确定</el-button>
                </div>
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
                // checkAll: false,
                // isIndeterminate: false,
                formInline: {
                    input: '',
                    value: [],
                    value1: [],
                    options: [
                        {
                            value: '选项1',
                            label: '裤子'
                        }, {
                            value: '选项2',
                            label: '大衣'
                        }, {
                            value: '选项3',
                            label: '上衣'
                        }, {
                            value: '选项4',
                            label: '外套'
                        }, {
                            value: '选项5',
                            label: '帽子'
                        }
                    ],
                    options1: [
                        {
                            value: '选项1',
                            label: '南极人'
                        }, {
                            value: '选项2',
                            label: '优衣库'
                        }, {
                            value: '选项3',
                            label: '海澜之家'
                        }, {
                            value: '选项4',
                            label: 'H&M'
                        }
                    ]
                },
                multipleSelection: [],
                pageArr: [],
                tableData: [],
                currentPage: 1,
                pagesize: 5,
                page: 1,
                options: [
                    {
                        value: '选项1',
                        label: '商品上架'
                    }, {
                        value: '选项2',
                        label: '商品下架'
                    }, {
                        value: '选项3',
                        label: '设为推荐'
                    }, {
                        value: '选项4',
                        label: '取消推荐'
                    }, {
                        value: '选项5',
                        label: '设为新品'
                    }, {
                        value: '选项6',
                        label: '取消新品'
                    }
                ],
                value: ''
            }
        },
        methods: {
            getRowKeys(row) {
                return row.number
            },
            handleClickStatu: function() {
                this.isClick = !this.isClick
            },
            handleSelectionChange(val) {
                console.log(val)
                // let vlength = val.length
                this.multipleSelection = val
                console.log(this.multipleSelection)
            //     console.log(this.checkAll)
            //     this.checkAll = vlength === this.pagesize
            //     console.log(this.checkAll)
            //     this.isIndeterminate = vlength > 0 && vlength < this.pagesize
            //     console.log(this.isIndeterminate)
            },
            // handleCheckAllChange() {
            //     console.log(this.checkAll)
            //     console.log(this.isIndeterminate) 
            //     this.$refs.multipleTable.toggleAllSelection()
            //     this.isIndeterminate = false
            // },
            handleSizeChange(psize) {
                console.log(psize)
                this.pagesize = psize
            },
            handleCurrentChange(cpage) {
                console.log(cpage)
                this.currentPage = cpage
            },
            onSubmit() {
                console.log('submit')
            }
        },
        computed: {
            indeterminate(){
                // this.pageArr = this.multipleSelection.slice((this.currentPage - 1) * this.pagesize,this.currentPage * this.pagesize)
                // console.log(this.pageArr)
                // console.log(this.currentPage)
                // if (this.currentPage > 1) {
                //     return this.pageArr.length < this.pagesize && this.pageArr.length >= 0
                // } else {
                //     return this.pageArr.length < this.pagesize && this.pageArr.length > 0
                // }
                return this.multipleSelection.length < this.pagesize && this.multipleSelection.length > 0
                
            },
            checkAll: {
                get() {
                    this.pageArr = this.multipleSelection.slice((this.currentPage - 1) * this.pagesize,this.currentPage * this.pagesize)
                    return this.pageArr.length === this.pagesize
                },
                set(val) {
                    this.$refs.multipleTable.toggleAllSelection(val)
                }
            }
        },
        mounted() {
            this.axios.get('/shoplist').then(res => {
                // console.log(res.data)
                if(res.data.success){
                    this.tableData = res.data.data.tableData
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
    .shopList /deep/ .el-col-12 {
        width: 960px;
    }
    .shopList /deep/ .el-input__inner {
        height: 28px;
        line-height: 28px;
    }
    .shopList /deep/ .el-input__icon {
        line-height: 0;
    }
    .shopList /deep/ .el-table .cell {
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }
    .shopList /deep/ .el-button--mini {
        padding: 7px 8px;
        margin-top: 6px;
        margin-left: 5px;
    }
    .shopList /deep/ .el-pagination .el-select .el-input .el-input__inner {
        margin-top: -3px;
    }
    .shopList /deep/ .el-pagination__total {
        margin-right: 2px;
    }
    .shopList /deep/ .el-pagination__sizes {
        margin-right: 0;
    }
    .shopList /deep/ .el-pagination.is-background .el-pager li {
        margin: 0 2px;
    }
    .shopList /deep/ .el-pagination.is-background .btn-next {
        margin: 0 2px;
    }
    .shopList /deep/ .el-pagination.is-background .btn-pre {
        margin: 0 2px;
    }
    .shopList /deep/ .el-pagination__jump {
        margin-left: 0;
    }
    .shopList /deep/ .el-pagination__editor.el-input {
        width: 40px;
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
            padding-left: calc((100% - 960px) / 2);
            .bg-purple {
                position: relative;
                border: @border;
                background-color: #F7F8F8;
                .inquire {
                    position: absolute;
                    right: 200px;
                }
                .right {
                    position: absolute;
                    right: 8px;
                    top: 3px;
                }
            }
            .inquireDiv {
                height: 40px;
                line-height: 40px;
                border: @border;
                font-size: 12px;
            }
            .el-table {
                width: 960px;
                font-size: 12px;
                .status {
                    color: @color;
                }
                .icon-bianji {
                    color: @color;
                    font-weight: bold;
                }
                .scope-text {
                    display: inline-block;
                    margin: 8px;
                    color: @color;
                    text-decoration: underline;
                }
                .danger {
                    color: #D23029;
                }
            }  
            .list-header {
                margin-top: @margin-top;
            }
            .el-pagination {
                text-align: right;
                width: 948px !important;
                background-color: #F7F8F8;
                border: @border;
                border-top: 0;
            }
            .left-side {
                position: absolute;
                bottom: -4px;
                margin-left: 20px;
                .flex;
                .el-select {
                    box-sizing: border-box;
                    margin-left: 10px;
                    margin-bottom: 2px;
                    width: 110px;
                }
                .el-button--mini {
                    margin-bottom: 7px;
                }
            }
        }
        
    }
</style>