<template>
  <section class="experienceTree">
    <span class="experienceTree__line" />
    <div
      v-for="(experience, index) in experienceList"
      :key="experience.data"
      :class="index%2 === 0 ? 'experience--even' : 'experience--odd'"
      class="experience"
    >
      <ExperienceCard
        :experience="experience"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import ExperienceCard from '@/components/Molecules/ExperienceCard'

export default Vue.extend({
  components: {
    ExperienceCard
  },
  props: {
    experienceList: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.experienceTree {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  position: relative;

  &__line {
    height: 100%;
    width: 3px;
    position: absolute;
    left: 49.75%;
    background-color: $base-color;

    &:before {
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      top: -10px;
      left: -8px;
      border-radius: 50%;
      background-color: $base-color;
    }

    &:after {
      content: "";
      width: 15px;
      height: 15px;
      position: absolute;
      bottom: -7.5px;
      left: -6px;
      border-radius: 50%;
      background-color: $base-color;
    }
  }

  @include max-screen ($sp-width) {
    flex-flow: column;

    &__line {
      left: 0%;
    }
  }
}

.experience {
  width: 45%;
  position: relative;

  &--even {
    margin: 56px auto 8px 0;

    &:before {
      content: "";
      width: 11%;
      height: 3px;
      position: absolute;
      top: 20%;
      left: 100%;
      background-color: $base-color;
    }
  }

  &--odd {
    margin: 112px 0 8px auto;

    &:before {
      content: "";
      width: 11%;
      height: 3px;
      position: absolute;
      top: 20%;
      right: 100%;
      background-color: $base-color;
    }
  }

  @include max-screen ($sp-width) {
    width: 95%;
    margin-left: 5%;

    &--even,
    &--odd {
      margin: 8px 0 8px auto;

      &:before {
        width: 5%;
        top: 30%;
        right: 0%;
        left: -5%;
      }
    }
  }
}
</style>
