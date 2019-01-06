<template>
    <div class="attributesList">
        <common-nav :title="title" :show="show"></common-nav>
        <el-row class="common">
            <el-col :span="22" class="list-header">
                <div class="grid-content bg-purple">数据列表</div>
            </el-col>
            <el-table
                ref="multipleTable"
                :data="tableData.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
                border>
                <el-table-column type="selection" :reserve-selection="true" width="55"></el-table-column>
                <el-table-column prop="number" label="编号" width="90"></el-table-column>
                <el-table-column prop="attribute" label="属性名称" width="90"></el-table-column>
                <el-table-column prop="categoryName" label="商品类型" width="90"></el-table-column>
                <el-table-column prop="chioce" label="属性是否可选" width="110"></el-table-column>
                <el-table-column prop="way" label="属性值的录入方式" width="130"></el-table-column>
                <el-table-column prop="list" label="可选值列表" width="160"></el-table-column>
                <el-table-column prop="sort" label="排序" width="90"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span class="scope-text" @click="openAddAttributePage">编辑</span>
                        <span class="scope-text danger" @click="deleteIndex((scope.$index,scope.row))">删除</span>
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
    import CommonNav from '../../../common/CommonNav.vue'
    export default {
        name: 'attributesList',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '属性列表',
                show: true,
                multipleSelection: [],
                tableData: [],
                currentPage: 1,
                pagesize: 10
            }
        },
        methods: {
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
            * 编辑 按钮点击事件 跳转到 添加属性 页面
            */
            openAddAttributePage(){
                this.$router.push({ name: 'addAttributes'})
            },
            /**
            * 删除按钮点击事件
            * @param {number} index: 当前行数
            * @param {object} row: 删除按钮对应的数据
            */
            deleteIndex(index, row) {
                console.log(index,row)
                this.tableData.splice(index,1)
            }
        },
        mounted() {
            this.axios.get('/attributelist').then(res => {
                console.log(res.data)
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
    @import '../../../../assets/common.less';
    .attributesList /deep/ .el-table .cell {
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }
    .attributesList /deep/ .el-pagination .el-select .el-input .el-input__inner {
        margin-top: -3px;
    }
   .common {
        padding-left: calc((100% - 924px) / 2);
        .bg-purple {
            position: relative;
            border: @border;
            background-color: #F7F8F8;
        }
        .el-table {
            width: 924px;
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
                margin: 6px;
                color: @color;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
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
            width: 912px !important;
            background-color: #F7F8F8;
            border: @border;
            border-top: 0;
        }
    }
</style>