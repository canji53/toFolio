<template>
  <main>
    <Biography class="biography" />
    <Portfolio class="portfolio" />
    <Skills class="skills" />
    <Experience class="experiencce" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Biography from '@/components/Organisms/Biography'
import Portfolio from '@/components/Organisms/Portfolio'
import Skills from '@/components/Organisms/Skills'
import Experience from '@/components/Organisms/Experience'

export default Vue.extend({
  components: {
    Biography,
    Portfolio,
    Skills,
    Experience
  }
})
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-flow: column nowrap;

  & > .biography,
  & > .portfolio,
  & > .skills,
  & > .experiencce {
    margin: 48px auto;
  }
}
</style>
