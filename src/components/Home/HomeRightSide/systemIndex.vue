<template>
    <div class="systemIndex">
        <common-nav :title="title"></common-nav>
        <main>
            <el-row>
                <el-col :span="6" v-for="(item,index) in saleList" :key="index">
                    <i :class="item.icon"></i>
                    <div>
                        <p class="account-text">{{item.text}}</p>
                        <p class="account">{{item.money}}</p>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple">待处理事务</div></el-col>
                <el-table
                    :data="tableData"
                    border
                    :show-header="false">
                    <el-table-column
                    prop="row1"
                    label=""
                    width="286"> 
                        <template slot-scope="scope">
                            <span v-for="(item, index) in scope.row.row1">
                                {{item.text}}
                                <span style="float:right;margin-left:5px"> )</span>
                                <span style="float:right;color:#D23029">{{item.num}}</span>
                                <span style="float:right;margin-right:5px">( </span>
                            </span>
                        </template>   
                    </el-table-column>    
                    <el-table-column
                        prop="row2"
                        label=""
                        width="286">
                            <template slot-scope="scope">
                                <span v-for="(item, index) in scope.row.row2">
                                    {{item.text}}
                                    <span style="float:right;margin-left:5px"> )</span>
                                    <span style="float:right;color:#D23029">{{item.num}}</span>
                                    <span style="float:right;margin-right:5px">( </span>
                                </span>
                            </template>
                        </el-table-column>
                        <el-table-column
                        prop="row3"
                        label=""> 
                            <template slot-scope="scope">
                                <span v-for="(item, index) in scope.row.row3">
                                    {{item.text}}
                                    <span style="float:right;margin-left:5px"> )</span>
                                    <span style="float:right;color:#D23029">{{item.num}}</span>
                                    <span style="float:right;margin-right:5px">( </span>
                                </span>
                            </template>        
                        </el-table-column>
                </el-table>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">运营快捷入口</div>
                    <div class="navDiv">
                        <ul>
                            <li class="navUl" v-for="(item, index) in navIcon" :key="index">
                                <i :class="item.icon" class="common"></i>
                                <p>{{item.name}}</p>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="grid-content bg-purple">商品总览</div>
                    <div class="commonDiv">
                        <ul>
                            <li class="commonList" v-for="(item,index) in shopList" :key="index">
                                <p class="shopNum">{{item.num}}</p>
                                <p>{{item.text}}</p>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">用户总览</div>
                    <div class="commonDiv">
                        <ul>
                            <li class="commonList" v-for="(item,index) in userList" :key="index">
                                <p class="shopNum">{{item.num}}</p>
                                <p>{{item.text}}</p>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">订单统计</div>
                    <div class="orderInfo">
                        <ul>
                            <li>
                                <p class="order-title">本月订单总数</p>
                                <p class="order-num">10000</p>
                                <p class="order-text">同比上周<i class="el-icon-caret-top">10%</i></p>
                            </li>
                            <li>
                                <p class="order-title">本周订单总数</p>
                                <p class="order-num">10000</p>
                                <p class="order-text">同比上周<i class="el-icon-caret-bottom">10%</i></p>
                            </li>
                        </ul>
                    </div>
                    <div id="orderChart"></div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">销售统计</div>
                    <div class="orderInfo">
                        <ul>
                            <li>
                                <p class="order-title">本月销售总数</p>
                                <p class="order-num">1000000</p>
                                <p class="order-text">同比上周<i class="el-icon-caret-top">10%</i></p>
                            </li>
                            <li>
                                <p class="order-title">本周销售总数</p>
                                <p class="order-num">500000</p>
                                <p class="order-text">同比上周<i class="el-icon-caret-bottom">10%</i></p>
                            </li>
                        </ul>
                    </div>
                    <div id="saleChart"></div>
                </el-col>
            </el-row>
        </main>
    </div>
</template>

<script>
import CommonNav from '../../common/CommonNav.vue'
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts')
// 引入折线图
require('echarts/lib/chart/line')
require('echarts/lib/chart/funnel')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    name: 'systemIndex',
    components: {
        CommonNav
    },
    data(){
        return {
            title: '系统首页',
            saleList: [
                {icon: 'iconfont icon-dingdan', text: '今日订单总数', money: '200.00'},
                {icon: 'iconfont icon-jinqian', text: '今日销售总额', money: '￥5600.00'},
                {icon: 'iconfont icon-jinbi', text: '昨日销售总额', money: '￥5000.00'},
                {icon: 'iconfont icon-ic_saleperformance', text: '近7天销售总额', money: '￥50000.00'}
            ],
            tableData: [
                {
                    row1:[{text: '待付款订单', num: 10}],
                    row2:[{text: '已完成订单', num: 10}],
                    row3:[{text: '待确认退货订单', num: 10}]
                },
                {
                    row1:[{text: '待发货订单', num: 10}],
                    row2:[{text: '新缺货登记', num: 10}],
                    row3:[{text: '待处理退款申请', num: 10}]
                },
                {
                    row1:[{text: '已发货订单', num: 10}],
                    row2:[{text: '待处理退货订单', num: 10}],
                    row3:[{text: '广告位即将到期', num: 10}]
                }   
            ],
            navIcon: [
                {icon: 'iconfont icon-tianjia', name: '添加商品'},
                {icon: 'iconfont icon-dingdan1', name: '订单列表'},
                {icon: 'iconfont icon-yonghuguanli', name: '用户管理'},
                {icon: 'iconfont icon-xiaoshouqushi', name: '交易统计'},
                {icon: 'iconfont icon-duanxin', name: '短信营销'},
                {icon: 'iconfont icon-guanggaoguanli', name: '广告管理'},
                {icon: 'iconfont icon-tesezhuanti', name: '专题管理'},
                {icon: 'iconfont icon-miaosha', name: '秒杀管理'},
                {icon: 'iconfont icon-tuijian', name: '首页推荐品'}
            ],
            shopList: [
                {num: 100, text: '已下架'},
                {num: 400, text: '已上架'},
                {num: 50, text: '库存紧张'},
                {num: 500, text: '全部商品'}
            ],
            userList: [
                {num: 100, text: '今日新增'},
                {num: 400, text: '昨日新增'},
                {num: 1000, text: '本月新增'},
                {num: 5000, text: '会员总数'}
            ]
        }
    },
    methods: {
        drawChart() {
            // ECharts图表初始化
            let orderChart = echarts.init(document.getElementById('orderChart'))
            // 绘制图表
            let option = {
                title: {
                    text: '近一周订单统计',
                    y: 'top',
                    padding: [20, 0, 0, 40],
                    textStyle: {
                        fontSize: 14,
                        color: 'rgba(89,87,87,0.7)'

                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    data:['本周']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['07-01周六','07-02周日','07-03周一','07-04周二','07-05周三','07-06周四','07-07周五'],
                        axisLine: {
                            lineStyle: {
                                color: '#9FA0A0'
                            }
                        },
                        splitLine: {show: false},
                        axisTick: {show: false, length: 0}
                    }
                ],
                yAxis: [
                    {
                        type : 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#9FA0A0',
                                type: 'solid'
                            }
                        },
                        splitLine: {show: false},
                        axisTick: {show: false}
                    }
                ],
                series: [
                    {
                        name:'本周',
                        type:'line',
                        stack: '',
                        itemStyle: {
                            normal: {
                                color:'#5BC0BF',
                                areaStyle: {
                                    color: '#DEF2F2',
                                    type: 'default'
                                },
                                lineStyle: {
                                    color: '#5BC0BF'
                                }
                            }
                        },
                        data:[85,60,101,200,110,115,90]
                    }
                ]
            }
            // 使用刚指定的配置项和数据显示图表。
            orderChart.setOption(option)
        },
        drawSaleChart() {
            // ECharts图表初始化
            let saleChart = echarts.init(document.getElementById('saleChart'))
            // 绘制图表
            let option = {
                title: {
                    text: '近一周销售统计',
                    y: 'top',
                    padding: [20, 0, 0, 40],
                    textStyle: {
                        fontSize: 14,
                        color: 'rgba(89,87,87,0.7)'

                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    data:['本周']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable: true,
                xAxis: [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['07-01周六','07-02周日','07-03周一','07-04周二','07-05周三','07-06周四','07-07周五',],
                        axisLine: {
                            lineStyle: {
                                color: '#9FA0A0',
                                type: 'solid'
                            }
                        },
                        splitLine: {show: false}
                    }
                ],
                yAxis: [
                    {
                        type : 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#9FA0A0',
                                type: 'solid'
                            }
                        },
                        splitLine: {show: false}
                    }
                ],
                series: [
                    {
                        name:'本周',
                        type:'line',
                        stack: '总量',
                        itemStyle: {
                            normal: {
                                color:'#5BC0BF',
                                areaStyle: {
                                    color: '#DEF2F2',
                                    type: 'default'
                                },
                                lineStyle: {
                                    color: '#5BC0BF'
                                }
                            }
                        },
                        data:[900,2985,4000,3679,3207,1873,1905]
                    }
                ]
            }
            // 使用刚指定的配置项和数据显示图表。
            saleChart.setOption(option)
        }
    },
    mounted(){
        this.drawChart()
        this.drawSaleChart()
    }
}
</script>

<style scoped lang="less">
    @import '../../../assets/common.less';
    .systemIndex /deep/ .el-table .cell {
        padding: 0 20px;
    }
    .systemIndex {
        main{
            margin-left: calc((100% - 867px) / 2);
            .el-row {
                .el-col-6 {
                    width: 187px;
                    height: 70px;
                    margin-right: 37px;
                    margin-top: 24px;
                    color: @text-color;
                    border: 1px solid @color;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .icon-dingdan, .icon-jinqian, .icon-jinbi, .icon-ic_saleperformance{
                    font-size: 38px;
                    float: left;
                    color: @color;
                    margin-right: 8px;
                }
                .account-text {
                    font-size: 13px;
                    margin-bottom: 9px;
                }
                .account {
                    color: #D23029;
                    font-size: 16px;
                    font-weight: bold;
                }
            }
            .el-col-12 {
                width: 860px;
                margin-top: @margin-top;
                border: @border;
                .bg-purple {
                    .bg-purple;
                }
                .navDiv {
                    height: 112px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    .navUl {
                        float: left;
                        margin-right: 35px;
                        &:last-child {
                            margin-right: 0;
                        }
                        .common {
                            font-size: 38px;
                            color: @color;
                            display: inline-block;
                            margin-bottom: 14px;
                        }
                    }     
                }
                .orderInfo {
                    width: 130px;
                    border-right: @border;
                    height: 280px;
                    float: left;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    .order-title {
                        color: @text-color;
                        margin-bottom: 8px;
                    }
                    .order-num {
                        font-size: @margin-top;
                        color: @text-color;
                        margin-bottom: 8px;
                    }
                    .order-text {
                        color: rgba(159,160,160,1);
                        font-size: 14px;
                        transform: scale(0.9);
                        margin-bottom: 40px;
                    }
                    .el-icon-caret-top {
                        margin-left: 5px;
                        color: #00A950;
                    }
                    .el-icon-caret-bottom {
                        margin-left: 5px;
                        color: rgba(210,48,41,0.9);
                    }
                }
                #orderChart, #saleChart {
                    float: right;
                    width: 720px;
                    height: 280px;
                }
            }
            .el-table {
                width: 860px !important;
                cursor: pointer; 
            }
            .el-col-8 {
                width: 412px;
                margin-top: @margin-top;
                border: @border;
                margin-right: 36px;
                &:last-of-type {
                    margin-right: 0
                }
                .bg-purple {
                    .bg-purple;
                }
                .commonDiv {
                    height: 106px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .commonList {
                        float: left;
                        color: @text-color;
                        margin-right: 50px;
                        text-align: center;
                        &:last-of-type {
                            margin-right: 0;
                        }
                        .shopNum {
                            font-size: 17px;
                            font-weight: bold;
                            color: rgba(210,48,41,1);
                            margin-bottom: 18px;
                        }
                    }
                }
                
            }
        } 
    }
</style>