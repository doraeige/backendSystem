<template>
    <div class="shopComment">
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
                <el-table-column type="selection" :reserve-selection="true" width="40" align="center"></el-table-column>
                <el-table-column prop="number" label="编号" width="85" align="center"></el-table-column>
                <el-table-column prop="username" label="用户昵称" width="85" align="center"></el-table-column>
                <el-table-column prop="productName" class-name="productname" label="商品名称" width="140" align="center"></el-table-column>
                <el-table-column label="评价" width="115" align="center">
                    <template slot-scope="scope">
                        <el-rate v-model="scope.row.value1" disabled text-color="#ff9900">
                        </el-rate>
                    </template>
                </el-table-column>
                <el-table-column prop="ip" label="IP地址" width="115" align="center"></el-table-column>
                <el-table-column prop="time" label="评论时间" width="135" align="center"></el-table-column>
                <el-table-column label="是否显示" width="80" align="center">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.value2"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <span class="scope-text" @click="handleCheck">查看</span>
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
        name: 'shopComment',
        components: {
            CommonNav
        },
       data(){
            return {
                title: '商品评价',
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
            handleClickStatu() {
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
            /**
            * 按钮点击事件
            * 点击 查看 跳转到评价详情页面
            */
            handleCheck() {
                this.$store.commit('hiddenLeftSide')
                this.$router.push({ name: 'commentDetail'})
            }
        },
        mounted() {
            this.axios.get('/productcomment').then(res => {
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
    .shopComment /deep/ .el-col-12 {
        width: 900px;
    }
    .shopComment /deep/ .el-input__inner {
        margin-top: -3px;
    }
    .shopComment /deep/ .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell {
        padding-left: 5px;
    }
    .shopComment /deep/ .el-table .cell, .el-table th div {
        padding-right: 5px;
    }
    .shopComment /deep/ .el-rate__icon {
        margin-right: 2px;
    }
    .shopComment /deep/ .el-table .cell {
        white-space: nowrap;
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
            .productname.cell {
                white-space: nowrap;
            }
            .icon-bianji {
                color: @color;
                font-weight: bold;
            }
            .scope-text {
                display: inline-block;
                margin: 5px;
                color: @color;
                cursor: pointer;
                text-decoration: underline;
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