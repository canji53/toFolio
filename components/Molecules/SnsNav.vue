<template>
  <nav>
    <ul>
      <li>
        <IconTwitter :url="twitterUrl" />
      </li>
      <li>
        <IconInstagram :url="instagramUrl" />
      </li>
      <li>
        <IconToLog :url="tologUrl" />
      </li>
      <li>
        <IconToItem :url="toitemUrl" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import IconInstagram from '@/components/Atoms/IconInstagram'
import IconTwitter from '@/components/Atoms/IconTwitter'
import IconToLog from '@/components/Atoms/IconToLog'
import IconToItem from '@/components/Atoms/IconToItem'

export default Vue.extend({
  components: {
    IconInstagram,
    IconTwitter,
    IconToLog,
    IconToItem
  },
  data: () => ({
    twitterUrl: 'https://twitter.com/canji53',
    instagramUrl: 'https://www.instagram.com/canji53/',
    tologUrl: 'https://www.tolog.site',
    toitemUrl: 'https://www.toitem.info'
  })
})
</script>

<style lang="scss" scoped>
nav {
  & > ul {
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    > li {
      margin: 0 8px;
    }
  }
}
</style>
