<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="fullpageOpt">
      <div class="page page-1"></div>
      <div class="page page-2"></div>
      <div class="page page-3"></div>
    </div>
  </div>
</template>

<script>
  import { TimeLineMax } from 'gsap'

  export default {
    name: 'home',
    data () {
      return {
        fullpageOpt: {
          start: 0,
          dir: 'v',
          loop: false,
          duration: 300,
          beforeChange (ele, current, next) {
          },
          afterChange (ele, current) {
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .fullpage-container {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .page-1 {
    background-color: red;
  }

  .page-2 {
    background-color: blue;
  }

  .page-3 {
    background-color: yellow;
  }
</style>