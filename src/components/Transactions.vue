<template>
<h1>{{Title}}</h1>
</template>

<script>
export default {
  data() {
    return {
      Title: 'Transactions'
    }
  },
  mounted: function() {
    this.$store.commit('TITLE_CHANGED', 'Transactions');
  }
}
</script>
