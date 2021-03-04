<template>
	<div id="app2">
		<el-menu
			router="true"
			:default-active="activeIndex"
			class="el-menu-demo"
			mode="horizontal"
			:collapse="true"
			menu-trigger="click"
			@select="handleSelect"
		>
			<el-submenu index="1">
				<template #title>
					<i class="iconfont icon-caidan" style="font-size: 30px"></i>
				</template>
				<el-menu-item>
					<template class="LoginRegister" v-if="!ifLogin">
						<router-link to="/login">
							<el-button size="medium" class="firBut"
								>登录</el-button
							>
						</router-link>
						<router-link to="/register">
							<el-button
								type="primary"
								size="medium"
								class="secBut"
								>注册</el-button
							>
						</router-link>
					</template>

					<template class="LoginRegister" v-if="ifLogin">
						<el-dropdown>
							<span class="el-dropdown-link">
								用户名
								<i
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
					</template>
				</el-menu-item>
				<el-menu-item index="/home">首页 <i
                            class="iconfont icon-home"
                            style="font-size: 20px;"
                        ></i></el-menu-item>
				<el-menu-item index="/problemstorage" class="item-border">题库<i
                            class="iconfont icon-tiku"
                            style="font-size: 17px;"
                        ></i></el-menu-item>
				<el-menu-item index="/contests" class="item-border">比赛<i
                            class="iconfont icon-bisai"
                            style="font-size: 17px;"
                        ></i></el-menu-item>
				<el-menu-item index="/ranklist" class="item-border"> 排名<i
                            class="iconfont icon-paiming"
                            style="font-size: 17x;"
                        ></i> </el-menu-item>
				<el-menu-item index="/users" class="item-border"> 用户 <i
                            class="iconfont icon-yonghuzu"
                            style="font-size: 19px;"
                        ></i></el-menu-item>
				<el-menu-item index="/others" class="item-border"> 其他<i
                            class="iconfont icon-qita"
                            style="font-size: 19px;"
                        ></i> </el-menu-item>
			</el-submenu>
		</el-menu>
		<div class="htmlHeader"></div>
		<router-view />
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
	name: "App2",
	data() {
		return {
			isCollapse: true,
			ifLogin: false,
			activeIndex: "1",
			activeIndex2: "1",
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
body {
	padding-top: 0 !important;
	margin-top: 0 !important;
	/* padding: 0 10% !important; */
}

.htmlHeader {
	height: 45px !important;
	width: 100% !important;
	border-bottom: solid 1px #e6e6e6;
}

.el-submenu__title {
	padding: 0 10px;
	height: 45px !important;
	line-height: 45px !important;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
	border: none;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
	height: 45px;
	line-height: 45px;
	padding: 0 20px;
}
.el-menu--popup {
	min-width: 180px !important;
}
</style>

<style scoped>
.iconfont{
	float: right;
	padding-right: 5px;
}
.LoginRegister {
	text-align: center;
}
.el-menu-item,
.el-submenu__title {
	white-space: normal;
}
.el-submenu .el-submenu__title:hover,
.el-menu-item:hover {
	background-color: #e2eff9 !important;
	color: #38b2ff !important;
}
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
	padding: 0 20px;
}
.el-menu {
	/* padding-left: 20% !important; */
	margin-top: 0 !important;
	position: fixed;
	right: 0px;
}
.el-menu,
.el-menu-item {
	height: 45px !important;
	line-height: 45px !important;
}
.item-border {
	border-top: solid 1px #e6e6e6;
}
.el-menu.el-menu--horizontal {
	border: none;
}

.firBut {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}
.secBut {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
}
.el-dropdown-link {
	cursor: pointer;
	color: #409eff;
}
.el-icon-arrow-down {
	font-size: 12px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 180px;
	min-height: 300px;
}
.el-menu-item {
	width: 180px;
}
</style>
