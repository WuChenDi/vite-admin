import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';

import VueHighcharts from './directive/highcharts';

async function bootstrap() {
  const app = createApp(App);

  app.use(router);
  app.use(store);
  app.use(VueHighcharts);

  app.mount('#app', true);
}

void bootstrap();
