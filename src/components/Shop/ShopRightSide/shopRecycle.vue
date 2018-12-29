<template>
    <div class="shopRecycle">
        <common-nav :title="title"></common-nav>
        <el-col :span="12">
            <!-- <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">基本信息</p> -->
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品分类" prop="classification">
                    {{ruleForm.leftMenuItem}} <i class="el-icon-arrow-right"></i> {{ruleForm.rightMenuItem}} 
                </el-form-item>
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    import CommonNav from '../../common/CommonNav.vue'
    import msgBus from '@/components/common/msgBus.js'
    export default {
        name: 'shopRecycle',
        components: {
            CommonNav
        },
        data(){
            return {
                title: '商品回收站',
                ruleForm: {
                    leftMenuItem: '',
                    rightMenuItem: '',
                    name: ''
                }
            }
        },
        mounted() {
            msgBus.$on('msg', (e) => {
               console.log(e)
               let a = e[0]
               console.log(a)
               let b = e[1]
               console.log(b)
               this.ruleForm.leftMenuItem = e[0]
               console.log(this.ruleForm.leftMenuItem)
               this.ruleForm.rightMenuItem = e[1]
               console.log(this.ruleForm.rightMenuItem)
            })
        }
    }
</script>

<style scoped lang="less">
@import '../../../assets/common.less';
</style>