<template>
    <div class="login">
        <div class="LoginHeader">
            <img alt="Vue logo" src="../assets/logo.jpg" />
            <span style="">登录你的账户</span>
        </div>
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="email">
                <el-input placeholder="用户名/邮箱" v-model="form.email">
                    <template #prefix>
                        <i
                            class="iconfont icon-yonghu-fuben"
                            style="font-size: 14px; margin: 6px"
                        ></i>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input
                    placeholder="密码"
                    v-model="form.pwd"
                    show-pwd
                >
                    <template #prefix>
                        <i
                            class="iconfont icon-suo"
                            style="font-size: 20px; margin: 3px"
                        ></i>
                    </template>
                    <template #suffix
                        ><router-link to="/password">
                            <el-link :underline="false" type="primary">
                                忘记密码
                            </el-link></router-link
                        >
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="emailidentify">
                <el-input placeholder="验证码" v-model="form.emailidentify">
                    <template #prefix>
                        <i
                            class="iconfont icon-dunpaibaowei"
                            style="font-size: 22px; margin: 3px"
                        ></i>
                    </template>
                </el-input>
                <div
                    class="divIdentifyingCode"
                    @click="getIdentifyingCode(true)"
                >
                    <img
                        id="imgIdentifyingCode"
                        style="height: 38px; width: 100px; cursor: pointer"
                        alt="点击更换"
                        title="点击更换"
                    />
                </div>
                <!-- <Identify></Identify> -->
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
            <el-row>
                <el-button type="primary" @click="submitForm('form')"
                    >登录</el-button
                >
            </el-row>
        </el-form>
        <el-row class="toRegister">
            <span
                >新用户？<router-link to="/register"
                    ><el-link
                        :underline="false"
                        type="primary"
                        style="font-size: 16px; line-height: 20px"
                        >注册</el-link
                    ></router-link
                >
            </span>
        </el-row>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Identify from "./Identify.vue";
import axios from "axios";
import { BASE_API } from "../config/dev";

export default defineComponent({
    name: "Login",
    data() {
        return {
            form: {
                email: "",
                pwd: "",
                emailidentify: "",
            },
            rules: {
                email: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur",
                    },
                ],
                pwd: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur",
                    },
                ],
                // emailidentify: [
                //     {
                //         required: true,
                //         message: "请输入验证码",
                //         trigger: "blur",
                //     },
                // ],
            },
        };
    },
    components: {
        Identify,
    },
    mounted: function () {
        let identifyCodeSrc =
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
        let objs = document.getElementById("imgIdentifyingCode");
        objs.src = identifyCodeSrc;
    },
    methods: {
        /**
         * 窗口代码
         * @param {Boolean} bRefresh 是否刷新
         */
        getIdentifyingCode: function (bRefresh) {
            let identifyCodeSrc =
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
            if (bRefresh) {
                identifyCodeSrc =
                    // "https://www.xxx.xxx.xxx/imgCode?" + Math.random();
                    "https://alifei05.cfp.cn/creative/vcg/veer/1600water/veer-140775274.jpg";
            }
            let objs = document.getElementById("imgIdentifyingCode");
            objs.src = identifyCodeSrc;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.form);
                    axios.post(BASE_API + "/api/auth/login", this.form)
                        .then(resp => {
                            this.$message({
                                type: 'success',
                                message: '登陆成功！'
                            })
                        })
                } else {
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
.LoginHeader {
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
.el-button {
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
    top: 2px;
    right: 0;
    z-index: 5;
    width: 100px; /*设置图片显示的宽*/
    height: 38px; /*图片显示的高*/
    background: #e2e2e2;
    margin: 0;
}
</style>
