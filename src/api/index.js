//导入axios
import axios from "axios";
import router from '../router';
//创建多个基地址
//创建一个axios实例
let baseUrl = "";
switch (process.env.NODE_ENV) {
    case "development": // 注意这里的名字要和步骤二中设置的环境名字对应起来
        baseUrl = "http://43.154.184.138:8084"; //这里是测试环境中的url
        break;
    case "production":
        baseUrl = "https://app.fairviewpark.hk"; //生产环境url
        break;
    default:
        baseUrl = "http://43.154.184.138:8084"; //这里是本地的请求url
}
export const http = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    timeout: 1800000, //数据响应过期时间
    // headers: {
    //   // 设置后端需要的传参类型
    //   "Content-Type": "application/json",
    //   token: "your token",
    //   "X-Requested-With": "XMLHttpRequest",
    // },
});
//登录
http.login = (arr) => {
    return http.post(`/houseweb/member/login`, arr);
};

/* 请求拦截:在浏览器发送请求报文给服务器的途中执行 */
http.interceptors.request.use((config) => {
    //在发送给服务器的时候带token给服务器
    // if (window.localStorage.getItem('login-info')) {
    //     config.headers.Authorization = JSON.parse(window.localStorage.getItem('login-info') || '').jwt;
    // }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
/* 响应拦截: 在服务器把响应报文发送给浏览器的途中执行 */
http.interceptors.response.use(function (response) {
    // if (response.data.status === 104) {
    //     if (localStorage.getItem('login-info')) {
    //         ElMessage({
    //             showClose: true,
    //             message: sessionStorage.getItem('fairview_park_lang') === 'en_us' ? 'Login timeout Please login again' : '登錄逾時，請重新登入! ',
    //             type: 'warning',
    //         });
    //     }
    //     localStorage.removeItem('login-info');
    //     router.push('/home');
    //     return;
    // }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
/* ----------------------------------------------------------------------- */
export default http;
