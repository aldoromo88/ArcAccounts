import Firebase from 'firebase';

const AUTH_REQUEST = 'AUTH_REQUEST';
const SINGIN_SUCCESS = 'SINGIN_SUCCESS';
const SINGIN_FAILURE = 'SINGIN_FAILURE';
const SINGOUT_SUCCESS = 'SINGOUT_SUCCESS';
const SINGOUT_FAILURE = 'SINGOUT_FAILURE';

//Initial state
const state = {
  CurrentUser: Firebase.auth().currentUser,
  AuthenticationInProgress: false,
  Error: null
};

const getters = {
  CurrentUser: state => state.CurrentUser,
  Uid: state=> state.CurrentUser?state.CurrentUser.uid:undefined
}

const actions = {
  signin: function ({ commit }) {
    commit(AUTH_REQUEST);
    Firebase.auth().signInWithPopup(new Firebase.auth.GoogleAuthProvider())
      .then(function (result) {
        commit(SINGIN_SUCCESS, result.user);
      })
      .catch(function (error) {
        commit(SINGIN_FAILURE, error.message)
      });
  },
  signout: function ({ commit }) {
    commit(AUTH_REQUEST);

    Firebase.auth().signOut()
      .then(function () {
        commit(SINGOUT_SUCCESS);
      })
      .catch(function (error) {
        commit(SINGOUT_FAILURE, error.message);
      });
  },
  initSession: function ({ commit, state }) {
    if (state.CurrentUser)
      return;

    let currentUser = Firebase.auth().currentUser;
    if (currentUser) {
      commit(SINGIN_SUCCESS, currentUser);
      return;
    } else {
      let authListenerUnsuscribe = Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          commit(SINGIN_SUCCESS, user);
          authListenerUnsuscribe();
        }
      });
    }
  }
}

const mutations = {
  [AUTH_REQUEST](state) {
    state.AuthenticationInProgress = true;
    state.Error = null;
  },
  [SINGIN_SUCCESS](state, user) {
    state.AuthenticationInProgress = false;
    state.CurrentUser = user;
  },
  [SINGIN_FAILURE](state, error) {
    state.AuthenticationInProgress = false;
    state.CurrentUser = null;
    state.Error = error;
  },
  [SINGOUT_SUCCESS](state) {
    state.AuthenticationInProgress = false;
    state.CurrentUser = null;
  },
  [SINGOUT_FAILURE](state, error) {
    state.AuthenticationInProgress = false;
    state.Error = error;
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
