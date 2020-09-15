<template>
  <section class="skillCard">
    <svg
      :width="length"
      :height="length"
      :style="rotateStyle"
      class="pie"
    >
      <circle
        :r="radius"
        :cx="center"
        :cy="center"
        :style="strokeStyle"
        class="pie__circle"
      />
    </svg>
    <img
      :src="src"
      :alt="title"
      class="icon"
    >
    <h1 class="name">{{ title }}</h1>
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
    const base = 120
    const radius = base / 4
    const center = base / 2
    const strokePercentage = Math.ceil(2*Math.PI*radius)
    const strokeLength = strokePercentage*this.percent/100
    return {
      length: base,
      radius: radius,
      center: center,
      rotateStyle: {
        transform: `rotate(-90deg)`
      },
      strokeStyle: {
        strokeWidth: base/2,
        strokeDasharray: `${strokeLength} ${strokePercentage}`
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.skillCard {
  width: 200px;
  height: 200px;
  margin: 12.5px;
  padding: 20px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 16px;
  background-color: $concept-color;
  box-shadow:  $neumorphism-convex;

  @include screen ($pc-width, $sp-width) {
    width: 175px;
    height: 175px;
  }

  @include max-screen ($sp-width) {
    width: 150px;
    height: 160px;
  }

  .pie {
    position: absolute;
    background: $concept-color;
    border-radius: 50%;
    box-shadow: $neumorphism-concave;

    &__circle {
      fill: $concept-color;
      stroke: $rotate-color;
    }
  }

  .icon {
    width: 90px;
    height: 90px;
    padding: 25px;
    position: absolute;
    top: 35px;
    border-radius: 50%;
    background-color: $concept-color;
    box-shadow: $neumorphism-convex;
  }

  .name {
    position: absolute;
    bottom: 30px;
    line-height: $small-font-size;
    font-size: $small-font-size;
    color: $base-color;

    @include screen ($pc-width, $sp-width) {
      bottom: 15px;
    }

    @include max-screen ($sp-width) {
      display: none;
    }
  }
}
</style>
