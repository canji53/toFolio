<template>
  <p>
    &copy; {{ copyright }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    copyright: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
p {
  line-height: $small-font-size;
  font-size: $small-font-size;
  color: $base-color;
}
</style>
