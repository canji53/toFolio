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
      { title: 'AWS', icon: `${process.env.baseDir}brand/aws.svg`, percent: 60 },
      { title: 'Node.js', icon: `${process.env.baseDir}brand/node.png`, percent: 40 },
      { title: 'Nuxt.js', icon: `${process.env.baseDir}brand/nuxt.svg`, percent: 40 },
      { title: 'Gatsby.js', icon: `${process.env.baseDir}brand/gatsby.svg`, percent: 25 },
      { title: 'PHP', icon: `${process.env.baseDir}brand/php.svg`, percent: 40 },
      { title: 'Python', icon: `${process.env.baseDir}brand/python.png`, percent: 40 },
      { title: 'WordPress', icon: `${process.env.baseDir}brand/wordpress.png`, percent: 60 },
      { title: 'Docker', icon: `${process.env.baseDir}brand/docker.png`, percent: 50 },
      { title: 'Nginx', icon: `${process.env.baseDir}brand/nginx.png`, percent: 40 },
      { title: 'Apache', icon: `${process.env.baseDir}brand/apache.svg`, percent: 55 },
      { title: 'MySQL', icon: `${process.env.baseDir}brand/mysql.png`, percent: 25 }
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
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style-type: none;
  }
}
</style>
