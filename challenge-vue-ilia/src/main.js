import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import '@/plugins/bootstrap-vue'
import { Row, Column } from 'vue-grid-responsive';


Vue.config.productionTip = false;
Vue.component('row', Row);
Vue.component('column', Column);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
