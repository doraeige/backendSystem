<template>
    <div class="brandManagement">
        <common-nav :title="title"></common-nav>
        <el-row class="common">
            <el-col :span="12">
                <div class="grid-content bg-purple list-header">
                    <i class="el-icon-search">筛选查询</i>
                </div>
                <div class="inquireDiv">
                    <el-col :span="21">
                        输入搜索：<el-input class="inquire-input" v-model="input" placeholder="品牌名称/关键词"></el-input>
                    </el-col>
                    <el-button size="small" class="right">查询结果</el-button>
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
                <el-table-column prop="name" label="品牌名称" width="180"></el-table-column>
                <el-table-column prop="letter" label="品牌首字母" width="90"></el-table-column>
                <el-table-column prop="sort" label="排序" width="90"></el-table-column>
                <el-table-column label="导航栏" width="90">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.nav" active-color="#13ce66"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="是否显示" width="90">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.show" active-color="#13ce66"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="相关" width="160">
                    <template slot-scope="scope">
                        商品：<span class="scope-text">{{ scope.row.related }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span class="scope-text" @click="toAddBrandPage">编辑</span>
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
        name: 'brandManagement',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '品牌管理',
                input: '',
                tableData: [],
                multipleSelection: [],
                currentPage: 1,
                pagesize: 10,
                options: [
                    {
                        id: 1,
                        label: '显示品牌'
                    }, {
                        id: 2,
                        label: '隐藏品牌'
                    }, {
                        id: 3,
                        label: '导航栏显示'
                    }, {
                        id: 4,
                        label: '导航栏隐藏'
                    }
                ],
                actions: {
                    '1': ['show', true],
                    '2': ['show', false],
                    '3': ['nav', true],
                    '4': ['nav', false]
                },
                itemId: ''
            }
        },
        computed: {
            indeterminate(){
                return this.multipleSelection.length > 0 &&  this.multipleSelection.length < this.tableData.length
            }
        },
        methods: {
            getRowKeys(row) {
                return row.number
            },
            /**
            * 按钮点击事件
            * @param {number} val: 选择的数据
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
            * 编辑 按钮点击事件 跳转到 添加新品牌 页面
            */
            toAddBrandPage () {
                this.$router.push({ name: 'addNewBrand'})
            },
            /**
            * 确定 按钮点击事件
            * @param {number} status: 1 显示品牌 2 隐藏品牌
            * @param {array} multipleSelection 选中的数据
            * this.$set(item, value, boolean) Vue 数组更新检测 响应表格数据
            */
            onSubmit(status) {
                console.log(status)
                console.log(this.multipleSelection)
                let action = this.actions[status]
                let value = action[0]
                let boolean = action[1]
                this.multipleSelection.forEach(item => this.$set(item, value, boolean))
            }
        },
        mounted() {
            this.axios.get('/brandlist').then(res => {
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
    .brandManagement /deep/ .el-col-12 {
        width: 960px;
    }
    .brandManagement /deep/ .el-input__inner {
        height: 28px;
        line-height: 28px;
    }
    .brandManagement /deep/ .el-input__icon {
        line-height: 0;
    }
    .brandManagement /deep/ .el-table .cell {
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }
    .brandManagement /deep/ .el-button--mini {
        padding: 7px 8px;
        margin-top: 6px;
        margin-left: 5px;
    }
    .brandManagement /deep/ .el-pagination .el-select .el-input .el-input__inner {
        margin-top: -3px;
    }
    .brandManagement /deep/ .el-pagination__total {
        margin-right: 2px;
    }
    .brandManagement /deep/ .el-pagination__sizes {
        margin-right: 0;
    }
    .brandManagement /deep/ .el-pagination.is-background .el-pager li {
        margin: 0 2px;
    }
    .brandManagement /deep/ .el-pagination.is-background .btn-next {
        margin: 0 2px;
    }
    .brandManagement /deep/ .el-pagination.is-background .btn-pre {
        margin: 0 2px;
    }
    .brandManagement /deep/ .el-pagination__jump {
        margin-left: 0;
    }
    .brandManagement /deep/ .el-pagination__editor.el-input {
        width: 40px;
    }
    .brandManagement /deep/ .el-table td, .el-table th {
        padding: 6px 0;
    }
    .brandManagement {
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
            }
            .inquireDiv {
                height: 40px;
                line-height: 40px;
                border: @border;
                font-size: 12px;
                padding-left: @margin-top;
                .right {
                   margin-top: -3px;
                }
                .inquire-input {
                    margin-left: @margin-top / 2;
                    width: 170px;
                }
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
                    cursor: pointer;
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
                    width: 150px;
                }
                .el-button--mini {
                    margin-bottom: 7px;
                }
            }
        }  
    }
</style>