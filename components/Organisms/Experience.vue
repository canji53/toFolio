<template>
  <section class="experience">
    <h1 :id="title">
      # {{ title }}
    </h1>
    <ExperienceTree
      :experience-list="experienceList"
      class="experienceTree"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ExperienceTree from '@/components/Molecules/ExperienceTree'

export default Vue.extend({
  components: {
    ExperienceTree
  },
  data: () => ({
    title: 'Experience',
    experienceList: [
      {
        date: '2012-2016',
        in: '鹿児島大学',
        text: 'C++を書きはじめ、コンピュータビジョンに文字通り轢かれる。'
      },
      {
        date: '2016-2018',
        in: '鹿児島大学大学院',
        text: '当時、第三次AIブームに乗っかって深層学習の応用研究に従事。'
      },
      {
        date: '2018',
        in: '某大手印刷会社',
        text: '工場内の設備を設計・導入する部隊で画像処理周りを担当。'
      },
      {
        date: '2019-2020',
        in: '地方のWEB制作会社',
        text: 'AWSを中心としたインフラの構築・運用、時たま簡単なAPIを書く。'
      }
    ]
  })
})
</script>

<style lang="scss" scoped>
.experience {
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
}

.experienceTree {
  margin: 32px 0;
}
</style>
