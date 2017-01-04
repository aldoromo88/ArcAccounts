<template>
<div class="col-xs-12">


  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-6">
      <GraphicBalance :Accounts="RawAccounts" :Transactions="RawTransactions" @TransactionSelected="UpdateTransaction">
      </GraphicBalance>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
      <TransactionDetail :Accounts="RawAccounts" :Transaction="CurrentTransaction"></TransactionDetail>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
import store from 'store';
import _ from 'underscore';
import GraphicBalance from './GraphicBalance';
import TransactionDetail from './TransactionDetail';

const uid = store.getters.Uid;
var accountsRef = firebase.database().ref(`${uid}/Accounts`);
var transactionsRef = firebase.database().ref(`${uid}/Transactions`).orderByChild('Date');

export default {
  data() {
    return {
      Title: 'Balance',
      CurrentTransaction: undefined,
    }
  },
  firebase: {
    RawAccounts: {
      source: accountsRef.orderByChild('IsEnabled').equalTo(true),
      asObject: true,
    },
    RawTransactions: transactionsRef,
  },
  methods: {
    UpdateTransaction(t) {
      this.CurrentTransaction = t;
    }
  },
  mounted: function() {
    this.$store.commit('TITLE_CHANGED', 'Balance');
  },
  components: {
    GraphicBalance,
    TransactionDetail
  }
}
</script>
