import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/scss/bootstrap.scss';
import router from '@/router';
import { loadLocalMessages, setupI18n } from '@/docs/lang';

const app = createApp(App);
const i18n = setupI18n({
  locale: 'cn',
  legacy: false
});
async function init () {
  app.use(i18n);
  await loadLocalMessages('cn');
  app.use(router);
  app.mount('#app');
};
init();
