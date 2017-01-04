import Vue from 'vue';
import App from './App';
import './config/firebaseconfig';
import store from 'store';
import router from './router';
import VueFire from 'vuefire';
import ArcLogger from './plugins/arcLogger';
import Flatpickr from 'vue-flatpickr';
import './utils/filters';

Vue.use(VueFire);
Vue.use(ArcLogger);
Vue.use(Flatpickr);

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App }
})
