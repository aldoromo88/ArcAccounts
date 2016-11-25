import Vue from 'vue';
import Vuex from 'vuex';
import session from './modules/session'

Vue.use(Vuex);

export default new Vuex.Store({
  //actions,
  //getters,
  state:{
    Title:'',
  },
  getters:{
    Title: state=>state.Title
  },
  mutations:{
    'TITLE_CHANGED'(state, title){
      state.Title = title;
    }
  },
  modules: {
    session
  },
  //strict: debug,
  //plugins: debug ? [createLogger()] : []
});
