import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
//挂载到vue
Vue.use(VueRouter);
//创建路由实例
const router = new VueRouter({
  mode: "history",
  base: '',
  routes: [
    {
      path: "/",
      component: () =>
        import("../views/index.vue"),
    },
  ],
});
//定义全局导航守卫
router.beforeEach((to, from, next) => {
  // 检查版本更新
  if (location.hostname !== "localhost") {
    // 监听页面打开显示
    if (!window.isHasVisibilitychange) {
      window.isHasVisibilitychange = true;
      document.addEventListener("visibilitychange", function() {
        if (!document.hidden) {
          checkAppNewVersion();
        }
      });
    }
  }
  next();
});
// 检查服务端是否已经更新，如果更新刷新页面
async function checkAppNewVersion() {
  const url = `/version.json?t=${Date.now()}`;
  let res = null;
  try {
    res = await axios.get(url);
  } catch (err) {
    console.log("checkAppNewVersion error: ", err);
  }
  if (!res) return;
  const version = res.data.version;
  //此处使用sessionStorage不用localStorage,不然多开同一个窗口有问题
  const sessionVersion = sessionStorage.getItem("version");
  if (sessionVersion && sessionVersion !== version) {
    sessionStorage.setItem("version", version);
    window.location.reload();
  }
  sessionStorage.setItem("version", version);
}
export default router;
