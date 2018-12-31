<template>
    <div class="shopRecycle">
        <common-nav :title="title"></common-nav>
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
                            <el-input v-model="formInline.input" placeholder="商品名称/商品货号" size="small"></el-input>
                        </el-form-item>
                        <el-form-item label="商品分类" style="margin-left: 20px;">
                            <el-select 
                                v-model="formInline.value"
                                placeholder="请选择商品分类" size="small">
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
                                placeholder="请选择品牌" size="small">
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
                <el-table-column type="selection" :reserve-selection="true" width="55" align="center"></el-table-column>
                <el-table-column prop="number" label="编号" width="100" align="center"></el-table-column>
                <el-table-column label="商品图片" width="130" align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="商品图片" width="100" height="66" align="center">
                    </template>
                </el-table-column>
                <el-table-column label="商品名称" width="150" align="center">
                    <template slot-scope="scope">
                        <p class="scope-table_text">{{ scope.row.shopName }}</p>
                        <p class="scope-table_text">品牌：{{ scope.row.shopBrand }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="shopClassification" label="商品分类" width="120" align="center"></el-table-column>
                <el-table-column label="价格" width="114" align="center">
                    <template slot-scope="scope">
                       ￥{{ scope.row.price }}
                    </template>
                </el-table-column>
                <el-table-column label="货号" width="125" align="center">
                    <template slot-scope="scope">
                        No{{ scope.row.shopNum }}
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <span class="scope-text">还原</span>
                        <span class="scope-text">删除</span>
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
        </el-row>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'shopRecycle',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '商品回收站',
                isClick: false,
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
                getRowKeys(row) {
                    return row.number
                }
            }
        },
        methods: {
            /**
            * 按钮点击事件
            * @param {boolean} isClick: 收起筛选点击与否
            */
            handleClickStatu: function() {
                this.isClick = !this.isClick
            },
            /**
            * 按钮点击事件
            * @param {array} multipleSelection: 选中的数据组成的数组
            */
            handleSelectionChange(val) {
                this.multipleSelection = val
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
        },
        mounted() {
            this.axios.get('/recyclelist').then(res => {
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
    .shopRecycle /deep/ .el-col-12 {
        width: 900px;
    }
    .shopRecycle /deep/ .el-input__inner {
        margin-top: -3px;
    }
    .common {
        padding-left: calc((100% - 900px) / 2);
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
            line-height: 38px;
            border: @border;
            font-size: 12px;
        }
        .el-table {
            width: 900px;
            font-size: 12px;
            .scope-status {
                color: @color;
            }
            .icon-bianji {
                color: @color;
                font-weight: bold;
            }
            .scope-text {
                display: inline-block;
                margin: 7px;
                color: @color;
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
            width: 888px !important;
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
</style>