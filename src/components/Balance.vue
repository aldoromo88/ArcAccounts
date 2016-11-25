<template>
<h1>{{Title}}</h1>
</template>

<script>
export default {
  data() {
    return {
      Title: 'Balance'
    }
  },
  mounted: function() {
    this.$store.commit('TITLE_CHANGED', 'Balance');
  }
}
</script>
