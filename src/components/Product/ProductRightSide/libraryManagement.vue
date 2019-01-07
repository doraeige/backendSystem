<template>
    <div class="libraryManagement">
        <common-nav :title="title"></common-nav>
        <el-row class="common">
            <el-col :span="12">
                <div class="grid-content bg-purple list-header">
                    <i class="el-icon-search">筛选查询</i>
                </div>
                <div class="inquireDiv">
                    <el-col :span="21">
                        输入搜索：<el-input class="inquire-input" v-model="input" placeholder="相册名称"></el-input>
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
                <el-table-column label="封面" width="120">
                    <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="商品图片" width="92" height="66" >
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="相册名称" width="140"></el-table-column>
                <el-table-column prop="count" label="图片数量" width="90"></el-table-column>
                <el-table-column prop="sort" label="排序" width="90"></el-table-column>
                <el-table-column prop="desc" label="描述" width="200"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span class="scope-text">查看</span>
                        <span class="scope-text" @click="toNewAlbumPage">编辑</span>
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
        </el-row>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'libraryManagement',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '图片库管理',
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
                    }
                ],
                actions: {
                    '1': ['show', true],
                    '2': ['show', false]
                }
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
            * 编辑 按钮点击事件 跳转到 新建相册 页面
            */
            toNewAlbumPage () {
                this.$router.push({ name: 'newAlbum'})
            }
        },
        mounted() {
            this.axios.get('/librarylist').then(res => {
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
    .libraryManagement /deep/ .el-col-12 {
        width: 960px;
    }
    .libraryManagement /deep/ .el-input__inner {
        height: 28px;
        line-height: 28px;
    }
    .libraryManagement /deep/ .el-input__icon {
        line-height: 0;
    }
    .libraryManagement /deep/ .el-table .cell {
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }
    .libraryManagement /deep/ .el-button--mini {
        padding: 7px 8px;
        margin-top: 6px;
        margin-left: 5px;
    }
    .libraryManagement /deep/ .el-pagination .el-select .el-input .el-input__inner {
        margin-top: -3px;
    }
    .libraryManagement /deep/ .el-pagination__total {
        margin-right: 2px;
    }
    .libraryManagement /deep/ .el-pagination__sizes {
        margin-right: 0;
    }
    .libraryManagement /deep/ .el-pagination.is-background .el-pager li {
        margin: 0 2px;
    }
    .libraryManagement /deep/ .el-pagination.is-background .btn-next {
        margin: 0 2px;
    }
    .libraryManagement /deep/ .el-pagination.is-background .btn-pre {
        margin: 0 2px;
    }
    .libraryManagement /deep/ .el-pagination__jump {
        margin-left: 0;
    }
    .libraryManagement /deep/ .el-pagination__editor.el-input {
        width: 40px;
    }
    .libraryManagement /deep/ .el-table td, .el-table th {
        padding: 6px 0;
    }
    .libraryManagement {
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