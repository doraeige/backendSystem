<template>
  <div class="home">
    <el-container>
        <el-header>
            <el-menu
                :default-active="this.$route.path"       
                mode="horizontal"
                @select="handleSelect"
                background-color="#5BC0BF"
                text-color="rgba(255,255,255,0.8)"
                active-text-color="rgba(255,255,255,0.9)"
                router>
                <el-menu-item index="0" disabled>LOGO</el-menu-item>
                <el-menu-item index="/index">首页</el-menu-item>
                <el-menu-item index="/goods">商品</el-menu-item>
                <el-menu-item index="/order">订单</el-menu-item>
                <el-menu-item index="4">库存</el-menu-item>
                <el-menu-item index="/user">用户</el-menu-item>
                <el-menu-item index="6">促销</el-menu-item>
                <el-menu-item index="7">运营</el-menu-item>
                <el-menu-item index="8">统计</el-menu-item>
                <el-menu-item index="9">财务</el-menu-item>
                <el-menu-item index="10">设置</el-menu-item>
                <el-menu-item index="11">权限</el-menu-item>
                <el-menu-item index="12" class="icon-item">
                    <i class="iconfont icon-yonghu icon"></i>
                        admin
                </el-menu-item>
                <el-menu-item index="13">
                    <i class="iconfont icon-shouye"></i>
                </el-menu-item>
                <el-menu-item index="14">
                    <el-badge :value="notice" class="icon-notice">
                        <i class="el-input__icon el-icon-bell" v-popover:popover></i>
                    </el-badge>
                    <!-- <el-popover
                        ref="popover"
                        placement="bottom"
                        width="277"
                        trigger="hover"
                        >
                        <div>
                            <p class="notice-text">订单提示</p>
                            <ul v-for="item in list" >
                                <li class="li-left">{{item.order}}</li>
                                <li class="li-right">({{item.num}})</li>
                            </ul>
                        </div>
                        </el-popover> -->
                </el-menu-item>
                <el-menu-item index="15">
                    <i class="iconfont icon-guanji"></i>
                </el-menu-item>
            </el-menu>
        </el-header>
      <el-container class="main">
          <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    name: "home",
    data () {
        return {
            activeIndex: '/index',
            notice: 20,
            list: [
                {order :'待付款订单', num: 10},
                {order :'待发货订单', num: 10},
                {order :'已发货订单', num: 10},
                {order :'已完成订单', num: 10}
            ]
        }
    },
    methods: {
        handleSelect(index,path) {
            console.log(index,path)
            this.activeIndex = index
        },
    },
    computed: {
        isCommentDetail() {
            return this.$store.state.isCommentDetail
        }
    }
}
</script>

<style <style lang="less" scoped>
    @import '../assets/common.less';
    @color: #fff;
    .home /deep/ .el-header {
        padding: 0;
    }
    .home /deep/ .el-menu-item.is-active {
        border: 0;
        background-color: rgba(255,255,255,0.4) !important;
    }
    .home /deep/ .el-badge__content {
        width: 15px;
        height: 15px;
        line-height: 17px;
        border-radius: 50%;
        padding: 3px;
    }
    .home /deep/ .el-badge__content.is-fixed {
        font-size: 12px;
        transform: scale(0.8);
        top: 11px;
        right: -7px;
    }
    .home {
        width: 1280px;
        height: 100%;
        font-size: 14px;
        .el-header{
            width: 100%;
            color: @color;
            height: 60px;
            .el-menu--horizontal>.el-menu-item {
                border-bottom: 0;
                box-sizing: border-box;
                position: relative;
                .icon-yonghu, .icon-shouye, .el-icon-bell, .icon-guanji{
                    color: @color;
                    font-size: 22px;
                }
                .el-input__icon {
                    line-height: 60px;
                }
            }
            .icon-item {
                // margin-left: 50px;
                &:after {
                    position: absolute;
                    right: 0;
                    width: 2px;
                    content: '|';
                    height: 20px;
                    color: @color;
                }
            }
            .el-menu.el-menu--horizontal {
                border: 0;
            }
            .el-menu-item.is-disabled {
                opacity: 1;
                font-size: 30px;
                font-family: @font-family;
                cursor: default;
                margin-left: 60px;
            }
        }
        .main {
            width: 1280px;
            height: 100%;
        }
    }
</style>