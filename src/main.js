import HamburgerMenu from '@/components/HamburgerMenu.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes,
} from '@fortawesome/pro-solid-svg-icons';
import 'normalize.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faTimes,
);

Vue.component('fa', FontAwesomeIcon);
Vue.component('hamburger-menu', HamburgerMenu);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
