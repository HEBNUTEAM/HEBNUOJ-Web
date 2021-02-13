<template>
    <div id="app">
        <!-- <ScoreBoard></ScoreBoard> -->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1"
                ><router-link to="/">首页</router-link></el-menu-item
            >
            <el-menu-item index="2">题库</el-menu-item>
            <el-menu-item index="3">比赛</el-menu-item>
            <el-menu-item index="4"> 排名 </el-menu-item>
            <el-menu-item index="5"> 用户 </el-menu-item>
            <el-menu-item index="6"> 其他 </el-menu-item>
            <div class="LoginRegister" v-if="!ifLogin">
                <router-link to="/register"
                    ><el-button type="primary">注册</el-button></router-link
                >
                <router-link to="/login"
                    ><el-button>登录</el-button></router-link
                >
            </div>
            <div class="LoginRegister" v-if="ifLogin">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        用户名<i
                            class="el-icon-arrow-down el-icon--right"
                        ></i>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>abcde</el-dropdown-item>
                            <el-dropdown-item>sdacsd</el-dropdown-item>
                            <el-dropdown-item divided>注销</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-menu>
        <router-view />
    </div>
</template>

<script>
// import ScoreBoard from "./components/ScoreBoard.vue";
// import Login from "./components/Login.vue";
// import Register from "./components/Register.vue";
import axios from "axios";
import { BASE_API } from "./config/dev";

export default {
    name: "App",
    data() {
        return {
            ifLogin: false,
            activeIndex: "1",
            activeIndex2: "1",
        };
    },
    components: {
        // ScoreBoard,
        // Login,
        // Register,
    },
    mounted() {
        // axios
        //     .post(
        //         BASE_API + "/api/auth/info",
        //         { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } }
        //     )
        //     .then((resp) => {
        //         console.log(resp.data);
        //     });
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style>
a {
    text-decoration: none;
}
.el-submenu .el-submenu__title:hover,
.el-menu-item:hover {
    background-color: #e2eff9 !important;
    color: #38b2ff !important;
}
.el-menu {
    padding-left: 20% !important;
}
.el-button {
    font-weight: bold !important;
    float: right;
    margin-right: 10px;
}
</style>

<style scoped>
.LoginRegister {
    margin-right: 10% !important;
    float: right;
    margin-top: 10px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409eff;
}
.el-icon-arrow-down {
    font-size: 12px;
}
</style>