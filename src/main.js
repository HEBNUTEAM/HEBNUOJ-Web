import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import '@/assets/iconfont/iconfont.css'
import axios from 'axios'



const app = createApp(App).use(router)
app.use(ElementPlus)

axios.interceptors.response.use(
	response => {

		console.log(response);
		if (response.headers.refresh) {
			localStorage.setItem(
				"refresh",
				resp.data.data.refresh
			);
		}
		if (response.headers.token) {
			localStorage.setItem(
				"token",
				resp.data.data.token
			);
		}
		if(response.data.code == 401) {
			router.replace({
				path: "/login"
			})
		} else {
			return response
		}
	})

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title + "-HEBNUOJ"
	} else {
		document.title = "HEBNUOJ";
	}
	next()
})
app.mount('#app')




