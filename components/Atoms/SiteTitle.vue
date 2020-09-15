<template>
  <h1>
    <nuxt-link :to="to">
      {{ title }}
    </nuxt-link>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    to: '/'
  })
})
</script>

<style lang="scss" scoped>
h1 {
  font-size: $title-font-size;
  & > a {
    line-height: $title-font-size;
    font-size: $title-font-size;
    color: $base-color;
  }
}
</style>
