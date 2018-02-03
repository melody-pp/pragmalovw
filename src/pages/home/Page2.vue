<template>
  <div class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <div class="themeTxt">
      <div>如此，好看。</div>
      <div>还心动</div>
      <span class="pointer" @click="toWebsiteIntro">See More</span>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toWebsiteIntro () {
        this.$router.push({path: '/wonderfulMoment'})
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
