<template>
    <div class="accountSetting">
        <common-nav :title="title"></common-nav>
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
import CommonNav from '../../common/CommonNav.vue'
    export default {
        name: 'accountSetting',
        components: {
            CommonNav
        },
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
                title: '账户设置',
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
                        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
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
    @import '../../../assets/common.less';
    main /deep/ .el-input__inner {
        width: 244px;
    }
    main {
        width: 100%;
        .flex;
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
                width: @width;
            }
            .el-button--default {
                width: @width;
            }
        }
    }
</style>