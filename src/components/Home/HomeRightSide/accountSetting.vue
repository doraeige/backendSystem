<template>
    <div class="accountSetting">
        <el-col :span="24">
            <span class="title">账户设置</span>
        </el-col>
        <main>
            <div class="user-info">
                <img src="../../../assets/oval@2x.png" alt="头像">
                <p>上传头像</p>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="form">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="旧密码" prop="oldpass">
                    <el-input type="password" v-model="ruleForm.oldpass"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'accountSetting',
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass')
                }
                callback()
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }
            return {
                ruleForm: {
                    username: '',
                    email: '',
                    oldpass: '',
                    pass: '',
                    checkpadd: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    oldpass: [
                        { required: true, message: '请输入旧密码', trigger: 'blur' }
                    ],
                    pass: [
                        { required: true, validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { required: true, validator: validatePass2, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(valid)
                        alert('submit!')
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>

<style scoped lang="less">
    @text-color: #595757;
    @color: #5BC0BF;
    main /deep/ .el-input__inner {
        width: 244px;
    }
    .el-col-24 {
        height: 39px;
        line-height: 39px;
        background-color: #EFEFEF;
        .title {
            font-size: 14px;
            font-weight: bold;
            color: @text-color;
            &:before {
                content: '||';
                height: 19px;
                background-color: @color;
                color: @color;
                margin-right: 20px;
                margin-left: 5px;
            }
        }
    }
    main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .user-info {
            margin-top: 30px;
            text-align: center;
            img {
                width: 107px;
                height: 107px;
            }
            p {
                color: @color;
                font-size: 12px;
                margin-top: 11px;
                letter-spacing: 2px;
                cursor: pointer;
            }
        }
        .form {
            margin-top: 15px;
            margin-left: -55px;
            .el-button--primary {
                background-color: @color;
                border-color: @color;
                margin-right: 30px;
                // margin-left: 20px;
                width: 84px;
            }
            .el-button--default {
                width: 84px;
            }
        }
    }
</style>