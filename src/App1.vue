<template>
	<div id="app1">
		<!-- <ScoreBoard></ScoreBoard> -->
		<el-container>
			<el-header>
				<el-menu
					router="true"
					:default-active="activeIndex"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
				>
					<el-menu-item index="/home">
						<!-- <router-link to="/home"> -->
						首页
						<!-- </router-link> -->
					</el-menu-item>
					<el-menu-item index="/problemstorage">题库</el-menu-item>
					<el-menu-item index="/contests">比赛</el-menu-item>
					<el-menu-item index="/ranklist"> 排名 </el-menu-item>
					<el-menu-item index="/users"> 用户 </el-menu-item>
					<el-menu-item index="/addproblem"> 添加题目 </el-menu-item>
					<el-menu-item index="/others"> 其他 </el-menu-item>
					<div class="LoginRegister" v-if="!ifLogin">
						<router-link to="/register">
							<el-button type="primary" size="medium"
								>注册</el-button
							>
						</router-link>
						<router-link to="/login">
							<el-button size="medium">登录</el-button>
						</router-link>
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
									<el-dropdown-item
										>个人中心</el-dropdown-item
									>
									<el-dropdown-item>abcde</el-dropdown-item>
									<el-dropdown-item>sdacsd</el-dropdown-item>
									<el-dropdown-item divided @click="logout()"
										>注销</el-dropdown-item
									>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
				</el-menu></el-header
			>
			<el-main>
				<!-- <div class="htmlHeader"></div> -->
				<router-view
			/></el-main>
		</el-container>
		<!-- v-if="isRouterAlive" -->
	</div>
</template>

<script>
// import ScoreBoard from "./components/ScoreBoard.vue";
// import Login from "./components/Login.vue";
// import Register from "./components/Register.vue";
import axios from "axios";
import { BASE_API } from "./config/dev";
import { ElMessage } from "element-plus";
import { defineComponent } from "vue";

export default defineComponent({
	name: "App1",
	data() {
		return {
			ifLogin: false,
			activeIndex: "/home",
			isRouterAlive: true,
		};
	},
	// provide () {
	// 	return {
	// 		reload: this.reload
	// 	}
	// },
	components: {
		// ScoreBoard,
		// Login,
		// Register,
	},
	mounted() {
		axios
			.post(
				BASE_API + "/api/auth/info",
				{},
				{
					headers: {
						Authorization:
							localStorage.getItem("jwtToken") == null
								? ""
								: "Bearer " + localStorage.getItem("jwtToken"),
						RefreshToken:
							localStorage.getItem("refresh") == null
								? ""
								: localStorage.getItem("refresh"),
					},
				}
			)
			.then((resp) => {
				if (resp != undefined) {
					this.ifLogin = true;
				}

				console.log(resp);
			})
			.catch((error) => {
				// ElMessage.error({
				//     message: error,
				//     type: "success",
				//     center: true,
				// });
				console.log(error);
			});
	},
	methods: {
		// reload() {
		// 	this.isRouterAlive = false;
		// 	this.$nextTick(function(){
		// 		this.isRouterAlive = true;
		// 	})
		// },
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		logout() {
			axios
				.post(
					BASE_API + "/api/auth/logout",
					{},
					{
						headers: {
							Authorization:
								localStorage.getItem("jwtToken") == null
									? ""
									: "Bearer " +
									  localStorage.getItem("jwtToken"),
							RefreshToken:
								localStorage.getItem("refresh") == null
									? ""
									: localStorage.getItem("refresh"),
						},
					}
				)
				.then((resp) => {
					console.log(resp);
					if (resp.data.code == 200) {
						this.ifLogin = false;
						localStorage.removeItem("jwtToken");
						localStorage.removeItem("refresh");
						ElMessage.success({
							message: resp.data.msg,
							type: "success",
							center: true,
						});
					}
				});
		},
	},
});
</script>

<style>
a {
	text-decoration: none;
}
.htmlHeader {
	height: 45px !important;
	width: 100% !important;
}
.LoginRegister {
	position: fixed;
	right: 10%;
	width: 20%;
}
::-webkit-scrollbar {
	width: 9px;
	height: 14px;
}

::-webkit-scrollbar-track {
	border-radius: 9px;
}
::-webkit-scrollbar-thumb {
	border-radius: 9px;
	background-color: #b6b6b6;
}
</style>

<style scoped>
body {
	padding-top: 0 !important;
	margin-top: 0 !important;
	padding: 0 10% !important;
}
.el-header {
	height: 46px !important;
	position: relative;
	width: 100%;
	border-bottom: solid 1px #e6e6e6;
}
.el-main {
	position: absolute;
	left: 0;
	right: 0;
	top: 46px;
	bottom: 0;
	overflow: auto;
	/* background-color: #e6e6e6; */
}
.el-menu {
	width: 100% !important;
	padding-left: 20% !important;
	margin-top: 0 !important;
	position: fixed;
}
.el-submenu .el-submenu__title:hover,
.el-menu-item:hover {
	background-color: #e2eff9 !important;
	color: #38b2ff !important;
}

.el-menu,
.el-menu-item {
	height: 45px !important;
	line-height: 45px !important;
}

.el-button {
	/* font-weight: bold !important;
    float: right; */
	margin-right: 10px;
}
.el-dropdown-link {
	cursor: pointer;
	color: #409eff;
}
.el-icon-arrow-down {
	font-size: 12px;
}
</style>
