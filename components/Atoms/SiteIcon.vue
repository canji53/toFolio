<template>
  <nuxt-link :to="to">
    <img
      :src="icon.src"
      :alt="icon.alt"
    >
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    to: '/',
    icon: {
      src: `${process.env.baseDir}icons/icon-256.png`,
      alt: 'toFolio'
    }
  })
})
</script>

<style lang="scss" scoped>
a {
  width: 30px;
  height: 30px;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background: $concept-color;
  box-shadow:  $neumorphism-convex;
  line-height: $title-font-size;

  &:hover {
    box-shadow: $neumorphism-concave;
  }

  & > img {
    width: $medium-font-size;
    height: $medium-font-size;
  }
}
</style>
