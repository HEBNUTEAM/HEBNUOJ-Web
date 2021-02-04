<template>
    <div id="app">
        <!-- <ScoreBoard></ScoreBoard> -->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">题库</el-menu-item>
            <el-menu-item index="3">比赛</el-menu-item>
            <el-menu-item index="4"> 排名 </el-menu-item>
            <el-menu-item index="5"> 用户 </el-menu-item>
            <el-menu-item index="6"> 其他 </el-menu-item>
            <div class="LoginRegister">
                <router-link to="/register"
                    ><el-button type="primary">注册</el-button></router-link
                >
                <router-link to="/login"
                    ><el-button>登录</el-button></router-link
                >
            </div>
        </el-menu>
        <router-view />
    </div>
</template>

<script>
// import ScoreBoard from "./components/ScoreBoard.vue";
// import Login from "./components/Login.vue";
// import Register from "./components/Register.vue";

export default {
    name: "App",
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
        };
    },
    components: {
        // ScoreBoard,
        // Login,
        // Register,
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
</style>