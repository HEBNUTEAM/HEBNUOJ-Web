// import axios from 'axios'

// //    let loadingInstance; //创建Loading 的实例
// //    axios.defaults.baseURL = appConfig.xhr.baseURL; // 配置axios请求的地址
// //    axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// //    axios.defaults.crossDomain = true;
// //    axios.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// //    axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization

// axios.interceptors.response.use(
// 	response => {
// 		// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
// 		// 否则的话抛出错误
// 		console.log(response);
// 		if (response.status === 200) {
// 			return Promise.resolve(response);
// 		} else {
// 			return Promise.reject(response);
// 		}
// 	})