<template>
<div class="col-xs-12 col-sm-8 col-md-6 col-lg-5">
  <div class="form-group">
    <label>From</label>
    <Multiselect :options="AccountsFrom" :value="From" :show-labels="false" @select="UpdateFrom" key=".key" label="Name"> </Multiselect>
  </div>
  <div class="form-group">
    <label>To</label>
    <Multiselect :options="AccountsTo" :value="To" :show-labels="false" @select="UpdateTo" key=".key" label="Name"> </Multiselect>
  </div>
  <div class="form-group">
    <label>Amount</label>
    <InputMoney class="form-control" v-model="Amount" />
  </div>
  <div class="form-group">
    <label>Note</label>
    <input class="form-control" v-model.trim="Note" />
  </div>
  <div class="form-group">
    <label>Date</label>
    <Flatpickr class="form-control" :options="FlatPickrOptions" @input='UpdateDate' />
  </div>

  <button v-on:click="Save" class="btn btn-success">Save</button>
  <button v-on:click="Clear" class="btn btn-default">Clear</button>

</div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import InputMoney from 'components/Commons/InputMoney';
import firebase from 'firebase';
import store from 'store';
import _ from 'underscore';
import moment from 'moment';
import mapper from 'src/utils/objectMapper';

const uid = store.getters.Uid;
var accountsRef = firebase.database().ref(`${uid}/Accounts`);
var transactionsRef = firebase.database().ref(`${uid}/Transactions`);

const externalAccount = {
  Name: 'n/a'
};

const initialState = {
  From: externalAccount,
  To: externalAccount,
  Amount: 0,
  Note: '',
  Date: +moment(),
  //MinDate: ''
};

export default {
  data() {
    return _.clone(initialState);
  },
  firebase: {
    RawAccounts: accountsRef.orderByChild('IsEnabled').equalTo(true)
  },
  computed: {
    Accounts() {
      return [externalAccount].concat(this.RawAccounts);
    },
    AccountsFrom() {
      return _.filter(this.Accounts, acc => acc['.key'] != this.To['.key']);
    },
    AccountsTo() {
      return _.filter(this.Accounts, acc => acc['.key'] != this.From['.key']);
    },
    FlatPickrOptions() {
      return {
        allowInput: true,
        defaultDate: new Date(),
        enableTime: true
      }
    }
  },
  methods: {
    UpdateDate(date) {
      this.Date = +moment(date);
    },
    UpdateFrom(from) {
      this.From = from;
    },
    UpdateTo(to) {
      this.To = to;
    },
    Save() {

      let from = this.From['.key'];
      let to = this.To['.key'];

      if (from === to) {
        this.$log.warning('Cannot transfer to same account');
        return;
      }

      let transaction = {
        Amount: this.Amount,
        Note: this.Note,
        Date: this.Date
      }

      if (from) {
        transaction.From = from;
        this.UpdateBalance(transaction, 'From');
      }
      if (to) {
        transaction.To = to;
        this.UpdateBalance(transaction, 'To');
      }

      transactionsRef.push(transaction);

      this.$log.success('Transaction saved!');
      this.Clear();
    },
    Clear() {
      mapper.assing(this, initialState);
    },
    UpdateBalance(transaction, direction) {
      let acc = transaction[direction];
      let Amount = direction === 'To' ? transaction.Amount : -1 * transaction.Amount;
      var balanceRef = firebase.database().ref(`${uid}/Accounts/${acc}/Balance`);

      balanceRef.transaction(balance => {
        if (balance === null) {
          return {};
        }
        return balance + Amount;
      }, (error, committed) => {
        if (error) {
          this.$log.error(error.toString());
        }
      }, true);
    },
  },
  mounted: function() {
    this.$store.commit('TITLE_CHANGED', 'New transaction');
  },
  components: {
    //Flatpickr,
    //Flatpickr: r => require.ensure([], () => r(require('vue-flatpickr')), 'components'),
    Multiselect,
    InputMoney
  }
  // components: {
  //   Flatpickr: r => require.ensure([], () => r(require('vue-flatpickr')), 'components'),
  //   Multiselect: r => require.ensure([], () => r(require('vue-multiselect')), 'components'),
  //   InputMoney: r => require.ensure([], () => r(require('components/Commons/InputMoney')), 'components')
  // }
}
</script>