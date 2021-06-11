import { createApp } from 'vue';
import App from './App';
// import router from './router';
import { router, setupRouter } from '@/router';
import store from './store';
import { setupI18n } from '@/locales/setupI18n';
import { setupErrorHandle } from '@/logics/error-handle';

import VueHighcharts from './directive/highcharts';

import 'virtual:windi.css';

console.log(import.meta.env.DEV);
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.css');
}

async function bootstrap() {
  const app = createApp(App);

  // app.use(router);
  app.use(store);
  app.use(VueHighcharts);

  await setupI18n(app);

  setupRouter(app);

  // setupErrorHandle(app);

  await router.isReady();

  app.mount('#app', true);
}

void bootstrap();
