<template>
  <section class="experienceCard">
    <time>{{ experience.date }}</time>
    <h2>{{ experience.in }}</h2>
    <p>{{ experience.text }}</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.experienceCard {
  padding: 16px 24px;
  border-radius: 16px;
  background: $concept-color;
  box-shadow: $neumorphism-convex;

  & > time {
    margin: 4px 0;
    line-height: $small-font-size;
    font-size: $small-font-size;
    color: $base-color;
  }

  & > h2 {
    margin: 4px 0 12px 0;
    line-height: $base-font-size;
    font-size: $base-font-size;
    color: $base-color;
  }

  & > p {
    margin: 8px 0;
    line-height: $small-font-size;
    font-size: $small-font-size;
    color: $base-color;
  }
}
</style>
