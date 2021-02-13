import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../Login/Login.vue'
import Register from '../Login/Register.vue'
import Password from '../Login/Password.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
	component: Home,
	meta: { title: "首页" }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
	meta: { title: "登录" }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
	meta: { title: "注册" }
  },
  {
    path: '/password',
    name: 'Password',
    component: Password,
	meta: { title: "重置密码" }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
