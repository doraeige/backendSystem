<template>
    <div class="productList" v-cloak>
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
                    <el-button-group class="right">
                        <el-button size="small">查询结果</el-button>
                        <el-button size="small">高级检索</el-button>
                    </el-button-group>
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
                <el-table-column type="selection" :reserve-selection="true" width="55"></el-table-column>
                <el-table-column prop="number" label="编号" width="90"></el-table-column>
                <el-table-column label="商品图片" width="120">
                    <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="商品图片" width="92" height="66" >
                    </template>
                </el-table-column>
                <el-table-column label="商品名称" width="132">
                    <template slot-scope="scope">
                        <p class="scope-table_text">{{ scope.row.shopName }}</p>
                        <p class="scope-table_text">品牌：{{ scope.row.shopBrand }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="价格/货号" width="105">
                    <template slot-scope="scope">
                        <p class="scope-style">价格：￥{{ scope.row.price }}</p>
                        <p class="scope-style">货号：No{{ scope.row.shopNum }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="tag" label="标签" width="80">
                    <template slot-scope="scope">
                        <p>上架<el-switch v-model="scope.row.value1" active-color="#13ce66"></el-switch></p>
                        <p class="scope-status">新品<el-switch v-model="scope.row.value2" active-color="#13ce66"></el-switch></p>
                        <p class="scope-status">推荐<el-switch v-model="scope.row.value3" active-color="#13ce66"></el-switch></p>
                    </template>
                </el-table-column>
                <el-table-column prop="sort" label="排序" width="50"></el-table-column>
                <el-table-column label="SKU库存" width="70">
                    <template slot-scope="scope">
                        <el-popover
                            placement="right"
                            width="400"
                            trigger="click">
                            <el-table :data="gridData">
                                <el-table-column width="150" property="date" label="日期"></el-table-column>
                                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                                <el-table-column width="300" property="address" label="地址"></el-table-column>
                            </el-table>
                            <i slot="reference" class="iconfont icon-bianji"></i>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column prop="sale" label="销量" width="70"></el-table-column>
                <el-table-column label="审核状态" width="76">
                    <template slot-scope="scope">
                        {{ scope.row.status }}
                        <p class="scope-status">审核详情</p>
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
                <!-- :indeterminate="indeterminate" v-model="checkAll" @change="handleCheckAllChange" -->
                <el-checkbox :indeterminate="indeterminate" @change="handleCheckAllChange">全选</el-checkbox>
                <el-select v-model="itemId" placeholder="批量操作" class="select-input">
                    <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.id"></el-option>
                </el-select>
                <el-button size="mini" @click="onSubmit(itemId)">确定</el-button>
            </div>
        </el-row>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'productList',
        components: {CommonNav},
        data(){
            return {
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                title: '商品列表',
                isClick: false,
                checkAll: false,
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
                pagesize: 10,
                page: 1,
                options: [
                    {
                        id: 1,
                        label: '商品上架'
                    }, {
                        id: 2,
                        label: '商品下架'
                    }, {
                        id: 3,
                        label: '设为新品'
                    }, {
                        id: 4,
                        label: '取消新品'
                    }, {
                        id: 5,
                        label: '设为推荐'
                    }, {
                        id: 6,
                        label: '取消推荐'
                    }
                ],
                actions: {
                    '1': ['value1', true],
                    '2': ['value1', false],
                    '3': ['value2', true],
                    '4': ['value2', false],
                    '5': ['value3', true],
                    '6': ['value3', false]
                },
                itemId: '',
                getRowKeys(row) {
                    return row.number
                },
            }
        },
        methods: {
            /**
            * 按钮点击事件
            * @param {boolean} isClick: 是否收起筛选
            */
            handleClickStatu: function() {
                this.isClick = !this.isClick
            },
            /**
            * 按钮点击事件
            * @param {number} val: 选择的数据
            */
            handleSelectionChange(val) {
                this.multipleSelection = val
            },
            /**
            * 全选 按钮点击事件
            * 所有数据被选中
            */
            handleCheckAllChange() {
                if ( this.checkAll ) {
                    this.tableData.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row, false)
                    })
                    this.checkAll = false
                } else {
                    this.tableData.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row, true)
                    })
                    this.checkAll = true
                }      
            },
            /**
            * 按钮点击事件
            * @param {number} psize: 每页展示个数
            */
            handleSizeChange(psize) {
                console.log(psize)
                this.pagesize = psize
            },
            /**
            * 按钮点击事件
            * @param {number} cpage: 页码
            */
            handleCurrentChange(cpage) {
                console.log(cpage)
                this.currentPage = cpage
            },
            /**
            * 按钮点击事件
            * @param {number} status: 1 商品上架 2 商品下架 3 设为新品 4 取消新品 5 设为推荐 6 取消推荐
            * @param {array} multipleSelection 选中的数据
            * this.$set(item, value, boolean) Vue 数组更新检测 响应表格数据
            */
            onSubmit(status) {
                let action = this.actions[status]
                let value = action[0]
                let boolean = action[1]
                this.multipleSelection.forEach(item => this.$set(item, value, boolean))
            }
        },
        computed: {
            indeterminate(){
                return this.multipleSelection.length > 0 &&  this.multipleSelection.length < this.tableData.length
            }
        },
        mounted() {
            this.axios.get('/shoplist').then(res => {
                // console.log(res.data)
                if(res.data.error_code == 0){
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
    .productList /deep/ .el-col-12 {
        width: 960px;
    }
    .productList /deep/ .el-input__inner {
        height: 28px;
        line-height: 28px;
    }
    .productList /deep/ .el-input__icon {
        line-height: 0;
    }
    .productList /deep/ .el-table .cell {
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }
    .productList /deep/ .el-button--mini {
        padding: 7px 8px;
        margin-top: 6px;
        margin-left: 5px;
    }
    .productList /deep/ .el-pagination .el-select .el-input .el-input__inner {
        margin-top: -3px;
    }
    .productList /deep/ .el-pagination__total {
        margin-right: 2px;
    }
    .productList /deep/ .el-pagination__sizes {
        margin-right: 0;
    }
    .productList /deep/ .el-pagination.is-background .el-pager li {
        margin: 0 2px;
    }
    .productList /deep/ .el-pagination.is-background .btn-next {
        margin: 0 2px;
    }
    .productList /deep/ .el-pagination.is-background .btn-pre {
        margin: 0 2px;
    }
    .productList /deep/ .el-pagination__jump {
        margin-left: 0;
    }
    .productList /deep/ .el-pagination__editor.el-input {
        width: 40px;
    }
    .productList /deep/ .el-table td, .el-table th {
        padding: 6px 0;
    }
    .productList {
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
                    top: 3.2px;
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
                .scope-status {
                    color: @color;
                }
                .icon-bianji {
                    color: @color;
                    font-weight: bold;
                    cursor: pointer;
                }
                .scope-text {
                    display: inline-block;
                    margin: 7px;
                    color: @color;
                    text-decoration: underline;
                    cursor: pointer;
                }
                .scope-table_text {
                    text-align: left;
                    margin-left: 6px;
                }
                .scope-style {
                    text-align: left;
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
                .select-input {
                    width: 120px;
                }
                .el-button--mini {
                    margin-bottom: 7px;
                }
            }
        }  
    }
</style>