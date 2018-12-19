<template>
    <div class="shopSideBar">
        <el-col :span="24">
            <el-menu :default-active="activeIndex"  text-color="#595757" background-color="rgba(239,239,239,1)">
                <el-menu-item index="0" disabled>
                    <span slot="title">商品管理</span>
                </el-menu-item>
                <div v-for="item in list" :key="item.id">
                    <el-menu-item :index="item.id">
                        <i class="iconfont icon-dian"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </div>
                <el-menu-item index="5" disabled>
                    <span slot="title">商品配置</span>
                </el-menu-item>
                <div v-for="item in listTwo" :key="item.id">
                    <el-menu-item :index="item.id">
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
        name: 'shopSideBar',
        data() {
            return {
                activeIndex: '1',
                list: [{
                    id: '1',
                    title: '商品列表'
                },{
                    id: '2',
                    title: '添加商品'
                },{
                    id: '3',
                    title: '商品回收站'
                },{
                    id: '4',
                    title: '商品评价'
                }],
                listTwo: [{
                    id: '6',
                    title: '商品分类'
                },{
                    id: '7',
                    title: '商品类型'
                },{
                    id: '8',
                    title: '品牌管理'
                },{
                    id: '9',
                    title: '图片库管理'
                }]
            }
        }
    }
</script>

<style scoped lang="less">
    .shopSideBar {
        .el-menu-item{
            border-bottom: 1px solid #ebeef5;
        }
        .el-menu-item.is-disabled {
            cursor: default;
            color: #B9B9BA;
        }
        .el-menu-item.is-active { 
            color: #5BC0BF;    
        }
    }    
</style>