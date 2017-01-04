import Vue from 'vue';
import accounting from 'accounting';

Vue.filter('money', (value) => accounting.formatMoney(value / 100));
