import _store from 'store';
import arcNotifications from './arcNotifications';

const NOTIFICATION_ADDED = 'NOTIFICATION_ADDED';
const NOTIFICATION_DISMISSED = 'NOTIFICATION_DISMISSED';


function registerLogPrototype(store, Vue) {

  function log(type, title, text) {
    type = type == 'error' ? 'danger' : type;
    store.dispatch('Add', {
      title,
      text,
      type
    });
  }

  Vue.prototype.$log = {
    error(title, text) { log('danger', title, text) },
    warning(title, text) { log('warning', title, text) },
    info(title, text) { log('info', title, text) },
    success(title, text) { log('success', title, text) },
    log
  }

}

function registerModule(store, duration) {

  const state = {
    Notifications: []
  }

  const getters = {
    Notifications: state => state.Notifications.map(n => n.Raw)
  }

  const actions = {
    Add({ commit }, notification) {

      var timeOut = setTimeout(function () {
        commit(NOTIFICATION_DISMISSED, notification);
      }, duration);

      commit(NOTIFICATION_ADDED, {
        Raw: notification,
        TimeOut: timeOut
      })
    },
    Dismiss({ commit }, notification) {
      commit(NOTIFICATION_DISMISSED, notification);
    }
  }

  const mutations = {
    [NOTIFICATION_ADDED](state, notification) {
      state.Notifications.push(notification);
    },
    [NOTIFICATION_DISMISSED](state, rawNotification) {
      var i = state.Notifications.map(n => n.Raw).indexOf(rawNotification);
      if (i == -1) {
        return;
      }

      clearTimeout(state.Notifications[i].TimeOut);

      state.Notifications.splice(i, 1);
    }
  }

  store.registerModule('arcLogger', {
    state,
    getters,
    actions,
    mutations
  });
}

function registerNotificationUi(Vue){
  Vue.component('arc-notifications', arcNotifications);
}

export default {

  install(Vue, options) {
    options = options || {};
    var duration = options.duration || 8000;

    registerLogPrototype(_store, Vue);
    registerModule(_store, duration);
    registerNotificationUi(Vue);
  }
}
