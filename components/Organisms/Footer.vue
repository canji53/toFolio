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
  margin: 24px auto;
}
</style>
