import Vue from 'vue';
import App from 'src/App.vue';
import router from 'src/router.js';
import HamburgerMenu from 'src/components/HamburgerMenu.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faTimes,
} from '@fortawesome/pro-solid-svg-icons';
import 'normalize.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faBars,
  faTimes,
);

Vue.component('fa', FontAwesomeIcon);
Vue.component('hamburger-menu', HamburgerMenu);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
