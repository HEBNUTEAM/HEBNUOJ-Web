import { createApp } from 'vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import '@/assets/iconfont/iconfont.css'
import axios from 'axios'


import VueMarkdownEditor from '../node_modules/@kangc/v-md-editor';
import '../node_modules/@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '../node_modules/@kangc/v-md-editor/lib/theme/vuepress.js';
import '../node_modules/@kangc/v-md-editor/lib/theme/style/vuepress.css';

VueMarkdownEditor.use(vuepressTheme);



const app = createApp(App).use(router)
app.use(ElementPlus)
app.use(VueMarkdownEditor);

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
				"jwtToken",
				resp.data.data.jwtToken
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




