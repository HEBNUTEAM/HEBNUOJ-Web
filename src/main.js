import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import '@/assets/iconfont/iconfont.css'

const app = createApp(App).use(router)
app.use(ElementPlus)

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title + "-HEBNUOJ"
	}else{
		document.title = "HEBNUOJ";
	}
	next()
  })
app.mount('#app')




