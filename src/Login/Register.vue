<template>
    <div class="register">
        <div class="RegisterHeader">
            <img alt="Vue logo" src="../assets/logo.jpg" />
            <span style="">注册新账户</span>
        </div>
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="nick">
                <el-input placeholder="用户名" v-model="form.nick">
                    <template #prefix>
                        <i
                            class="iconfont icon-yonghu-fuben"
                            style="font-size: 14px; margin: 6px"
                        ></i>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="email">
                <el-input placeholder="邮箱" v-model="form.email">
                    <template #prefix>
                        <i
                            class="iconfont icon-youxiang"
                            style="font-size: 16px; margin: 5px"
                        ></i>
                    </template>
                </el-input>
            </el-form-item>
            <!-- -->
            <el-form-item prop="emailidentify">
                <el-input placeholder="邮箱验证码" v-model="form.emailidentify">
                    <template #prefix>
                        <i
                            class="iconfont icon-dunpaibaowei"
                            style="font-size: 22px; margin: 3px"
                        ></i>
                    </template>
                </el-input>
                <div class="divIdentifyingCode" @click="getIdentifyingCode()">
                    <el-button type="info" id="identifyingCode">{{
                        identifytext
                    }}</el-button>
                </div>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input placeholder="密码" v-model="form.pwd" show-password>
                    <template #prefix>
                        <i
                            class="iconfont icon-suo"
                            style="font-size: 20px; margin: 3px"
                        ></i>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="pwd1">
                <el-input
                    placeholder="确认密码"
                    v-model="form.pwd1"
                    show-password
                >
                    <template #prefix>
                        <i
                            class="iconfont icon-suo"
                            style="font-size: 20px; margin: 3px"
                        ></i>
                    </template>
                </el-input>
            </el-form-item>
            <span style="font-size: 10px; color: #aaa; line-height: 14px"
                >本网站受 reCAPTCHA 和 Google 的保护，适用<el-link
                    :underline="false"
                    type="primary"
                    style="font-size: 10px; line-height: 14px"
                    >隐私政策</el-link
                >和<el-link
                    :underline="false"
                    type="primary"
                    style="font-size: 10px; line-height: 14px"
                    >服务条款</el-link
                >。</span
            >
            <el-form-item>
                <el-button
                    class="registerButton"
                    type="primary"
                    @click="submitForm('form')"
                    >注册</el-button
                >
            </el-form-item>
        </el-form>
        <el-row class="toRegister">
            <span
                >已有账户？<router-link to="/login"
                    ><el-link
                        :underline="false"
                        type="primary"
                        style="font-size: 16px; line-height: 20px"
                        >登录</el-link
                    ></router-link
                >
            </span>
        </el-row>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { BASE_API } from "../config/dev.js";
import axios from "axios";
// import Identify from "./Identify.vue";

export default defineComponent({
    name: "Register",
    data() {
        var nickname = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入用户名"));
            } else if (value.length < 1 || value.length > 25) {
                callback(
                    new Error(
                        "用户名的长度必须大于等于1个字符，小于等于25个字符"
                    )
                );
            } else {
                callback();
            }
        };
        var eMail = (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (!value) {
                return callback(new Error("请输入邮箱"));
            } else if (!mailReg.test(value)) {
                callback(new Error("邮箱无效"));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (value.length < 6) {
                callback(new Error("密码需要大于等于6位"));
            } else {
                if (this.form.pwd1 !== "") {
                    this.$refs.form.validateField("password2");
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value.length < 6) {
                callback(new Error("密码需要大于等于6位"));
            } else if (value !== this.form.pwd) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            // BASE_API: BASE_API,
            identifytext: "获取验证码",
            timer: 0,
            form: {
                nick: "",
                email: "",
                emailidentify: "",
                pwd: "",
                pwd1: "",
            },
            rules: {
                nick: [{ validator: nickname, trigger: "blur" }],
                email: [{ validator: eMail, trigger: "blur" }],
                emailidentify: [
                    // {
                    //     required: true,
                    //     message: "请输入验证码",
                    //     trigger: "blur",
                    // },
                ],
                pwd: [{ validator: validatePass, trigger: "blur" }],
                pwd1: [{ validator: validatePass2, trigger: "blur" }],
            },
        };
    },
    components: {
        // Identify,
    },
    methods: {
        /**
         * 窗口代码
         * @param {Boolean} bRefresh 是否刷新
         */
        getIdentifyingCode: function () {
            this.timer = 60;
            this.countDown();
        },
        countDown() {
            if (this.timer > 0) {
                this.identifytext = this.timer + "s后重新获取";
                this.timer--;

                setTimeout(this.countDown, 1000);
            } else {
                this.identifytext = "重新获取验证码";
            }
        },
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(this.form);
                    // console.log(axios);
                    axios
                        .post(BASE_API + "/api/auth/register", this.form)
                        .then((response) => {
                            if (response.data.code == 200) {
                                //注册成功
                                console.log("注册成功");
                                console.log(response.data.msg);
                            } else if (response.data.code == 422) {
                                console.log("验证错误");
                                //后端验证错误
                            } else if (response.data.code == 500) {
                                console.log("服务端错误");
                                //服务端密码加密错误
                            }
                        })
                        .catch((error) => {
                            alert("注册失败，请重新注册");
                        });
                } else {
                    // console.log(axios)
                    // console.log(BASE_API)
                    console.log("error submit!!");

                    return false;
                }
            });
        },
    },
});
</script>

<style scoped>
img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
.RegisterHeader {
    margin: 25px;
    font-size: 35px;
    text-align: center;
    display: flex;
    line-height: 50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.el-form {
    width: 32%;
    margin: 20px auto;
    min-width: 350px;
    border: 1px solid #eee;
    text-align: center;
    border-radius: 5px;
    /* padding-top: 20px; */
}
.el-form-item {
    width: 92%;
    min-width: 320px;
    margin: 15px auto;
}
.registerButton {
    width: 92%;
    min-width: 320px;
    margin: 15px auto;
}
.toRegister {
    width: 32%;
    height: 50px;
    margin: 15px auto;
    line-height: 50px;
    min-width: 350px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: rgb(250, 250, 250);
}
.toRegister span {
    width: 35%;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    min-width: 350px;
    text-align: center;
}
.divIdentifyingCode {
    position: absolute;
    top: 1px;
    right: 0;
    z-index: 5;
    width: auto;
    height: 40px;
    background: #e2e2e2;
    margin: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
#identifyingCode {
    height: 40px;
    width: auto;
    margin: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    cursor: pointer;
    background-color: #adadad;
}
</style>
