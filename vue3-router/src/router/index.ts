import { createRouter, createWebHistory } from "vue-router"

import Layout from "../views/Layout.vue";
// import Home from "../views/Home.vue"
// import ArticleList from "../views/ArticleList.vue"
// import ArticleDetail from "../views/ArticleDetail.vue"
// import UserDashboard from "../views/UserDashboard.vue"
// import UserProfile from "../views/UserProfile.vue"
// import UserSetting from "../views/UserSetting.vue"
// import Login from "../views/Login.vue"

//定义路由数组
const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        rediret: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import("../views/Home.vue")
            },
            {
                path: "/articles",
                name: "ArticleList",
                component: () => import("../views/ArticleList.vue")

            },
            //动态路由配置
            {
                path: "/articles/:id",
                component: () => import("../views/ArticleDetail.vue"),

                children: [
                    {
                        path: "comments",
                        name: "ArticleComments",
                        component: () => import("../views/ArticleComments.vue"), // 添加评论组件
                    },
                ],
            },
            //嵌套路由
            {
                path: "/user",
                component: () => import("../views/UserDashboard.vue"),

                //重定向
                redirect: "/user/profile",
                children: [
                    {
                        path: "profile",
                        name: "UserProfile",
                        component: () => import("../views/UserProfile.vue")

                    },
                    {
                        path: "setting",
                        name: "UserSettinge",
                        component: () => import("../views/UserSetting.vue")
                    }
                ],
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
];

//定义路由对象
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savePosition) {
        //返回浏览器保存的滚动位置
        if (savePosition) {
            return savePosition;
        } else {
            return { top: 0 };
        }
    }
});


//配置全局路由导航守卫
router.beforeEach((to,from,next) => {

    if (to.path.startsWith("/user") && !localStorage.getItem("token")){
        alert("请先登录");
        next('/login');
    }else{
        //直接放行
        next();
    }
});

export default router;