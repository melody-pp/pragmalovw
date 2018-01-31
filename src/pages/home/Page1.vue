<template>
  <div class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <img class="leftTopDirec" src="../../assets/page1/leftTopDirec.png" alt="">
    <img class="leftBottomDirec" src="../../assets/page1/leftBottomDirec.png" alt="">
    <img class="topStone" src="../../assets/page1/topStone.png" alt="">
    <img class="topDirec" src="../../assets/page1/topDirec.png" alt="">
    <img class="bottomStone" src="../../assets/page1/bottomStone.png" alt="">
    <div class="themeTxt">
      <div>从开始，就是开始。</div>
      <span class="pointer" @click="toWebsitIntro">See More</span>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toWebsitIntro () {
        this.$router.push({path: '/websiteIntro'})
      }
    }
  }
</script>
<style scoped lang="scss">
  .companyIntro {
    img {
      position: absolute;
    }
    .whiteLogo {
      width: 10.94vw;
      height: 1.88vw;
      background-position: 0 -1.88vw;
      position: absolute;
      top: 3.89vh;
      left: 2.6vw;
    }
    .topDirec {
      top: -50vh;
      right: 10vw;
      width: 25vw;
    }

    .leftTopDirec {
      top: 1vh;
      right: 10vw;
      width: 45vw;
    }

    .leftBottomDirec {
      bottom: 2vh;
      right: 27vw;
      width: 42vw;
    }

    .bottomStone {
      bottom: -1vh;
      right: 10vw;
      width: 24vw;
    }

    .topStone {
      top: 5vh;
      right: 34vw;
      width: 12vw;
    }
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
