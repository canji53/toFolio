<template>
  <div class="base">
    <div class="container">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Organisms/Header'
import Footer from '@/components/Organisms/Footer'

export default Vue.extend({
  components: {
    Header,
    Footer
  }
})
</script>

<style lang="scss">
html {
  // font-family:
  //   'Source Sans Pro',
  //   -apple-system,
  //   BlinkMacSystemFont,
  //   'Segoe UI',
  //   Roboto,
  //   'Helvetica Neue',
  //   Arial,
  //   sans-serif;
  font-family:
    Rubik, "Noto Sans JP", sans-serif;
}

.base {
  width: 100%;
  background-color: $concept-color;
}

.container {
  width: $pc-width;
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @include screen ($pc-width, $sp-width) {
    width: $sp-width;
  }

  @include max-screen ($sp-width) {
    width: 95%;
  }
}
</style>
