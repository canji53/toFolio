<template>
  <section class="skills">
    <h1 :id="title">
      # {{ title }}
    </h1>
    <p>{{ description }}</p>
    <ul>
      <li
        v-for="skill in skills"
        :key="skill.title"
      >
        <SkillCard
          :title="skill.title"
          :src="skill.icon"
          :percent="skill.percent"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    title: 'Skills',
    description: '定量化しづらく、あくまで自己評価なので、参考程度に。',
    skills: [
      { title: 'AWS', icon: '/brand/aws.svg', percent: 60 },
      { title: 'Jamstack', icon: '/brand/none.svg', percent: 40 },
      { title: 'Node.js', icon: '/brand/node.png', percent: 50 },
      { title: 'Nuxt.js', icon: '/brand/nuxt.svg', percent: 50 },
      { title: 'Gatsby.js', icon: '/brand/gatsby.svg', percent: 25 },
      { title: 'PHP', icon: '/brand/php.svg', percent: 50 },
      { title: 'Python', icon: '/brand/python.png', percent: 50 },
      { title: 'WordPress', icon: '/brand/wordpress.png', percent: 75 },
      { title: 'Docker', icon: '/brand/docker.png', percent: 60 },
      { title: 'Nginx', icon: '/brand/nginx.png', percent: 50 },
      { title: 'Apache', icon: '/brand/apache.svg', percent: 65 },
      { title: 'MySQL', icon: '/brand/mysql.png', percent: 25 }
    ]
  })
})
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > h1 {
    margin-bottom: 16px;
    padding-top: $oveflow-height;
    line-height: $title-font-size;
    font-size: $title-font-size;
    color: $base-color;
  }

  & > p {
    margin-bottom: 32px;
    line-height: $small-font-size;
    font-size: $small-font-size;
    color: $base-color;
  }

  & > ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style-type: none;
  }
}
</style>
