<template>
  <header>
    <section class="sticky">
      <SiteTitle :title="title" class="siteTitle" />
      <SiteNav :navs="navs" class="siteNav" />
    </section>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteTitle from '@/components/Atoms/SiteTitle'
import SiteNav from '@/components/Molecules/SiteNav'

export default Vue.extend({
  components: {
    SiteTitle,
    SiteNav
  },
  data: () => ({
    title: process.env.siteName,
    navs: [
      { text: 'Biography', id: 'Biography' },
      { text: 'Portfolio', id: 'Portfolio' },
      { text: 'Skills', id: 'Skills' },
      { text: 'Experience', id: 'Experience' }
    ]
  })
})
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  z-index: 999;
  background-color: $concept-color;

  & > .sticky {
    width: $pc-width;
    height: $header-height;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    @include screen ($pc-width, $sp-width) {
      width: $sp-width;
    }

    @include max-screen ($sp-width) {
      width: 95%;
    }

    & > .siteTitle {
      margin: 0 auto 0 16px;
    }

    & > .siteNav {
      margin: 0 16px 0 auto;
    }
  }
}
</style>
