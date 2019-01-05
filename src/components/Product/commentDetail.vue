<template>
    <div class="commentDetail">
        <div class="nav">
            <div class="title">
                <common-nav :title="title"></common-nav>
                <div class="right-side">
                    <el-button icon="el-icon-close" size="small" @click="toCommentPage">关闭</el-button>
                    <el-button icon="el-icon-refresh" size="small" @click="refresh">刷新</el-button>
                </div>
            </div>
        </div>
        <header>
            <div class="leftside" v-cloak v-if="userInfo.userImg">
                <img class="user-img" :src="userInfo.userImg" alt="头像">
                <p class="user-name">{{userInfo.commentName}}</p>
            </div>
            <div class="rightside">
                <ul>
                    <li>商品：<span class="product">{{userInfo.productName}}</span></li>
                    <li>购买：{{userInfo.buy}}</li>
                    <li>评价：<el-rate v-model="userInfo.value" disabled></el-rate></li>
                    <li>日期：{{userInfo.date}}</li>
                    <li>IP地址：{{userInfo.ip}}</li>
                </ul>
            </div>
        </header>
        <main>
            <div class="wrap">
                <div class="comment-icon" v-cloak v-if="userInfo.like">
                    <i class="el-icon-star-on">&nbsp;收藏&nbsp;{{userInfo.like}}</i>
                    <i class="el-icon-view">&nbsp;阅读&nbsp;{{userInfo.collection}}</i>
                </div>
                <div class="comment">
                    <p v-cloak v-for="(item, index) in userInfo.comment">{{item}}</p>
                </div>
                <div class="product-img">
                    <ul>
                        <li v-cloak v-for="(item,index) in userInfo.imgUrl" :key="index">
                            <img :src="item" alt="产品图片">
                        </li>
                    </ul>
                </div>
            </div>
        </main>s
        <footer>
            <p class="footer-title">回复评价</p>
            <el-form ref="form" :model="form" label-width="80px" size="small">
                <el-form-item label="用户名">
                    <el-col :span="9">
                        <el-input v-model="userInfo.userName" :disabled="true"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="Email">
                    <el-col :span="9">
                        <el-input v-model="userInfo.email" :disabled="true"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="回复内容" required>
                    <el-input type="textarea" :rows="8" placeholder="请输入内容" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item class="btn-area">
                    <el-button class="btn" size="medium" @click="onSubmit">确定</el-button>
                    <p class="btn-info">注意：管理员回复内容会在前台显示</p>
                </el-form-item>
            </el-form>
        </footer>
    </div>
</template>

<script>
    import CommonNav from '../common/CommonNav.vue'
    export default {
        name: "commentDetail",
        components: {
            CommonNav
        },
        inject: ['reload'], // 页面刷新
        data() {
            return {
                title: '评价详情',
                userInfo: {},
                form: {
                    desc: ''
                }
            }
        },
        methods: {
            toCommentPage() {
                this.$router.push({ name: 'productComment'})
            },
            refresh() {
                this.reload()
            },
            onSubmit() {
                console.log('sss')
            }
        },
        created() {
            this.$store.commit('hiddenLeftSide')
        },
        mounted() {
            this.axios.get('/commentdetail').then(res => {
                if(res.data.error_code == 0){
                    this.userInfo = res.data.data.data
                    console.log(this.userInfo )
                }
            }).catch(err => {
                console.log(err)
            })
        },
    }
</script>

<style scoped lang="less">
    @import '../../assets/common.less'; 
    .commentDetail /deep/ .el-button:focus, .el-button:hover {
        color: @color;
        border-color: @color;
        background-color: #fff;
    }
    .commentDetail /deep/ .el-rate__icon {
        font-size: 13px;
    }
    .nav {
        width: 100%;
        height: 39px;
        background-color: #EFEFEF;
        .title {
            width: 752px;
            margin: 0 auto;
            position: relative;
            .right-side {
                position: absolute;
                right: 0;
                top: 3px;
            }
        }
    }
    header {
        width: 752px;
        height: 136px;
        margin: 0 auto;
        border-bottom: @border;
        position: relative;
        font-size: 12px;
        .leftside {
            width: 67px;
            position: absolute;
            top: 26px;
            left: 63px;
            right: 62px;
            bottom: 44px;
            text-align: center;
            .user-img {
                border-radius: 50%;
                border: 1px soild #ccc;
            }
            .user-name {
                margin-top: 10px;
            }
        }
        .rightside {
            width: 180px;
            height: 90px;
            position: absolute;
            top: 24px;
            left: 191px;
            bottom: 22px;
            line-height: 1.65;
            .el-rate {
                display: inline-block;
                height: 13px;
            }
            .product {
                color: @color;
            }
        }
        
    }
    main {
        width: 752px;
        height: 379px;
        border-bottom: @border;
        margin: 0 auto; 
        .wrap {
            width: 702px;
            margin: 0 auto; 
            position: relative;  
            .comment-icon {
                position: absolute;
                top: 15px;
                right: 0;
                i {
                    padding-right: 20px;
                    color: #B5B5B6;
                    &:last-child {
                        padding-right: 0;
                    }
                }
            }
            .comment {
                padding: 45px 0 29px;
                p {
                    margin: 10px 0;
                    line-height: 1.5;
                    color: #595757;
                }
            }
            .product-img {
                width: 705px;
                height: 87px;
                li {
                    float: left;
                    padding-right: 16px;
                    text-align: center;
                    &:last-of-type {
                        padding-right: 0;
                    }
                }       
            }
        }
        
    }
    footer {
        width: 702px;
        margin: 0 auto;
        position: relative;
        margin-bottom: 100px;
        .footer-title {
            height: 14px;
            position: absolute;
            top: 25px;
            bottom: 31px;
            color: #595757;
            font-weight: bold;
        }
        .el-form {
            width: 100%;
            position: absolute;
            top: 69px;
            .btn-area {
                position: relative;
                line-height: 36px;
                .btn {
                    width: 84px;
                    background-color: @color;
                    border-color: @color;
                    color: #fff;
                }
                .btn-info {
                    position: absolute;
                    top: 2px;
                    left: 90px;
                    font-size: 12px;
                    transform: scale(0.9);
                    color: #9FA0A0;
                }
            }
        }
    }
</style>