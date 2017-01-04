<template>
<div class="col-xs-12 col-sm-8 col-md-6 col-lg-5">
  <div class="form-group">
    <label for="name">Account name</label>
    <input v-model.trim="Account.Name" type="text" class="form-control" id="name" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="type">Type</label>
    <Multiselect :options="Options" :value="Account.Type" :allow-empty="false" :show-labels="false" @select="UpdateType"> </Multiselect>
  </div>
  <div class="form-group">
    <label for="name">Balance</label>
    <span>{{Account.Type=="Active"?Account.Balance:Account.Balance*-1 | money}}</span>
  </div>

  <button v-on:click="Save" class="btn btn-success">Save</button>
  <router-link to="/Accounts" class="btn btn-danger">Cancel</router-link>
</div>
</template>

<script>
import _ from 'underscore';
import firebase from 'firebase';
import Multiselect from 'vue-multiselect'

const newAccPrototype = {
  Name: '',
  Type: 'Active',
  IsEnabled: true,
  Balance: 0
}

export default {
  data() {
    return {
      Options: ['Active', 'Passive'],
      Account: _.clone(newAccPrototype),
      Mode: null,
      Id: null
    }
  },

  methods: {
    Save() {
      if (!this.ValidateAccount()) {
        return;
      }

      switch (this.Mode) {
        case 'New':
          this.InsertAccount();
          break;
        case 'Edit':
          this.UpdateAccount();
          break;
      }
      this.$router.replace('/Accounts');
    },
    ValidateAccount() {
      if (!this.Account.Name) {
        this.$log.warning('Name is required');
        return false;
      }
      return true;
    },
    InsertAccount() {
      let accountsRef = firebase.database().ref(`${this.$store.getters.Uid}/Accounts`);
      let acc = accountsRef.push(this.Account);
      this.$log.success('Account created!');
    },
    UpdateAccount() {
      let accountsRef = firebase.database().ref(`${this.$store.getters.Uid}/Accounts/${this.Id}`);
      accountsRef.update(this.Account);

      this.$log.success('Account updated!');
    },
    MapRouteParams(params) {
      this.Mode = params.Mode;
      this.Id = params.Id;

      switch (this.Mode) {
        case 'New':
          this.Account = _.clone(newAccPrototype);
          break;
        case 'Edit':
          firebase.database().ref(`${this.$store.getters.Uid}/Accounts/${this.Id}`)
            .once('value')
            .then((snapshot) => {
              var dbEntity = snapshot.val();
              this.Account = {
                Name: dbEntity.Name,
                Type: dbEntity.Type,
                Balance: dbEntity.Balance
              }
            });

          break;
      }
    },
    UpdateType(type) {
      this.Account.Type = type;
    }
  },
  watch: {
    '$route' (to, from) {
      this.MapRouteParams(to);
    }
  },
  beforeMount() {
    this.MapRouteParams(this.$route.params);
  },
  components: {
    Multiselect
  }
}
</script>
