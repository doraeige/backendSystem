<template>
    <div class="step0">
        <el-col :span="12">
            <i class="iconfont icon-xiangyouzhishipaitianchongban"></i>
            <p class="icon-text">基本信息</p>
            <span class="">您最近使用的商品分类</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.id">
                </el-option>
            </el-select>
        </el-col>
        <el-col :span="18">
            <ul class="common-menu left-menu" ref="rightMenu">
                <p class="menu-header">选择一级分类</p>
                <li 
                    v-for= '(item,index) in leftMenus' 
                    :key=item.id 
                    class= "menu-item"
                    :class= "{active:currentIndex === item.id}" 
                    @click=selectLeftMenu(item.id,item.title)
                >
                    <span>{{item.title}}</span>
                    <i class="el-icon-arrow-right"></i>
                </li>
            </ul>
            <div class="menu-icon">
                <i class="iconfont icon-web__bitebiyoujiantou"></i>
            </div>
            <ul class="common-menu right-menu" ref="leftMenu">
                <p class="menu-header">选择二级分类</p>
                <li 
                    v-for= '(item,index) in rightMenus' 
                    :key=item.id 
                    class= "menu-item"
                    :class= "{active:currentIndex === item.id}"
                    @click=selectRightMenu(item) 
                >
                    <span>{{item}}</span>
                    <i class="el-icon-arrow-right"></i>
                </li>
            </ul>
        </el-col> 
        <el-col :span="12">
            您当前选择的商品类别是: 
            <span v-show="leftMenuItem" class="info">
                {{leftMenuItem}} <i class="el-icon-arrow-right"></i> {{rightMenuItem}}    
            </span> 
        </el-col>
    </div>
</template>

<script>
    export default {
        name: 'step0',
        data(){        
            return {
                value: '',
                options: [],
                currentIndex: 0,
                leftMenus: [
                    {id: 1, title: '服装'},
                    {id: 2, title: '餐厨'},
                    {id: 3, title: '配件'},
                    {id: 4, title: '居家'},
                    {id: 5, title: '洗护'},
                    {id: 6, title: '婴童'},
                    {id: 7, title: '杂货'}
                ],
                menus: {
                    '1':['内裤','内衣','袜子','大衣','家居服','衬衫','外套'],
                    '2':['烹饪锅具','餐具','厨房配件','刀剪菜板','锅具套餐','炒锅','保鲜盒'],
                    '3':['帽子','围巾','腰带','手套','皮带','丝巾','披肩'],
                    '4':['四件套','被子','枕芯','毛巾浴巾','窗帘','电热毯','沙发垫'],
                    '5':['沐浴露','洗发水','牙刷','洗面奶','牙膏','洗衣液','香皂'],
                    '6':['奶嘴奶瓶','睡袋/抱被','婴儿枕','儿童餐具','拉拉裤','婴儿外出服','爬行垫'],
                    '7':['多肉植物','跑步机','眼镜架','空气净化器','保健品','手表','手机']
                },
                rightMenus: [],
                leftMenuItem: '',
                rightMenuItem: ''
            }
        },
        methods: {
            selectLeftMenu(index,title) {
                console.log(index,title)
                this.rightMenus = this.menus[index]
                this.rightMenus.splice(0, 0)
                this.leftMenuItem = title
            },
            selectRightMenu(item) {
                this.rightMenuItem = item
                console.log(this.leftMenuItem, item)
                this.$store.commit('changeItem', {leftItem: this.leftMenuItem, rightItem:item})
            }
        },
        mounted() {
            this.axios.get('/history-record').then(res => {
                if(res.data.error_code == 0){
                    console.log(res)
                    this.options = res.data.data.options
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped lang="less">
    @import '../../../../assets/common.less';
    .el-col-12 {
        margin-left: @margin-top * 5;
        margin-top: @margin-top * 2.5;
        box-sizing: border-box;
        position: relative;
        .el-select {
            margin-left: @margin-top;
        }
        .icon-xiangyouzhishipaitianchongban {
            color: @color;
            font-size: 130px;
            position: absolute;
            left: -180px;
            top: -50px;
        }
        .icon-text {
            color: rgba(255,255,255,0.9);
            position: absolute;
            top: 8px;
            left: -170px;
        } 
    }
    .el-col-18 {
        margin-top: @margin-top * 3;
        margin-left: @margin-top * 5;
        .flex;
        .menu-icon {
            margin: 0 @margin-top * 3;
            .iconfont {
                font-size: 33px;
                color: #DEF2F2;
            }
        }
        .common-menu {
            width: 253px;
            height: 260px;
            border: @border;
            color: rgba(136,136,136,0.8);
            .menu-header {
                line-height: 32px;  
                font-weight: bold;
                border-bottom: @border;
                padding-left: 10px;
                font-size: 15px;
            }
            .menu-item {
                border-bottom: @border;
                line-height: 32px;
                box-sizing: border-box;
                padding-left: 10px;
                padding-right: 20px;
                &:last-of-type {
                    border-bottom: 0;
                } 
                .el-icon-arrow-right {
                    float: right;
                    line-height: 32px;
                }
            }
        }
        .right-menu {
            width: 253px;
            border: @border;
        }
    }
    .info {
        color: @color;
    }
</style>