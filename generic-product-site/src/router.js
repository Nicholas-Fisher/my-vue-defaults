import Vue from 'vue';
import VueRouter from 'vue-router';
import Download from 'src/views/Download.vue';
import Features from 'src/views/Features.vue';
import TroubleShooting from 'src/views/TroubleShooting.vue';
import BugReports from 'src/views/BugReports.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Download',
    component: Download,
  },
  {
    path: '/',
    name: 'Features',
    component: Features,
  },
  {
    path: '/',
    name: 'TroubleShooting',
    component: TroubleShooting,
  },
  {
    path: '/',
    name: 'BugReports',
    component: BugReports,
  },
];

export default new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});
