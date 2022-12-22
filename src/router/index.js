import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/components/login/Login'),
    },
    {
        path: '/conteudo',
        name: 'conteudo',
        component: () => import(/* webpackChunkName: "conteudo" */ '@/components/conteudo/Conteudo'),
    },
    {
        path: '/calculadora',
        name: 'calculadora',
        component: () => import(/* webpackChunkName: "calculadora" */ '@/components/calculadora/Calculadora'),
    },
    {
        path: '/usuario/novo',
        name: 'usuario novo',
        component: () => import(/* webpackChunkName: "usuario novo" */ '@/views/usuario/novo/main'),
    },
    {
        path: '/usuario/editar',
        name: 'usuario editar',
        component: () => import(/* webpackChunkName: "usuario editar" */ '@/views/usuario/novo/indexPage'),
    },
    {
        path: '/usuario/edit/:id',
        name: 'usuario editado',
        component: () => import(/* webpackChunkName: "usuario editado" */ '@/views/usuario/novo/main'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;