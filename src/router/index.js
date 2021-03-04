import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../Login/Login.vue";
import Register from "../Login/Register.vue";
import Password from "../Login/Password.vue";
import Contests from "../components/Contests.vue";
import ProblemStorage from "../components/ProblemStorage.vue";
import Users from "../components/Users.vue";
import Problem from "../components/Problem.vue";
import AddProblem from "../components/AddProblem.vue";
import RankList from "../components/RankList.vue";
import Others from "../components/Others.vue";

const routes = [
	{
		path: "/home",
		name: "Home",
		component: Home,
		meta: { title: "首页" },
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: { title: "登录" },
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
		meta: { title: "注册" },
	},
	{
		path: "/password",
		name: "Password",
		component: Password,
		meta: { title: "重置密码" },
	},
	{
		path: "/contests",
		name: "Contests",
		component: Contests,
		meta: { title: "比赛" },
	},
	{
		path: "/problemstorage",
		name: "ProblemStorage",
		component: ProblemStorage,
		meta: { title: "题库" },
	},
	{
		path: "/users",
		name: "Users",
		component: Users,
		meta: { title: "用户" },
	},
	{
		path: "/ranklist",
		name: "RankList",
		component: RankList,
		meta: { title: "排名" },
	},
	{
		path: "/addproblem",
		name: "AddProblem",
		component: AddProblem,
		meta: { title: "添加题目" },
	},
	{
		path: "/others",
		name: "Others",
		component: Others,
		meta: { title: "其他" },
	},
	{
		path: "/problem/:id",
		name: "Problem",
		hidden: true,
		component: Problem,
		meta: { title: "题目" },
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import("../views/About.vue"),
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/home",
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
