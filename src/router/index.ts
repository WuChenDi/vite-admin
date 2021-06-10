import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes, LoginRoute } from './routes';
import { REDIRECT_NAME } from './constant';

const WHITE_NAME_LIST = [LoginRoute.name, REDIRECT_NAME];

// const Login = () => import('@/views/Login/useLogin');
// const Home = () => import('../views/Home.vue');
// const Watch = () => import('../components/Watch.vue');
// const watchEffect = () => import('../components/watchEffect.vue');
// const ChartDemo = () => import('../components/ChaerDemo.vue');
// const routes: Array<RouteRecordRaw> = [
//   { path: '/', component: Home, children: [] },
//   {
//     path: '/watch',
//     component: Watch,
//     children: [],
//   },
//   {
//     path: '/watchEffect',
//     component: watchEffect,
//     children: [],
//   },
//   {
//     path: '/chart',
//     component: ChartDemo,
//     children: [],
//   },
// ];

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}