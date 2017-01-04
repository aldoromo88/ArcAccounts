<template>
<input ref="input" :model="value" v-on:input="updateValue($event.target.value)" v-on:focus="selectAll" v-on:blur="blur">
</template>

<script>
import accounting from 'accounting';

export default {
  name: 'InputMoney',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hasFocus: false
    }
  },
  mounted: function() {
    this.formatValue();
  },
  watch: {
    value(newValue) {
      this.formatValue();
    }
  },
  methods: {
    updateValue(value, ignoreEmit) {
      var result = accounting.unformat(value);
      result = parseInt(result * 100);
      this.$emit('input', result);
    },
    blur() {
      this.hasFocus = false;
      this.formatValue();
    },
    formatValue() {
      if (this.hasFocus)
        return;
      this.$refs.input.value = accounting.formatMoney(this.value / 100);
    },
    selectAll(event) {
      // Workaround for Safari bug
      // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
      this.hasFocus = true;
      setTimeout(function() {
        event.target.select();
      }, 0);
    }
  }
}
</script>
