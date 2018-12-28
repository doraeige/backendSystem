<template>
    <div class="loginLog">
        <common-nav :title="title"></common-nav>
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">数据列表</div></el-col>
            <el-table
                :data="tableData.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
                border
                :header-cell-style="{background: '#F7F8F8'}">
                <el-table-column
                prop="time"
                label="时间"
                width="215"
                align="center">
                </el-table-column>
                <el-table-column
                prop="ip"
                label="IP"
                width="225"
                align="center">
                </el-table-column>
                <el-table-column
                prop="address"
                label="地区"
                width="215"
                align="center">
                </el-table-column>
                <el-table-column
                prop="browser"
                label="浏览器"
                width="215"
                align="center">
                </el-table-column>
            </el-table>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            background
            :page-sizes="[10, 20, 30, 40]"
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
        name: 'loginLog',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '登录日志',
                currentPage: 1,
                pagesize: 10,
                tableData: []
            }
        },
        methods: {
            handleSizeChange(psize) {
                console.log(psize)
                this.pagesize = psize
            },
            handleCurrentChange(cpage) {
                console.log(cpage)
                this.currentPage = cpage
            }
        },
        mounted() {
            this.axios.get('/loginlist').then(res => {
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
    .loginLog /deep/ .el-pagination .el-select .el-input .el-input__inner {
        margin-top: -3px;
    }
    .loginLog {
        .el-row {
            margin-left: calc((100% - 860px) / 2);
            .el-col-12 {
                width: 860px;
                margin-top: @margin-top * 2;
                border: @border;
                .bg-purple {
                    .bg-purple;
                }
            }
            .el-table {
                width: 860px !important;
            }
            .el-pagination {
                text-align: right;
                width: 848px !important;
                background-color: #F7F8F8;
                border: @border;
                border-top: 0;
            }
        }
    }
</style>