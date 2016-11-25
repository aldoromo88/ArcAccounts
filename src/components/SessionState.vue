<template>
<div id="session-state" class="row">
  <div class="col-xs-12">
    <div class="pull-right">
      <div v-if="CurrentUser">
        <span>{{CurrentUser.displayName}}</span>
        <button v-on:click="signout" class="btn btn-danger">Sign out</button>
      </div>
      <div v-else="">
        <span>Please sign in to use this application</span>
        <button v-on:click="signin" class="btn btn-primary">Sign in!</button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'SessionState',
  computed: {
    CurrentUser: function() {
      return this.$store.getters.CurrentUser;
    }
  },
  methods: {
    signin: function() {
      this.$store.dispatch('signin');
    },
    signout: function() {
      this.$store.dispatch('signout');
    }

  },
  created: function() {
    this.$store.dispatch('initSession');
  }
};
</script>
