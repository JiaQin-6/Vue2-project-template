import Vue from 'vue'
import App from './App.vue'
//引入axios
import http from './api/index.js';
Vue.prototype.$http = http;
//引入vuex
import store from './store/index';
//引入router
import router from './router/index.js';
//引入elementUI
import {
  Button,
} from "element-ui"; 
import 'element-ui/lib/theme-chalk/index.css';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import ElementLocale from "element-ui/lib/locale";
//引入vue-i18n
import VueI18n from 'vue-i18n';
Vue.use(VueI18n); 
import { en, zh } from './i18n/index';
const i18n = new VueI18n({
  locale: 'zh_tw',
  messages: {
    'zh_tw': Object.assign(zh, zhLocale), 
    'en_us': Object.assign(en, enLocale),
  }
})
ElementLocale.i18n((key, value) => i18n.t(key, value));
Vue.use(Button);
//引入bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  i18n,
  store,
}).$mount('#app')
