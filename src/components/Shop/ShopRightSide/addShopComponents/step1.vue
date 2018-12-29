<template>
    <div class="step1">
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">基本信息</p>
            <el-form :model="ruleForm" :rules="rule1" ref="ruleForm" label-width="100px" size="small">
                <el-form-item label="商品分类" required>
                    <span class="info">{{leftMenuItem}}<i class="el-icon-arrow-right"></i>{{rightMenuItem}}</span> 
                </el-form-item>
                <el-form-item label="商品名称" prop="productsName">
                    <el-input v-model="ruleForm.productsName"></el-input>
                </el-form-item>
                <el-form-item label="副标题" prop="subtitle">
                    <el-input v-model="ruleForm.subtitle"></el-input>
                </el-form-item>
                <el-form-item label="商品品牌" prop="productsBrand">
                    <el-select v-model="ruleForm.productsBrand" placeholder="请选择品牌" style="width: 350px">
                        <el-option label="品牌一" value="shanghai"></el-option>
                        <el-option label="品牌二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品介绍" prop="productsDescribe">
                    <el-input type="textarea" v-model="ruleForm.productsDescribe" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="运费模板" prop="fare">
                    <el-select v-model="ruleForm.fare" placeholder="请选择品牌" style="width: 350px">
                        <el-option label="品牌一" value="shanghai"></el-option>
                        <el-option label="品牌二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">库存规格</p>
            <el-form :model="sizeForm" :rules="rule2" ref="sizeForm" label-width="100px" size="small">
                <el-form-item label="商品货号" prop="productsNumber">
                    <el-input v-model="sizeForm.productsNumber"></el-input>
                    <p class="number-text">如果您不输入商品货号，系统将自动生成一个唯一的货号</p>
                </el-form-item>
                <el-form-item label="商品售价" prop="productsPrice">
                    <el-input v-model="sizeForm.productsPrice"></el-input>
                </el-form-item>
                <el-form-item label="市场价">
                    <el-input v-model="sizeForm.marketPrice"></el-input>
                </el-form-item>
                <el-form-item label="商品库存" prop="productsCount">
                    <el-input v-model="sizeForm.productsCount"></el-input>
                    <p class="number-text">该设置只对单品有效，当商品存在多规格货品时为不可编辑状态，库存数值取决于货品数量</p>
                </el-form-item>
                <el-form-item label="库存预警值">
                    <el-input v-model="sizeForm.productsWarningCount"></el-input>
                </el-form-item>
                <el-form-item label="计量单位">
                    <el-input v-model="sizeForm.measurement"></el-input>
                </el-form-item>
                <el-form-item label="商品重量">
                    <el-col :span="18" style="margin-right: 14px">
                        <el-input v-model="sizeForm.productsWeight"></el-input>
                    </el-col>
                    <el-col :span="5">
                        <el-select v-model="sizeForm.productsWeightUnit" placeholder="克">
                            <el-option label="克" value="ke"></el-option>
                            <el-option label="斤" value="jin"></el-option>
                            <el-option label="吨" value="dun"></el-option>
                            <el-option label="两" value="liang"></el-option>
                            <el-option label="袋" value="dai"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">其他信息</p>
            <el-form :model="otherForm" ref="otherForm" label-width="100px" size="small">
                <el-form-item label="预告商品">
                    <el-switch v-model="otherForm.trailerProduct"></el-switch>
                    <p class="number-text">如果设置为预告商品，商品上架和商品推荐不可用</p>
                </el-form-item>
                <el-form-item label="商品上架">
                    <el-switch v-model="otherForm.commodityShelves"></el-switch>
                </el-form-item>
                <el-form-item label="商品推荐">
                    <el-checkbox-group v-model="otherForm.productsFeatured">
                        <el-checkbox label="新品" name="type"></el-checkbox>
                        <el-checkbox label="推荐" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="服务保证">
                    <el-checkbox-group v-model="otherForm.serviceGuarantee">
                        <el-checkbox label="无忧退货" name="type"></el-checkbox>
                        <el-checkbox label="快速退款" name="type"></el-checkbox>
                        <el-checkbox label="免费包邮" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="详细页标题">
                    <el-input v-model="otherForm.detailedPageTitle"></el-input>
                </el-form-item>
                <el-form-item label="详细页描述">
                    <el-input v-model="otherForm.detailedPageDes"></el-input>
                </el-form-item>
                <el-form-item label="商品关键词">
                    <el-input v-model="otherForm.measurement"></el-input>
                    <p class="number-text">商品关键词请用空格分割；有两个功能，一是可以作为站内关键词查询，
在前台搜索框输入关键词后，能够搜索到该商品，二十作为搜索引擎收录使用</p>
                </el-form-item>
                <el-form-item label="商品备注">
                    <el-input type="textarea" v-model="otherForm.productsNote" placeholder="请输入内容"></el-input>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">特殊信息</p>
            <el-form :model="specialForm" :rules="rule3" ref="specialForm" label-width="100px" size="small" class="specialform">
                <el-form-item label="特惠促销">
                    <el-col :span="24">
                        <el-radio-group v-model="specialForm.specialPromotion">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-col>
                    <el-col :span="8" style="margin-right: 5px;">
                        <el-time-select
                            placeholder="选择开始时间"
                            v-model="specialForm.activeStartTimeTime"
                            :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                        </el-time-select>
                    </el-col>
                    <el-col :span="8" style="margin-right: 5px;">
                        <el-time-select
                            placeholder="选择结束时间"
                            v-model="specialForm.activeEndTimeTime"
                            :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                        </el-time-select>
                    </el-col>
                    <el-col :span="7">
                        <el-input v-model="specialForm.salesPrice" placeholder="输入促销价格"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="商品限购">
                    <el-col :span="24">
                        <el-radio-group v-model="specialForm.productsLimit">
                            <el-radio label="是"></el-radio>
                            <el-radio label="否"></el-radio>
                        </el-radio-group>
                     </el-col>
                    <el-col :span="8" style="margin-right: 5px;">
                        <el-form-item prop="LimitStartTimeTime">
                            <el-time-select
                                placeholder="选择开始时间"
                                v-model="specialForm.LimitStartTimeTime"
                                :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                            </el-time-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" style="margin-right: 5px;">
                        <el-form-item prop="LimitEndTimeTime">
                            <el-time-select
                                placeholder="选择结束时间"
                                v-model="specialForm.LimitEndTimeTime"
                                :picker-options="{start: '00:00',step: '00:15',end: '23:45'}">
                            </el-time-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-input v-model="specialForm.limitCount" placeholder="输入限购数量"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="阶梯价格" prop="ladderPrice">
                    <el-radio-group v-model="specialForm.ladderPrice">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                    </el-radio-group>
                    <el-table :data="tableData1" border style="width: 100%" size="mini">
                        <el-table-column prop="number" label="数量" width="160" align="center">
                             <template slot-scope="scope">
                                <el-input v-model="tableData1.number" placeholder="输入数量"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column prop="price" label="价格" width="160" align="center">
                            <template slot-scope="scope">
                                <el-input v-model="tableData1.price" placeholder="输入价格"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <span class="scope-text danger">删除</span>
                                <span class="scope-text">增加</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form-item>
                <el-form-item label="满减价格" prop="reduction">
                    <el-radio-group v-model="specialForm.reduction">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                    </el-radio-group>
                    <el-table :data="tableData2" border style="width: 100%" size="mini">
                        <el-table-column prop="amount" label="满" width="160" align="center">
                             <template slot-scope="scope">
                                <el-input v-model="tableData2.amount" placeholder="输入数量" class="center-input"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column prop="cut" label="立减" width="160" align="center">
                            <template slot-scope="scope">
                                <el-input v-model="tableData2.cut" placeholder="输入价格"></el-input>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <template slot-scope="scope">
                                <span class="scope-text danger">删除</span>
                                <span class="scope-text">增加</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'step1',
        data(){
            return {
                ruleForm: {
                    productsName: '',
                    subtitle: '',
                    productsBrand: '',
                    productsDescribe: '',
                    fare: ''
                },
                rule1: {
                    productsName: [{required: true, message: '请填写商品名称', trigger: 'blur'}],
                    subtitle: [{required: true, message: '请填写副标题', trigger: 'blur'}],
                    productsBrand: [{required: true, message: '请选择商品品牌', trigger: 'blur'}],
                    productsDescribe: [{required: true, message: '请填写商品介绍', trigger: 'blur'}],
                    fare: [{required: true, message: '请选择一个品牌', trigger: 'blur'}]
                },
                sizeForm: {
                    productsNumber: '',
                    productsPrice: '',
                    marketPrice: '',
                    productsCount: '',
                    productsWarningCount: '',
                    measurement: '',
                    productsWeight: '',
                    productsWeightUnit: ''
                },
                rule2: {
                    productsNumber: [{required: true, message: '请填写商品货号', trigger: 'blur'}],
                    productsPrice: [{required: true, message: '请填写商品售价', trigger: 'blur'}],
                    productsCount: [{required: true, message: '请填写商品库存', trigger: 'blur'}]
                },
                otherForm: {
                    trailerProduct: '',
                    commodityShelves: '',
                    productsFeatured: [],
                    serviceGuarantee: [],
                    detailedPageTitle: '',
                    detailedPageDes: '',
                    productsKeyWord: '',
                    productsNote: ''
                },
                specialForm: {
                    activeStartTimeTime: '',// 促销开始时间
                    activeEndTimeTime: '',  // 促销结束时间
                    salesPrice: '',         // 促销价格
                    LimitStartTimeTime: '', // 限购开始时间
                    LimitEndTimeTime: '',   // 限购结束时间
                    limitCount: '',         // 限购数量
                    specialPromotion: '',   // 特惠促销
                    productsLimit: '',      // 商品限购
                    ladderPrice: '',        // 阶梯价格
                    reduction: '',          // 满减价格
                },
                rule3: {
                    activeStartTimeTime: [{message:'请选择开始时间',trigger:'change'}],
                    activeEndTimeTime: [{message:'请选择结束时间',trigger:'change'}],
                    LimitStartTimeTime: [{message:'请选择开始时间',trigger:'change'}],
                    LimitEndTimeTime: [{message:'请选择结束时间',trigger:'change'}],
                },
                tableData1: [{number: 0, price: 0}],
                tableData2: [{amount: 0, cut: 0}]
            }
        },
        computed: {
            leftMenuItem() {
                return this.$store.state.leftItem
            },
            rightMenuItem() {
                return this.$store.state.rightItem
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../../../assets/common.less';
    .step1 /deep/ .el-textarea__inner {
        height: 160px;
    }
    .step1 /deep/ .el-switch.is-checked .el-switch__core {
        border-color: @color;
        background-color: @color;
    }
    .step1 /deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        border-color: @color;
        background-color: @color;
    }
    .step1 /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
        color: @color;
    }
    .step1 /deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 100%;
    }
    .step1 /deep/ .el-radio__input.is-checked .el-radio__inner {
        border-color: @color;
        background-color: #fff;
    }
    .step1 /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: @color;
    }
    .step1 /deep/ .el-input__prefix {
        right: -120px;
        left: 0;
    }
    .step1 /deep/ .el-input--small .el-input__icon {
        line-height: 36px;
    }
    .step1 /deep/ .el-input__icon {
        font-size: 15px;
    }
    .step1 /deep/ .el-input--prefix .el-input__inner {
        padding-right: 0;
    }
    .step1 /deep/ .el-table thead {
        color: #595757;
    }
    .step1 /deep/ .el-table--border th {
        background-color: #EEEEEE;
    }
    .step1 /deep/ .el-table--border td{
        border-color:@border-color;
    }
    .step1 /deep/ .el-table--border th {
        border-color:@border-color;
    }
    .step1 /deep/ .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed {
        border-color:@border-color;
    }
    .step1 /deep/ .el-table--border {
        border-color: @border-color;
    }
    .step1 /deep/ .el-table::before {
        height: 0;
    }
    .step1 /deep/ .el-table--border::after, .el-table--group::after {
        width: 0;
    }
    .step1 /deep/ .el-radio__inner::after {
        width: 8px;
        height: 8px;
        background-color: @color;
    }
    .step1 /deep/ .el-input--small .el-input__inner {
        text-align: inherit;
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
        .number-text {
            width: 400px;
            font-size: 12px;
            line-height: 18px;
            color: #9FA0A0;
        }
    }
    .specialform {
        width: 570px;
        .scope-text {
            display: inline-block;
            margin-right: 15px;
            color: @color;
            &:last-of-type {
                margin-right: 0;
            }
        }
        .danger {
            color: #D23029;
        }
        .el-input__inner {
            text-align: center;
        }
        
    }
</style>