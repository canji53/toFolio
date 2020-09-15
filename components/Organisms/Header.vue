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
      { id: 'Biography', fontawesome: { type: 'far', icon: 'meh-blank' } },
      { id: 'Portfolio', fontawesome: { type: 'fas', icon: 'images' } },
      { id: 'Skills', fontawesome: { type: 'fas', icon: 'tools' }  },
      { id: 'Experience', fontawesome: { type: 'fas', icon: 'code-branch' }  }
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
      margin: 0 auto 0 0;
    }

    & > .siteNav {
      margin: 0 0 0 auto;
    }
  }
}
</style>
