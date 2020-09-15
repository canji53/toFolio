<template>
  <section class="biography">
    <h1 :id="title">
      # {{ title }}
    </h1>
    <div class="biography__icon">
      <img :src="icon.src" :alt="icon.alt">
    </div>
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <SnsNav class="snsNav" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import SnsNav from '@/components/Molecules/SnsNav'

export default Vue.extend({
  components: {
    SnsNav
  },
  data: () => ({
    title: 'Biography',
    fontawesome: {
      type: 'fas',
      icon: 'home'
    },
    name: 'Canji',
    description: '本土最南端で生を受けた二十代後半の男です。クラウド周りをちょこまかしたく奮闘していますが、いつも空回り、フラれ続けています。いくつかの個人メディアを運営しています。',
    icon: {
      src: '/profile.png',
      alt: 'canji'
    }
  })
})
</script>

<style lang="scss" scoped>
.biography {
  width: 50%;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @include max-screen ($sp-width) {
    width: 100%;
  }

  & > h1 {
    padding-top: $oveflow-height;
    margin-bottom: 32px;
    line-height: $title-font-size;
    font-size: $title-font-size;
    color: $base-color;
  }

  &__icon {
    width: 110px;
    height: 110px;
    padding: 10px;
    margin: 8px 0;
    border-radius: 16px;
    background: $concept-color;

    & > img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      padding: 10px;
      background-color: #fff;
    }
  }

  & > h2 {
    margin: 8px 0;
    line-height: $title-font-size;
    font-size: $title-font-size;
    color: $base-color;
  }

  & > p {
    padding: 0 32px;
    margin: 16px 0;
    font-size: $small-font-size;
    color: $base-color;
  }

  & > .snsNav {
    margin: 8px 0;
  }
}
</style>
