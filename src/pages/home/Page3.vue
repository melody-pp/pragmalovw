<template>
  <div ref="page" class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <div class="themeTxt">
      <div>用专一去专注。</div>
      <span class="pointer" @click="toWebsiteIntro">See More</span>
    </div>
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
  .themeTxt span:hover {
    color: #715ba5;
  }

  .companyIntro {
    width: 100%;
    height: 100%;
    background-color: #715ba5;
  }
</style>
