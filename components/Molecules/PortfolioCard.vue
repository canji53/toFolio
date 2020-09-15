<template>
  <section class="portfolioCard">
    <a
      :href="url"
      :rel="rel"
      :target="target"
      class="portfolioCard__thumbnail"
    >
      <img :src="src" :alt="alt">
    </a>
    <div class="portfolioCard__description">
      <a
        :href="url"
        :rel="rel"
        :target="target"
      >
        <h1>{{ title }}</h1>
      </a>
      <p>{{ description }}</p>
      <p>{{ stack }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    stack: {
      type: String,
      required: true
    }
  },
  data: () => ({
    rel: 'noopener noreferrer',
    target: '_blank'
  })
})
</script>

<style lang="scss" scoped>
.portfolioCard {
  display: flex;
  flex-flow: row wrap;

  &__thumbnail {
    width: 50%;
    // padding: 10px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    background: $concept-color;

    & > img {
      width: 100%;
      border-radius: 16px;
    }
  }

  &__description {
    width: 46%;
    margin-left: 4%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;

    & > a {
      margin: 16px 0;

      & > h1 {
        line-height: $medium-font-size;
        font-size: $medium-font-size;
        color: $base-color;
      }
    }

    & > p {
      margin: 4px 0;
      line-height: 16px;
      font-size: $small-font-size;
      color: $base-color;
    }
  }

  @include max-screen ($sp-width) {
    &__thumbnail,
    &__description {
      width: 100%;
      margin: 0;
    }

    &__description {
      margin: 8px;
      align-items: center;
    }
  }
}
</style>
