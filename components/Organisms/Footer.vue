<template>
  <footer>
    <Copyright :copyright="copyright" />
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Copyright from '@/components/Atoms/Copyright'

export default Vue.extend({
  components: {
    Copyright
  },
  data: () => ({
    copyright: '2020 toFolio'
  })
})
</script>

<style lang="scss" scoped>
footer{
  padding-top: 60px;
  margin: 32px auto;
}
</style>
