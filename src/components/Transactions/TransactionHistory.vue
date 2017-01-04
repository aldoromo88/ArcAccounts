<template>
<h1>{{Title}}</h1>
</template>

<script>
export default {
  data() {
    return {
      Title: 'Transaction history'
    }
  },
  mounted: function() {
    this.$store.commit('TITLE_CHANGED', this.Title);
  }
}
</script>
