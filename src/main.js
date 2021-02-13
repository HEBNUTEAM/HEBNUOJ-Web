import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import '@/assets/iconfont/iconfont.css'
import axios from 'axios'



const app = createApp(App).use(router)
app.use(ElementPlus)

// axios.interceptors.response.use(
// 	response => {
// 		// 定时刷新access-token
// 		if (!response.data.data && response.data.data.msg === 'token invalid') {
// 			// 刷新token
// 			store.dispatch('refresh').then(response => {
// 				sessionStorage.setItem('access_token', response.data)
// 			}).catch(error => {
// 				throw new Error('token刷新' + error)
// 			})
// 		}
// 		return response
// 	},
// 	error => {
// 		return Promise.reject(error)
// 	}
// )

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title + "-HEBNUOJ"
	} else {
		document.title = "HEBNUOJ";
	}
	next()
})
app.mount('#app')




