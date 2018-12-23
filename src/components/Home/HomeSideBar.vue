<template>
  <div class="homeSideBar">
    <el-col :span="24">
        <el-menu default-active="/systemIndex"  text-color="#595757" background-color="rgba(239,239,239,1)" :router="true">
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
  </div>
</template>

<script>
export default {
    name: 'homeSideBar',
    data() {
        return {
            list: [{
                    path: '/systemIndex',
                    title: '系统首页'
                },{
                    path: '/accountSetting',
                    title: '账户设置'
                },{
                    path: '/systemInfo',
                    title: '系统信息'
                },{
                    path: '/loginLog',
                    title: '登录日志'
                }]
        }
    },
}
</script>

<style scoped lang="less">
    .homeSideBar {
        .el-menu-item.is-disabled {
            cursor: default;
            color: #000 !important;
        }
        .el-menu-item.is-active { 
            color: #5BC0BF;
        }
    }    
</style>
