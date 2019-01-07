<template>
  <div class="orderSideBar">
    <el-aside width="188px">
        <el-col :span="24">
            <el-menu :default-active="this.$route.path"  text-color="#595757" background-color="rgba(239,239,239,1)" router @select="handleSelect">
                <el-menu-item index="0" disabled>
                    <span slot="title">订单管理</span>
                </el-menu-item>
                <div v-for="(item, index) in list" :key="index">
                    <el-menu-item :index="item.path" >
                        <i class="iconfont icon-dian"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </div>
                <el-menu-item index="1" disabled>
                        <span slot="title">退款及退货</span>
                    </el-menu-item>
                    <div v-for="(item, index) in listTwo">
                        <el-menu-item :index="item.path">
                            <i class="iconfont icon-dian"></i>
                            <span slot="title">{{item.title}}</span>
                        </el-menu-item>
                    </div>
            </el-menu>
        </el-col>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
export default {
    name: 'orderSideBar',
    data() {
        return {
            active: '/order/orderList',
            list: [
                {
                    path: '/order/orderList',
                    title: '订单列表'
                },{
                    path: '/order/confirmGoods',
                    title: '确认收货'
                },{
                    path: '/order/arrivalReminder',
                    title: '到货提醒'
                },{
                    path: '/order/orderSetting',
                    title: '订单设置'
                }
            ],
            listTwo: [
                {
                    path: '/order/returnApplicationProcessing',
                    title: '退货申请处理'
                },{
                    path: '/order/refundRequestProcessing',
                    title: '退款申请处理'
                },{
                    path: '/order/returnReasonManagement',
                    title: '退货原因管理'
                }
            ]
        }
    },
    methods: {
        handleSelect(index,path) {
            console.log(index,path)
        }
    }
}
</script>

<style scoped lang="less">
    @import '../../assets/common.less';
    .orderSideBar /deep/ .el-menu-item, .el-submenu__title {
        height: 42px;
        line-height: 42px;
        font-size: 13px;
    }
    .orderSideBar {
        width: 1280px;
        height: 100vh;
        .flex;
        font-family: @font-family;
        box-sizing: border-box;
        .el-aside {
            width: 14.5%;
            height: 100%;
            background-color: rgba(239,239,239,1);
            color: rgba(89,87,87,1);
            border: 1px solid #ebeef5;
            .el-menu-item.is-disabled {
                cursor: default;
                font-size: 15px;
                font-weight: bold;
            }
            .el-menu-item.is-active { 
                color: #5BC0BF; 
                background-color: #fff !important;
                border-bottom: 1px solid @color;
                cursor: pointer;
            }
        }
        .el-main {
            width: 85.5%;
            padding: 0;
            height: 100%;
            box-sizing: border-box;
        }
    }    
</style>
