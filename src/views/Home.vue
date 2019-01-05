<template>
  <div class="home">
    <el-container>
        <el-header>
            <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                @select="handleSelect"
                background-color="#5BC0BF"
                text-color="rgba(255,255,255,0.8)"
                active-text-color="rgba(255,255,255,0.9)">
                <el-menu-item index="0" disabled>LOGO</el-menu-item>
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">商品</el-menu-item>
                <el-menu-item index="3">订单</el-menu-item>
                <el-menu-item index="4">库存</el-menu-item>
                <el-menu-item index="5">用户</el-menu-item>
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
      <el-container>
        <el-aside width="188px" v-show="isCommentDetail">
            <HomeSideBar v-show="activeIndex == 1">
            </HomeSideBar>
            <ProductSideBar v-show="activeIndex == 2"></ProductSideBar>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSideBar from '@/components/Home/HomeSideBar.vue'
import ProductSideBar from '@/components/Product/ProductSideBar.vue'

export default {
    name: "home",
    components: {
       HomeSideBar,
       ProductSideBar
    },
    data () {
        return {
            activeIndex: '1',
            index: '',
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
    @color: #fff;
    @font-family: MicrosoftYaHei;
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
        height: 100vh;
        font-size: 14px;
        .el-header{
            width: 100%;
            color: @color;
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
        .el-aside {
            width: 14.5%;
            font-family: @font-family;
            height: 100%;
            background-color: rgba(239,239,239,1);
            color: rgba(89,87,87,1);
            border: 1px solid #ebeef5;
        }
    
        .el-main {
            width: 85.5%;
            height: 100%;
            background-color: @color;
            font-family: @font-family;
            padding: 0;
            margin-bottom: 20px;
            box-sizing: border-box;
        }
    }
</style>

