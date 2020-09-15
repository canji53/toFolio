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
      icon: 'instagram'
    }
  })
}
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
  line-height: $title-font-size;
  background: $concept-color;
  box-shadow:  $neumorphism-convex;

  &:hover {
    box-shadow: $neumorphism-concave;
  }

  & > svg {
    font-size: $title-font-size;
    color: $base-color;
  }
}
</style>
