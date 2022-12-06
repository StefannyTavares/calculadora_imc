import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/components/login/Login'),
    },
    {
        path: '/',
        name: 'conteudo',
        component: () => import(/* webpackChunkName: "conteudo" */ '@/components/conteudo/Conteudo'),
    },
    {
        path: '/calculadora',
        name: 'calculadora',
        component: () => import(/* webpackChunkName: "calculadora" */ '@/components/calculadora/Calculadora'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;