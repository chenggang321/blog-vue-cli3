export default {
    path: "/home",
    name: "home",
    component: () => import("@/views/common/layout/homeLayout"),
    redirect: "/home/list",
    children: [
        {
            path: "list",
            name: "list",
            component: () => import("@/views/home/list"),
            meta: {
                auth: true,
                title: "列表",
            },
        },
        {
            path: "articleDetail/:id",
            name: "articleDetail",
            component: () => import("@/views/home/detail"),
            meta: {
                auth: true,
                title: "详情",
            },
        },
    ],
};
