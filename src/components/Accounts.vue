<template>
<div>
  Mode : {{Mode}}
  <router-link to="Mole">
    Mole
  </router-link>
  <router-link to="New" tag="button" class="btn btn-success">
    New Account
  </router-link>
  <router-link to="Edit">
    Edit
  </router-link>
</template>

<script>
import firebase from 'firebase';
import _ from 'underscore';
import EditAccount from './AccountsSubComponents/EditAccount';
import BrowseAccounts from './AccountsSubComponents/BrowseAccounts';

var db = firebase.database();

const newAccPrototype = {
  Name: '',
  IsEnabled: true,
  Type: 'Active',
  Balance: 0
}

const validModes = ['All', 'New', 'Edit'];

function validateMode(mode, router) {
  var isValid = validModes.indexOf(mode) != -1
  if (!isValid)
    router.replace('/Accounts/All');

  return isValid;
}

export default {
  data() {
    let mode = this.$route.params.Mode
    validateMode(mode, this.$router);

    return {
      Mode: mode,
      CurrentAccount: _.clone(newAccPrototype)
    }
  },
  computed: {
    Title: function() {
      switch (this.Mode) {
        case 'New':
          return 'Create Account';
        case 'Edit':
          return 'Edit Account';
        default:
          return 'Accounts';
      }
    }
  },
  firebase: {

  },
  watch: {
    '$route' (to, from) {
      let mode = to.params.Mode;
      if (!validateMode(mode, this.$router))
        return;

      this.Mode = mode;
      this.CurrentId = to.params.Id;
    },
    Mode(to, from) {
      if (to == 'New') {
        this.CurrentAccount = _.clone(newAccPrototype);
        return;
      }
    },
    Title(to, from) {
      this.$store.commit('TITLE_CHANGED', to);
    }
  },
  components: {
    EditAccount,
    BrowseAccounts
  }
}
</script>
