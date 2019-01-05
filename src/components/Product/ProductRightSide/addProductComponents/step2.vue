<template>
    <div class="step2">
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">商品属性</p>
            <el-form :model="attributesForm" ref="attributesForm" label-width="100px" size="small">
                <el-form-item label="属性类型">
                    <el-select v-model="attributesForm.attributes" placeholder="请选择属性类型" style="width: 350px">
                        <el-option label="属性一" value="属性一"></el-option>
                        <el-option label="属性二" value="属性二"></el-option>
                        <el-option label="属性三" value="属性三"></el-option>
                        <el-option label="属性四" value="属性四"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品规格">
                    <el-col :span="24" style="border:1px solid #ebeef5;width: 530px;padding: 10px 0 20px 24px;">
                        <el-col :span="24">
                            <div>尺码</div>
                        </el-col>
                        <el-checkbox-group v-model="attributesForm.size">
                            <el-checkbox v-for="(item,index) in attributesForm.sizes" :key="index" :label="item"></el-checkbox>
                        </el-checkbox-group>
                        <el-col :span="24">
                            <div>颜色</div>
                        </el-col>
                        <el-checkbox-group v-model="attributesForm.color">
                            <el-checkbox v-for="(item,index) in attributesForm.colors" :key="index" :label="item">
                                {{item}}
                                <span class="color-text" @click="deleteColor(index)">删除</span>
                            </el-checkbox>
                        </el-checkbox-group>
                        <el-col :span="5" style="margin-top: 10px;">
                            <el-input v-model="attributesForm.input" placeholder="" clearable></el-input>
                        </el-col>
                        <el-col :span="3" style="margin-left:10px;margin-top: 10px;">
                            <el-button @click="addColor">增加</el-button>
                        </el-col>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品尺码" prop="reduction" style="width: 630px">
                    <el-table :data="attributesForm.tableData" border style="width: 100%" size="mini">
                        <el-table-column prop="size" label="尺码" align="center" width="70">
                        </el-table-column>
                        <el-table-column prop="color" label="颜色" align="center" width="70">
                        </el-table-column>
                        <el-table-column prop="salePrice" label="销售价格" align="center" width="80">
                            <template slot-scope="scope">
                                <el-input v-model="attributesForm.tableData.salePrice"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="商品库存" align="center" width="80">
                            <template slot-scope="scope">
                                <el-input v-model="attributesForm.tableData.productAccount"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="库存预警值" align="center" prop="countLimit" width="80">
                            <template slot-scope="scope">
                                <el-input v-model="attributesForm.tableData.countLimit"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="SKU编号" align="center" prop="numberSku" width="80">
                            <template slot-scope="scope">
                                 <el-input v-model="attributesForm.tableData.numberSku"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" align="center" width="69">
                            <template slot-scope="scope">
                                <span class="danger" @click="handleDelete(scope.$index, scope.row)">删除</span>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-row style="margin-top: 20px;">
                        <el-col :span="4.5" style="margin-right:13px">
                            <el-button class="btn">SCV批量上传</el-button>
                        </el-col>
                        <el-col :span="4.5">
                            <el-button class="btn" @click="resetForm('attributesForm')">刷新列表</el-button>
                        </el-col>
                        <el-col :span="10">
                            <p>含有两页以上请用批量上传功能</p>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">参数类型</p>
            <el-form :model="typeForm" ref="typeForm" label-width="100px" size="small">
                <el-form-item label="上市年份" required prop="year">
                    <el-select v-model="typeForm.year" placeholder="请选择" style="width: 350px">
                        <el-option label="2016" value="beijing"></el-option>
                        <el-option label="2017" value="shanghai"></el-option>
                        <el-option label="2018" value="beijin"></el-option>
                        <el-option label="2019" value="shangha"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="主材含量" prop="productMaterial" required>
                    <el-input v-model="typeForm.productMaterial"></el-input>
                </el-form-item>
                <el-form-item label="适用对象" prop="suitable">
                    <el-input v-model="typeForm.suitable"></el-input>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">商品相册</p>
            <el-col :span="24" style="width:680px; margin-left:25px;">
                <!-- list-type="picture-card" -->
                <div class="picDiv">
                    <el-upload
                    :multiple="multiple"
                    action=""
                    :auto-upload="false"
                    :http-request="uploadFile"
                    list-type="picture-card"
                    ref="upload">
                        <i class="el-icon-picture"></i>
                    </el-upload>
                     <!-- <div class="picInfo">
                        <span v-if="mainPic" style="color:#D23029;">商品主图</span>
                        <span v-else style="color:#5BC0BF;">设为主图 </span>
                        <span>删除图片</span>
                    </div> -->
                </div>
                <el-row style="margin-top: 20px; font-size: 12px">
                    <el-col :span="4">
                        <el-button class="btn" size="small" @click="subPicForm">上传图片</el-button>
                    </el-col>
                    <el-col :span="4">
                        <el-button class="btn" size="small" @click="subPicForm">从图片库选择</el-button>
                    </el-col>
                    <el-col :span="16" style="font-size:12px;transform: scale(0.9);margin-left:-20px;margin-top:10px;color:#9fa0a0;">
                        <p>按住ctrl可同时批量选择多张图片上传，最多可以上传5张图片，建议尺寸800*800px</p>
                    </el-col>
                </el-row>
            </el-col>
        </el-col>
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">规格参数</p>
            <el-col :span="24" style="width:650px">
                <quill-editor v-model="content" ref="myQuillEditor" class="editer"
                :options="editorOption" @ready="onEditorReady($event)">
              </quill-editor>
            </el-col>
        </el-col>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor' //调用富文本编辑器
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'
    export default {
        name: 'step2',
        components: {
            quillEditor
        },
        data(){
            return {
                attributesForm: {
                    attributes: '',
                    size: [],
                    sizes: ['M','L','XL','2XL','3XL','4XL'],
                    color: [],
                    colors: ['黑色','红色','白色','粉色'],
                    input: '',
                    tableData: [
                        {size:'S',color: '黑色',salePrice:0,productAccount: 0,countLimit: 0,numberSku: 0},
                        {size:'M',color: '红色',salePrice:0,productAccount: 0,countLimit: 0,numberSku: 0} ,
                        {size:'L',color: '蓝色',salePrice:0,productAccount: 0,countLimit: 0,numberSku: 0} ,
                        {size:'XL',color: '绿色',salePrice:0,productAccount: 0,countLimit: 0,numberSku: 0} 
                    ],
                },
                typeForm: {
                    year: '',
                    productMaterial: '',
                    suitable: ''
                },
                multiple: true,
                formDate: '',
                mainPic: true,
                editorOption: {},
                content: ''
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        methods: {
            addColor() {
                this.attributesForm.colors.push(this.attributesForm.input)
            },
            deleteColor(index) {
                this.attributesForm.colors.splice(index,1)
            },
            handleDelete(index, row) {
                console.log(index, row)
                this.attributesForm.tableData.splice(index, 1)
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            },
            // 图片上传
            uploadFile(file){
                this.formDate.append('file', file.file)
            },
            subPicForm(){
                this.formDate = new FormData()
                this.$refs.upload.submit()
                this.formDate.append('WS_CODE', "12133")
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                console.log(this.formDate)
                // axios.post("your URL", this.formDate,config).then( res => {
                //     console.log(res)
                // }).catch( res => {
                //     console.log(res)
                // })
            },
            onEditorReady(editor) {
                console.log(editor)
            }
        },
        updated() {
            console.log(this.fileList)
        }
    }
</script>

<style scoped lang="less">
    @import '../../../../assets/common.less';
    .step2 /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        border-color: @color;
        background-color: @color;
    }
    .step2 /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
        color: @color;
    }
    .step2 /deep/ .el-checkbox+.el-checkbox {
        margin-left: 0;
    }
    .step2 /deep/ .el-checkbox.el-checkbox {
        margin-right: 20px;
    }
    .step2 /deep/ .el-table--border::after, .el-table--group::after {
        width: 0;
    }
    .step2 /deep/ .el-upload--picture-card {
        width: 100px;
        height: 100px;
        line-height: 100px;
    }
    .step2 /deep/ .el-upload-list--picture-card .el-upload-list__item {
        width: 100px;
        height: 100px;
    }
    .step2 /deep/ .ql-toolbar.ql-snow .ql-formats {
        margin-right: 0;
    }
    .step2 /deep/ .ql-editor {
        height: 335px;
    }
    .el-col-12 {
        margin-left: @margin-top * 5;
        margin-top: @margin-top * 2.5;
        box-sizing: border-box;
        position: relative;
        .info {
            color: @color;
        }
        .icon-xiangyouzhishipaitianchongban {
            color: @color;
            font-size: 130px;
            position: absolute;
            left: -180px;
            top: -50px;
        }
        .icon-text {
            color: rgba(255,255,255,0.9);
            position: absolute;
            top: 8px;
            left: -170px;
        }
        .color-text {
            color: @color;
            margin-left: 20px;
        }
        .el-button--small, .el-button--small.is-round {
            border-color: @color;
            color: @color;
        }
        .danger {
            color: #D23029;
            cursor: pointer;
        }
        .btn {
            width: 101px;
            background-color: @color;
            color: #fff;
        }
        .el-col-10 {
            color: rgba(159,160,160,1);
            font-size: 12px;
            transform: scale(0.9);
        }
        .el-upload--picture-card i {
            font-size: 50px;
        }
        [class*=" el-icon-"], [class^=el-icon-] {
            line-height: 100px;
        }
        .picInfo {
            border: @border;
        }
        .ql-editor.ql-blank {
            height: 350px;
        }
    }
</style>