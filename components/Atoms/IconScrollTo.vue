<template>
  <n-link
    v-scroll-to="`#${id}`"
    to
  >
    <font-awesome-icon
      :icon="[type, icon]"
    />
  </n-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data: () => ({
    rel: 'noopener noreferrer',
    target: '_blank'
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
    font-size: $base-font-size;
    color: $base-color;
  }
}
</style>
