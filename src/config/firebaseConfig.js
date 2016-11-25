import Vue from 'Vue';
import VueFire from 'vuefire';
import Firebase from 'firebase';

import firebaseConfig from './firebaseconfig.json';

Firebase.initializeApp(firebaseConfig);
Vue.use(VueFire);
