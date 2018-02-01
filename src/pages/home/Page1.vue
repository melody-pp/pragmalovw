<template>
  <div class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <img class="leftTopDirec" src="../../assets/page1/leftTopDirec.png">
    <img class="leftBottomDirec" src="../../assets/page1/leftBottomDirec.png">
    <img class="topStone" src="../../assets/page1/topStone.png">
    <img class="topDirec" src="../../assets/page1/topDirec.png">
    <img class="bottomStone" src="../../assets/page1/bottomStone.png">
    <div class="themeTxt">
      <div>从开始，就是开始。</div>
      <span class="pointer" @click="toWebsiteIntro">See More</span>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toWebsiteIntro () {
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
      width: 210px;
      height: 33px;
      background-position: 0 -35px;
      position: absolute;
      top: 40px;
      left: 50px;
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

  }
</style>
