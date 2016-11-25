import Vue from 'vue';
import App from './App';
import './config/firebaseconfig';
import store from './store';
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App }
})
