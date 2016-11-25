<template>
<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <td></td>
        <td>Cuenta</td>
        <td>Type</td>
        <td>Balance</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="acc in Accounts" v-bind:class="{ warning: !acc.IsEnabled }">
        <td>
          <button class="btn btn-default"><i class="fa fa-eye"></i> View</button>
          <button v-if="acc.IsEnabled" class="btn btn-warning">Disable</button>
          <button v-else class="btn btn-success">Enable</button>
        </td>
        <td>{{acc.Name}}</td>
        <td>{{acc.Type}}</td>
        <td>{{acc.Type=="Active"?acc.Balance:acc.Balance*-1}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
export default {
  props: ['Accounts']
}
</script>
