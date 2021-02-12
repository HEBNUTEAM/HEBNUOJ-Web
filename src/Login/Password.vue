<template>
    <div class="password">
        <div class="PasswordHeader">
            <img alt="Vue logo" src="../assets/logo.jpg" />
            <span style="">重置您的密码</span>
        </div>
        <el-form ref="form" :model="form" :rules="rules">
            <el-form-item prop="email">
                <el-input placeholder="邮箱" v-model="form.email">
                    <template #prefix>
                        <i
                            class="iconfont icon-youxiang"
                            style="font-size: 15px; margin: 5px"
                        ></i>
                    </template>
                </el-input>
            </el-form-item>
			
            <el-form-item prop="emailidentify">
                <el-input placeholder="邮箱验证码" v-model="form.emailidentify">
                    <template #prefix>
                        <i
                            class="iconfont icon-dunpaibaowei"
                            style="font-size: 22px; margin: 3px"
                        ></i>
                    </template>
                </el-input>
                <div
                    class="divIdentifyingCode"
                    @click="getIdentifyingCode()"
                >
                    <el-button type="info" id="identifyingCode">{{
                        identifytext
                    }}</el-button>
                </div>
            </el-form-item>
            <el-form-item prop="password1">
                <el-input
                    placeholder="新密码"
                    v-model="form.password1"
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
			<el-form-item prop="password2">
                <el-input
                    placeholder="确认密码"
                    v-model="form.password2"
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
            <el-row>
                <el-button type="primary" class="passwordButton" @click="submitForm('form')">提交</el-button>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Identify from "./Identify.vue"

export default defineComponent({
    name: "Password",
    data() {
		var email = (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            if (!value) {
                return callback(new Error("请输入邮箱"));
            } else if(!mailReg.test(value)) {
				callback(new Error("邮箱无效"));
			} else{
				callback();
			}
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (value.length < 6) {
                callback(new Error("密码需要大于等于6位"));
            } else {
                if (this.form.password2 !== "") {
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
            } else if (value !== this.form.password1) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
			identifytext: "获取验证码",
			timer: 0,
            form: {
				email: "",
				emailidentify: "",
				password1: "",
				password2: "",
			},
			rules: {
				email: [{ validator: email, trigger: "blur" }],
				emailidentify: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
                password1: [{ validator: validatePass, trigger: "blur" }],
                password2: [{ validator: validatePass2, trigger: "blur" }],
            },
        };
    },
    components: {
        Identify,
    },
    methods: {
        getIdentifyingCode: function () {
			this.$refs.form.validateField('email', (emailError) => {
				if(!emailError){
					this.timer = 60;
            		this.countDown();
				} else{
					console.log(emailError);
				}
				
			});
		},
		countDown() {
			if(this.timer > 0){
				this.identifytext = this.timer + "s后重新获取";
				this.timer --;
				
				setTimeout(this.countDown, 1000);
			}
			else{
				this.identifytext = "重新获取验证码"
			}
		},
		submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
					console.log(this.form);
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
.PasswordHeader {
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
.passwordButton {
    width: 92%;
    min-width: 320px;
    margin: 15px auto;
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
