<template>
  <div class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <div class="themeTxt">
      <div>用专一去专注。</div>
      <span class="pointer" @click="toWebsiteIntro">See More</span>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toWebsiteIntro () {
        this.$router.push({path: '/service'})
      }
    }
  }
</script>
<style scoped lang="scss">
  .companyIntro {
    width: 100%;
    height: 100%;
    background-color: #715ba5;

    .themeTxt {
      position: absolute;
      bottom: 21.67vh;
      left: 2.6vw;
      color: #fff;
      div {
        margin-bottom: 1.85vh;
        font-family: 'SourceHanSansCN-Bold';
        font-size: 2.4vw;
      }
      span {
        border: 1px solid #fff;
        padding: 0.93vh 2.92vw;
        border-radius: 0.3vw;
        font-family: 'SourceHanSansCN-Light';
        font-size: 0.94vw;
      }
    }
  }
</style>
