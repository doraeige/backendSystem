<!-- <i slot="prefix" class="el-input__icon iconfont icon-user"></i> -->
<!-- <i slot="prefix" class="el-input__icon iconfont icon-icon2"></i> -->
<!-- <i slot="suffix" class="el-input__icon iconfont icon-cuowu" v-if="writing"></i>    --> 
<template>
    <div class="login">
        <div class="wrapper">
            <header>后台业务管理系统</header>
            <el-input placeholder="请输入用户名称" v-model="form.loginName" class="accountInput" @focus="handleFocus" @blur="handleBlur"> 
                <i slot="suffix" class="el-input__icon el-icon-error" v-if="writing"></i> 
            </el-input>
            <el-input placeholder="请输入登录密码" type="password" v-model="form.loginPassword" class="passwordInput" @focus="handleFocus" @blur="handleBlur">
                <i slot="suffix" class="el-input__icon el-icon-error" v-if="writing"></i>
            </el-input>
            <div class="login_fail" v-if="loginPrompt" v-cloak>
                <i class="iconfont icon-tishi icon"></i>
                <span class="prompt-text">{{prompt}}</span>            
            </div>
            <button class="btn" @click="onSubmit" v-loading.fullscreen.lock="fullscreenLoading">登录</button>
            <footer>Copyright © 2018-2018 零售后台</footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            form: {
                loginName: '',
                loginPassword: '',
            },
            fullscreenLoading: false,
            prompt: '',
            writing: false,
            loginPrompt: false //隐藏提示框
        }
    },
    methods: {
        // 输入框获得焦点时，出现右侧icon
        handleFocus(item){
            if (item) {
                this.writing = true
            }
        },
        // 输入框失去焦点时，隐藏右侧icon
        handleBlur(item){
            if (item) {
                this.writing = false
            }
        },
        // 登录请求
        onSubmit() {
            this.axios.post('/api/merchant/login', this.form, {
                type: 'form'
            }).then( res => {
                if (res.data.errno == 426) {
                    this.prompt = res.data.msg
                    this.loginPrompt = true
                }
                if (res.data.errno == 200) {
                    this.fullscreenLoading = true
                    setTimeout(() => {
                        this.fullscreenLoading = false
                        this.$router.push('/Home')
                    }, 1000)
                }    
            }).catch( error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped lang="less">
.login /deep/ .el-input__inner {
    border-radius: 8px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}
.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.font-family {
    font-family: MicrosoftYaHei;
}
.color {
    color: #fff;
}
.login {
    width: 100%;
    height: 100vh;
    .flex;
    background: url("../assets/bg.png") no-repeat;
    .wrapper {
        width: 350px;
        display: flex;
        .flex;
        position: relative;
        header {
            .color;
            margin-bottom: 72px;
            font-size: 28px;
            font-family: MicrosoftYaHei-Bold;
        }
        .accountInput{
            margin-bottom: 30px;
        }
        .passwordInput {
            margin-bottom: 80px;
        }
        .login_fail .icon {
            .color;
            margin-right: 8px;
        }
        .login_fail .prompt-text {
            font-size: 18px;
        }
        .btn {
            width: 350px;
            height: 60px;
            background-color: #3cbbba;
            border-radius: 8px;
            font-size: 22px;
            .color;
            .font-family;
        }
        .login_fail {
            position: absolute;
            bottom: 61px;
            .color;
            width: 350px;
            height: 50px;
            line-height: 50px;
            border-radius: 10px;
            text-align: center;
            background-color: rgba(255,255,255,0.2);
        }
        footer {
            width: 283px;
            .color;
            .font-family;
            font-size: 18px;
            position: fixed;
            bottom: 70px;
        }
    }
}
</style>
