<template>
  <div class="homeSideBar">
    <el-col :span="24">
        <el-menu :default-active="activeIndex"  text-color="#595757" background-color="rgba(239,239,239,1)">
            <el-menu-item index="0" disabled>
                <span slot="title">系统首页</span>
            </el-menu-item>
            <div v-for="item in list" :key="item.id">
                <el-menu-item :index="item.id" >
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
            activeIndex: '1',
            list: [{
                    id: '1',
                    title: '系统首页'
                },{
                    id: '2',
                    title: '账户设置'
                },{
                    id: '3',
                    title: '系统信息'
                },{
                    id: '4',
                    title: '登录日志'
                }]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .homeSideBar {
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
