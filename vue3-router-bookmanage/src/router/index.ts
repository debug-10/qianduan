import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../views/Layout.vue';

// 检查用户是否登录
const isAuthenticated = () => {
    return !!localStorage.getItem('user'); // 检查是否有用户信息
};

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/login',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: '/books',
                name: 'BookList',
                component: () => import('../views/BookList.vue'),
            },
            {
                path: '/books/:id',
                name: 'BookDetail',
                component: () => import('../views/BookDetail.vue'),
            },
            {
                path: '/cart',
                name: 'Cart',
                component: () => import('../views/Cart.vue'),
                beforeEnter: (to, from, next) => {
                    if (isAuthenticated()) {
                        next(); // 用户已登录，允许访问
                    } else {
                        next({ name: 'Login' }); // 未登录，重定向到登录页面
                    }
                },
            },
            {
                path: '/orders',
                name: 'Orders',
                component: () => import('../views/Orders.vue'),
            },
            {
                path: '/login',
                name: 'Login',
                component: () => import('../views/Login.vue'),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
