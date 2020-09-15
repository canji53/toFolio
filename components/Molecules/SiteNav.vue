<template>
  <nav>
    <ul>
      <li
        v-for="nav in navs"
        :key="nav.id"
      >
        <IconScrollTo
          :id="nav.id"
          :type="nav.fontawesome.type"
          :icon="nav.fontawesome.icon"
        />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import IconScrollTo from '@/components/Atoms/IconScrollTo'

export default Vue.extend({
  components: {
    IconScrollTo
  },
  props: {
    navs: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
nav {

  & > ul {
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;

    & > li {
      margin-left: 16px;

      @include max-screen ($sp-width) {
        margin-left: 12px;
      }

      & > a {
        padding: 8px;
        line-height: $small-font-size;
        font-size: $small-font-size;
        color: $base-color;
        border-radius: 8px;
        background: $concept-color;
        box-shadow:  $neumorphism-convex;

        &:hover {
          box-shadow: $neumorphism-concave;
        }
      }
    }
  }
}
</style>
