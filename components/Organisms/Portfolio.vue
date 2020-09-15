<template>
  <section class="portfolio">
    <h1 :id="title">
      # {{ title }}
    </h1>
    <ul>
      <li
        v-for="portfolio in portfolioList"
        :key="portfolio.title"
      >
        <PortfolioCard
          :title="portfolio.title"
          :description="portfolio.description"
          :url="portfolio.url"
          :src="portfolio.src"
          :alt="portfolio.alt"
          :stack="portfolio.stack"
        />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioCard from '@/components/Molecules/PortfolioCard'

export default Vue.extend({
  components: {
    PortfolioCard
  },
  data: () => ({
    title: 'Portfolio',
    description: '全て個人的な成果物です。',
    portfolioList: [
      {
        title: 'ToLog',
        description: 'WEB周りの雑感や備忘録',
        url: 'https://www.tolog.site',
        src: `${process.env.baseDir}tolog_eyecatch.png`,
        alt: 'ToLog',
        stack: 'Jamstack, Serverless, React.js, Gatsby.js, GraphQL, SCSS, Netlify, AWS, Route53, ACM'
      },
      {
        title: 'toItem',
        description: 'ガジェットを中心とした超個人的なブログです。',
        url: 'https://www.toitem.info',
        src: `${process.env.baseDir}toitem_eyecatch.png`,
        alt: 'toItem',
        stack: 'Jamstack, Serverless, PWA, IaC, Vue/Nuxt, Node.js, SCSS, Gulp, MicroCMS, SendGrid, AWS, SAM, APIGateway, Lambda, CloudFront(OAI), S3, Lambda@Edge, Route53, ACM'
      },
      {
        title: 'toFolio',
        description: 'Neumorphismに惹かれて勢いで作った当ポートフォリオ。なんか微妙、、、',
        url: 'https://canji53.github.io/toFolio/',
        src: `${process.env.baseDir}tofolio_eyecatch.png`,
        alt: 'toFolio',
        stack: 'Github Pages, Neumorphism, Vue/Nuxt, SCSS'
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.portfolio {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > h1 {
    padding-top: $oveflow-height;
    margin-bottom: 24px;
    line-height: $title-font-size;
    font-size: $title-font-size;
    color: $base-color;
  }

  & > p {
    line-height: $base-font-size;
    font-size: $base-font-size;
    color: $base-color;
  }

  & > ul {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    list-style-type: none;

    & > li {
      margin: 16px 0;
    }
  }
}
</style>
