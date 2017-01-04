<template>
<div class="col-xs-12">
  <div class="row">

    <div class="col-xs-9 col-sm-8 col-md-7 col-lg-6" v-if='Accounts'>
      <div class="input-group">
        <input v-model="Filter" type="text" class="form-control" placeholder="Search">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
        </span>
      </div>

    </div>
    <div class="col-xs-3 col-sm-4 col-md-5 col-lg-6">
      <router-link to="New" tag="button" class="btn btn-success">New</router-link>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-sm-11 col-md-10 col-lg-8">
      <div class="table-responsive" v-if='HasEntries'>
        <table class="table table-condensed">
          <thead>
            <tr>
              <td class="actionsHeader"></td>
              <td>Cuenta</td>
              <td>Type</td>
              <td>Balance</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="acc in AccountsFiltered" v-bind:class="{ warning: !acc.IsEnabled }">
              <td class="actions">
                <div class="btn-group btn-group-sm" role="group">
                  <router-link :to="'Edit/'+acc['.key']" class="btn btn-default" title="Edit"><i class="fa fa-pencil"></i></router-link>
                  <button v-on:click="ToggleIsEnabled(acc)" :title="acc.IsEnabled?'Disable':'Enable'" class="btn btn-default"> <i :class="acc.IsEnabled?'fa-toggle-on':'fa-toggle-off'" class="fa"></i></button>
                </div>
              </td>
              <td>{{acc.Name}}</td>
              <td>{{acc.Type}}</td>
              <td>{{acc.Type=="Active"?acc.Balance:acc.Balance*-1 | money}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <span>No accounts available, create your first account!</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
import store from 'store';
import _ from 'underscore';

const uid = store.getters.Uid;
var accountsRef = firebase.database().ref(`${uid}/Accounts`);

export default {
  data() {
    return {
      Filter: ''
    }
  },
  firebase: {
    Accounts: accountsRef
  },
  computed: {
    HasEntries() {
      return _.any(this.Accounts);
    },
    AccountsFiltered() {
      return this.Accounts.filter(a => a.Name.toLowerCase().indexOf(this.Filter.toLowerCase()) != -1);
    }
  },
  methods: {
    ToggleIsEnabled(account) {
      if (account.Balance) {
        this.$log.warning('Cannot disable', 'Balance must to be 0');
        return;
      }

      let key = account['.key'];

      const updateModel = {
        IsEnabled: !account.IsEnabled
      }
      accountsRef.child(key).update(updateModel);
      this.$log.success(`Account ${account.IsEnabled?"disabled":"enabled"}`);
    }
  }
}
</script>

<style lang="scss" scoped>
$WidthActionsColumn: 80px;

.actions,
.actionsHeader {
    width: $WidthActionsColumn;
}
.actions {
    border-right: 1px solid #ddd;
}
</style>
