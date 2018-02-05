<template>
  <div ref="page" class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <img class="together" src="../../assets/page4/together.png" alt="">
  </div>
</template>
<script>
  import { pageMoveMixin } from '../../mixins'
  import { TweenLite } from 'gsap'

  export default {
    mixins: [pageMoveMixin],
    methods: {
      toWebsiteIntro () {
        this.$router.push({path: '/service'})
      },
      animate () {
      }
    }
  }
</script>
<style scoped lang="scss">
  .companyIntro {
    width: 100%;
    height: 100%;
    background-color: #715ba5;
    img {
      position: absolute;
    }
    .together {
      width: 32.71vw;
      top: 16vh;
      left: 38vw;
    }

  }
</style>
