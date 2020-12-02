import Vue from 'vue';
import 'font-awesome/css/font-awesome.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/common.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
