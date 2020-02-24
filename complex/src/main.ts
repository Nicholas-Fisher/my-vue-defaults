import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from '@/router.ts';
import store from '@/store.ts';
import HamburgerMenu from '@/components/HamburgerMenu.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faTimes,
} from '@fortawesome/pro-solid-svg-icons';
import 'normalize.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import vuetify from './plugins/vuetify';

library.add(
  faBars,
  faTimes,
);

Vue.component('fa', FontAwesomeIcon);
Vue.component('hamburger-menu', HamburgerMenu);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h: any) => h(App)
} as any).$mount('#app');
