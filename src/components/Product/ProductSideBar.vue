<template>
    <div class="productSideBar">
        <el-col :span="24">
            <!-- default-active="/shopList" -->
            <el-menu text-color="#595757" background-color="rgba(239,239,239,1)" :router="true">
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
    </div>
</template>

<script>
    export default {
        name: 'productSideBar',
        data() {
            return {
                list: [{
                    path: '/productList',
                    title: '商品列表'
                },{
                    path: '/addProduct',
                    title: '添加商品'
                },{
                    path: '/productRecycle',
                    title: '商品回收站'
                },{
                    path: '/productComment',
                    title: '商品评价'
                }],
                listTwo: [{
                    path: '/productClassification',
                    title: '商品分类'
                },{
                    path: '/productType',
                    title: '商品类型'
                },{
                    path: '/brandManagement',
                    title: '品牌管理'
                },{
                    path: '/libraryManagement',
                    title: '图片库管理'
                }]
            }
        }
    }
</script>

<style scoped lang="less">
    .productSideBar {
        .el-menu-item.is-disabled {
            cursor: default;
            color: #B9B9BA;
        }
        .el-menu-item.is-active { 
            color: #5BC0BF;    
        }
    }    
</style>