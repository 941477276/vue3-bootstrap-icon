import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/docs/home/Home.vue';
import Customized from '@/docs/customized/Customized.vue';

let routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/customized', component: Customized }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
