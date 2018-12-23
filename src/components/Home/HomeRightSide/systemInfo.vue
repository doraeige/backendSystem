<template>
    <div class="systemInfo">
        <el-col :span="24">
            <span class="title">系统信息</span>
        </el-col>
        <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">系统信息</div></el-col>
            <el-table
                :data="tableData"
                border
                :show-header="false">
                <el-table-column
                prop="row1"
                label=""
                width="133"
                align="center">
                </el-table-column>
                <el-table-column
                prop="row2"
                label=""
                width="299">
                </el-table-column>
                <el-table-column
                prop="row3"
                label=""
                width="133"
                align="center">
                </el-table-column>
                <el-table-column
                prop="row4"
                label=""
                width="299">
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'systemInfo',
        data(){
            return {
                tableData: [{   
                        row1: '服务器操作系统',
                        row2: 'Linux(114.55.34.251)',
                        row3: 'Web服务器',
                        row4: 'nginx/1.10.2'
                    },
                    {   
                        row1: 'PHP版本',
                        row2: '5.6.30',
                        row3: 'MySQL版本',
                        row4: '5.5.56'
                    },
                    {   
                        row1: '安全模式',
                        row2: '否',
                        row3: '安全模式GID',
                        row4: '否'
                    },
                    {   
                        row1: 'Socket支持',
                        row2: '是',
                        row3: '时区设置',
                        row4: 'Asia/Shanghai'
                    },{   
                        row1: 'GD版本',
                        row2: 'GD2(JPEG GIF PNG)',
                        row3: 'Zlib支持',
                        row4: '是'
                    },
                    {   
                        row1: 'IP库版本',
                        row2: '20071024',
                        row3: '文件上传的最大大小',
                        row4: '40M'
                    },
                    {   
                        row1: '程序版本',
                        row2: 'v2.2.2 RELEASE 20181029',
                        row3: '安全日期',
                        row4: '2018-10-02'
                    },
                    {   
                        row1: '编码',
                        row2: 'UTF-8',
                        row3: '',
                        row4: ''
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
    .systemInfo /deep/ .el-table td.is-center, .el-table th.is-center {
        background-color: rgba(239,239,239,0.6);;
    }
    .systemInfo {
        .flex;
        flex-direction: column;
        .el-col-24 {
            height: 39px;
            line-height: 39px;
            background-color: #EFEFEF;
            .title {
                font-size: 14px;
                font-weight: bold;
                color: @text-color;
                &:before {
                    content: '||';
                    height: 19px;
                    background-color: @color;
                    color: @color;
                    margin-right: @margin-top;
                    margin-left: @margin-top / 4;
                }
            }
        }
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
        }
        
    }
</style>
