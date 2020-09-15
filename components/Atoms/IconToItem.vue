<template>
  <a
    :href="url"
    :rel="rel"
    :target="target"
  >
    <img
      :src="icon.src"
      :alt="icon.alt"
    >
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    rel: 'noopener noreferrer',
    target: '_blank',
    icon: {
      src: '/toitem.png',
      alt: 'toItem'
    }
  })
})
</script>

<style lang="scss" scoped>
a {
  width: 35px;
  height: 35px;
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
    width: 20px;
    height: 20px;
  }
}
</style>
