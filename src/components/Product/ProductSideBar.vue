<template>
    <div class="productSideBar">
        <el-aside width="188px">
            <el-col :span="24">
                <el-menu :default-active="this.$route.path" text-color="#595757" background-color="rgba(239,239,239,1)" :router="true">
                    <el-menu-item index="0" disabled>
                        <span slot="title">商品管理</span>
                    </el-menu-item>
                    <div v-for="(item, index) in list">
                        <el-menu-item :index="item.path">
                            <i class="iconfont icon-dian"></i>
                            <span slot="title">{{item.title}}</span>
                        </el-menu-item>
                    </div>
                    <el-menu-item index="1" disabled>
                        <span slot="title">商品配置</span>
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
        name: 'productSideBar',
        data() {
            return {
                list: [{
                    path: '/goods/productList',
                    title: '商品列表'
                },{
                    path: '/goods/addProduct',
                    title: '添加商品'
                },{
                    path: '/goods/productRecycle',
                    title: '商品回收站'
                },{
                    path: '/goods/productComment',
                    title: '商品评价'
                }],
                listTwo: [{
                    path: '/goods/productClassification',
                    title: '商品分类'
                },{
                    path: '/goods/productType',
                    title: '商品类型'
                },{
                    path: '/goods/brandManagement',
                    title: '品牌管理'
                },{
                    path: '/goods/libraryManagement',
                    title: '图片库管理'
                }]
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/common.less';
    .productSideBar /deep/ .el-menu-item, .el-submenu__title {
        height: 42px;
        line-height: 42px;
        font-size: 13px;
    }
    .productSideBar {
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