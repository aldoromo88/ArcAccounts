<template>
<form>
  <div class="form-group">
    <label for="name">Account name</label>
    <input v-model.trim="Account.Name" type="text" class="form-control" id="name" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="type">Type</label>
    <select v-model="Account.Type" id="type">
      <option>Active</option>
      <option>Passive</option>
    </select>
  </div>
  <div class="checkbox">
    <label>
        <input type="checkbox"  v-model="Account.IsEnabled">Enabled
      </label>
  </div>
  <div class="form-group">
    <label for="name">Balance</label>
    <span>{{Account.Balance}}</span>
  </div>
  <button v-on:click="Save" type="submit" class="btn btn-default">Save</button>
  <button v-on:click="Cancel" type="submit" class="btn btn-danger">Cancel</button>
</form>
</template>

<script>
export default {
  props: ['Account'],
  actions: {
    Save: function() {
      this.$emit('Save');
    },
    Cancel: function() {
      this.$emit('Cancel');
    }
  }
}
</script>
