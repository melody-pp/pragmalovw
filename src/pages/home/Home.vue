<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="fullpageOpt">
      <div class="page page-1">
        <Page1/>
      </div>
      <div class="page page-2"></div>
      <div class="page page-3"></div>
      <div class="page page-4"></div>
    </div>
  </div>
</template>

<script>
  import { TimeLineMax } from 'gsap'
  import Page1 from './Page1'

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
    },
    components: {
      Page1
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
    z-index: 1;
  }

  .page-1 {
    background-color: #f091a0;
  }

  .page-2 {
    background-color: #ec681f;
  }

  .page-3 {
    background-color: #715ba5;
  }

  .page-4 {
    background-color: #8b8d8e;
  }
</style>
