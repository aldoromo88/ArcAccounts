<template>
<div v-if="Transaction">
  <div class="form-group">
    <label>From</label> {{SelectedTransaction.From}}
  </div>
  <div class="form-group">
    <label>To</label> {{SelectedTransaction.To}}
  </div>
  <div class="form-group">
    <label>Amount</label> {{SelectedTransaction.Amount}}
  </div>
  <div class="form-group">
    <label>Note</label> {{SelectedTransaction.Note}}
  </div>
  <div class="form-group">
    <label>Date</label> {{SelectedTransaction.Date}}
  </div>
</div>
</template>

<script>
import moment from 'moment';
import accounting from 'accounting';

export default {
  name: 'TransactionDetail',
  props: ['Accounts', 'Transaction'],
  computed: {
    SelectedTransaction() {

      return {
        From: this.Transaction.From ? this.Accounts[this.Transaction.From].Name : '',
        To: this.Transaction.To ? this.Accounts[this.Transaction.To].Name : '',
        Amount: accounting.formatMoney(this.Transaction.Amount / 100),
        Date: moment(this.Transaction.Date).format(),
        Note: this.Transaction.Note
      }

    }
  }
}
</script>
