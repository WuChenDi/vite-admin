import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import { t } from '@/hooks/web/useI18n';

const Login = () => import('@/views/sys/login/Login');
const Home = () => import('../views/Home.vue');
const Watch = () => import('../components/Watch.vue');
const watchEffect = () => import('../components/watchEffect.vue');
const ChartDemo = () => import('../components/ChaerDemo.vue');

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    title: t('routes.basic.login'),
  },
};

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home, children: [] },
  {
    path: '/watch',
    component: Watch,
    children: [],
  },
  {
    path: '/watchEffect',
    component: watchEffect,
    children: [],
  },
  {
    path: '/chart',
    component: ChartDemo,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
