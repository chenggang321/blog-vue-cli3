import Vue from "vue";
import Router from "vue-router";
import Home from "./home";
import Admin from "./admin";

Vue.use(Router);

const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    Home,
    Admin,
    {
        path: "/chat",
        name: "chat",
        component: () => import("@/views/chat"),
        meta: {
            auth: true,
            title: "chat",
        },
    },
    {
        path: "/*",
        redirect: "/home",
    },
];

const router = new Router({
    routes: routes,
});

// 全局路由守卫
// 路由变化之前
// router.beforeEach((to, form, next) => {
//   const username = localStorage.get(loginUser)
//   // 登陆后直接首页
//   if (to.path === '/login') {
//     if (username) {
//       router.push('/home')
//     }
//   }
//   next()
// })
// // 路由变化之后
// router.afterEach((to) => {
//   const username = localStorage.get(loginUser)
//   // 未登录跳转登录页
//   if (!username && to.path !== '/login') {
//     //router.push('/login')
//   }
// })

export default router;
