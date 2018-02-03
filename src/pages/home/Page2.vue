<template>
  <div ref="page" class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <div class="themeTxt">
      <div>如此，好看。</div>
      <div>还心动</div>
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
        this.$router.push({path: '/wonderfulMoment'})
      },
      animate () {
        TweenLite.to(this.$refs.page, .5, {scale: 1, autoAlpha: 1, delay: .5})
      }
    }
  }
</script>
<style scoped lang="scss">
  .companyIntro {
    width: 100%;
    height: 100%;
    background-color: #ec681f;
  }
</style>
