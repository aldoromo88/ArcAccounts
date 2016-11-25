<template>
<div>
  Accounts<br/> Mode : {{Mode}}
  <router-link to="Mole">
    Mole
  </router-link>
  <router-link to="New">
    New
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
    let mode = this.$route.params.Action
    validateMode(mode, this.$router);

    return {
      Mode: mode,
      CurrentAccount: _.clone(newAccPrototype)
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
    },
    Mode(to, from) {
      if (to == 'New') {
        this.CurrentAccount = _.clone(newAccPrototype);
        return;
      }

    }
  },
  mounted: function() {
    this.$store.commit('TITLE_CHANGED', 'Accounts');
  },
  components: {
    EditAccount,
    BrowseAccounts
  }
}
</script>
t>
