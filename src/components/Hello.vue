<template>
<div>

  <p>
    Hello!
  </p>
  <p>
    Thank you for try Arc Accounting, this is an alpha version so is highly probable that your data could be lost without previous warn
  </p>
  <p>
    Please send me any feedback or just say hi to <a href="mailto:aldoromo88@gmail.com" target="_top">aldoromo88@gmail.com</a>
  </p>
</div>
</template>

<script>
export default {
  mounted: function() {
    this.$store.commit('TITLE_CHANGED', 'Arc Accounting');
  }
}
</script>
