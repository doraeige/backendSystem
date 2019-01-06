<template>
    <div class="productType">
        <common-nav :title="title"></common-nav>
        <el-row class="common">
            <el-col :span="22" class="list-header">
                <div class="grid-content bg-purple">数据列表</div>
            </el-col>
            <el-table
                :data="tableData.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
                border>
                <el-table-column prop="number" label="编号" width="100"></el-table-column>
                <el-table-column prop="typeName" label="类型名称" width="110"></el-table-column>
                <el-table-column prop="typeNum" label="属性数量" width="220"></el-table-column>
                <el-table-column prop="argumentsCount" label="参数数量" width="220"></el-table-column>
                <el-table-column label="设置" width="180">
                    <template slot-scope="scope">
                        <span class="scope-text" @click="openAttributeList">属性列表</span>
                        <span class="scope-text" @click="openParameterList">参数列表</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <span class="scope-text" @click="dialogFormVisible = true">编辑</span>
                        <span class="scope-text danger" @click="deleteIndex(scope.$index,scope.row)">删除</span>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
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

            <!-- 弹窗 -->
            <el-dialog title="添加类型" :visible.sync="dialogFormVisible" width="540px">
                <el-form :model="dialogform">
                    <el-form-item label="类型名称" required :label-width="formLabelWidth">
                        <el-input v-model="dialogform.name"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </el-row>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'productType',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '商品类型',
                tableData: [],
                currentPage: 1,
                pagesize: 10,
                dialogFormVisible: false,
                formLabelWidth: '150px',
                dialogform: {
                    name: ''
                }
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
            * 按钮点击事件 跳转到 属性列表 页面
            */
            openAttributeList(){
                this.$router.push({ name: 'attributesList'})
            },
            /**
            * 按钮点击事件 跳转到 参数列表 页面
            */
            openParameterList() {
                this.$router.push({ name: 'parameterList'})
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
            this.axios.get('/producttype').then(res => {
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
    @import '../../../assets/common.less';
    .productType /deep/ .el-table .cell {
        padding-left: 5px;
        padding-right: 5px;
        text-align: center;
    }
    .productType /deep/ .el-pagination .el-select .el-input .el-input__inner {
        margin-top: -3px;
    }
    .productType /deep/ .el-input__inner {
        width: 80%;
    }
    .productType /deep/ .el-button--primary {
        background-color: @color;
        border-color: @color;
    }
    .productType /deep/ .el-button--primary:focus, .el-button--primary:hover {
        background-color: rgba(91,192,191,0.9);
        border-color: rgba(91,192,191,0.9);
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