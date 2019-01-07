<template>
  <div class="homeSideBar">
    <el-aside width="188px">
        <el-col :span="24">
            <el-menu :default-active="this.$route.path"  text-color="#595757" background-color="rgba(239,239,239,1)" router @select="handleSelect">
                <el-menu-item index="0" disabled>
                    <span slot="title">系统首页</span>
                </el-menu-item>
                <div v-for="(item, index) in list" :key="index">
                    <el-menu-item :index="item.path" >
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
    name: 'homeSideBar',
    data() {
        return {
            active: '/index/systemIndex',
            list: [{
                    path: '/index/systemIndex',
                    title: '系统首页'
                },{
                    path: '/index/accountSetting',
                    title: '账户设置'
                },{
                    path: '/index/systemInfo',
                    title: '系统信息'
                },{
                    path: '/index/loginLog',
                    title: '登录日志'
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
    .homeSideBar .el-menu-item.is-active {
        background-color: #fff !important;
        border-bottom: 1px solid @color;
    }
    .homeSideBar {
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
                color: #000 !important;
            }
            .el-menu-item.is-active { 
                color: #5BC0BF;
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
