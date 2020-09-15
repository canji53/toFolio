<template>
  <section class="skillCard">
    <div :class="{
      'pieChart': true,
      'pieChart--gt50': isGt50
    }">
      <div
        :class="{
          'pieChart__progress': true,
          'pieChart__progress--gt50': isGt50
        }"
      >
        <div
          v-bind:style="rotateStyle"
          :class="{
            'pieChart__progress__fill': true,
            'pieChart__progress__fill--gt50': isGt50
          }"
        />
      </div>
      <img
        :src="src"
        :alt="title"
        class="pieChart__icon"
      >
    </div>
    <h1 class="skillCard__title">{{ title }}</h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    percent: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      isGt50: this.percent >= 50 ? true : false,
      rotateStyle: { transform: 'rotate(' + `${360*this.percent/100}` + 'deg)' }
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin circle($size) {
  content: "";
  position: absolute;
  border-radius: 50%;
  left: calc(50% - #{$size/2});
  top: calc(50% - #{$size/2});
  width: $size;
  height: $size;
}

.skillCard {
  width: 200px;
  height: 200px;
  margin: 12.5px;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 16px;
  background-color: $concept-color;
  box-shadow:  $neumorphism-convex;

  &__title {
    margin: 16px 0;
    line-height: $base-font-size;
    font-size: $base-font-size;
    color: $base-color;
  }
}

$size: 120px;

.pieChart {
  width: $size;
  height: $size;
  border-radius: 50%;
  background-color: #fff;
  position: relative;

  &--gt50 {
    background-color: $accent-color;
  }
}

.pieChart__progress {
  @include circle($size);
  clip: rect(0, $size, $size, #{$size/2});

  &--gt50 {
    clip: rect(0, #{$size/2}, $size, 0);
  }
}

.pieChart__progress__fill {
  @include circle($size);
  clip: rect(0, #{$size/2}, $size, 0);
  background: $accent-color;

  &--gt50 {
    clip: rect(0, $size, $size, #{$size/2});
    background: #fff;
  }
}

.pieChart__icon {
  width: 100px;
  height: 100px;
  padding: 25px;
  position: absolute;
  top: 8px;
  left: 10px;
  border-radius: 50%;
  background-color: $concept-color;
  box-shadow: -5px 5px 10px #c1c9d2, 
             5px -5px 10px #ffffff;
}
</style>
