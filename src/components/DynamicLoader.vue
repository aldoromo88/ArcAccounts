<template>
<component :is="CurrentComponent" />
</template>

<script>
export default {
  data() {
    return {
      CurrentComponent: undefined
    }
  },
  methods: {
    load(componentName) {
      try {
        this.CurrentComponent = require(`components/${componentName}`);
      } catch (e) {
        this.CurrentComponent = require('components/404');
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.load(to.params.ComponentName);
    }
  },
  beforeMount() {
    this.load(this.$route.params.ComponentName);
  }
}
</script>
