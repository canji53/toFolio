<template>
  <a
    :href="url"
    :rel="rel"
    :target="target"
  >
    <font-awesome-icon
      :icon="[fontawesome.type, fontawesome.icon]"
    />
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    rel: 'noopener noreferrer',
    target: '_blank',
    fontawesome: {
      type: 'fab',
      icon: 'twitter'
    }
  })
}
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

  & > svg {
    font-size: $medium-font-size;
    color: $base-color;
  }
}
</style>
