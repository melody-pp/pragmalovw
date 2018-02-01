<template>
  <div class="companyIntro">
    <img class="littleRightTop" src="../../assets/page1/littleRightTop.png">
    <img class="littleBottom" src="../../assets/page1/littleBottom.png">
    <img class="littleBottomStone" src="../../assets/page1/littleBottomStone.png">
    <img class="littleMiddle" src="../../assets/page1/littleRightTop.png">

    <img class="leftTopDirec" src="../../assets/page1/leftTopDirec.png">
    <img class="topStone" src="../../assets/page1/topStone.png">
    <img class="leftBottomDirec" src="../../assets/page1/leftBottomDirec.png">
    <img class="topDirec" src="../../assets/page1/topDirec.png">
    <img class="bottomStone" src="../../assets/page1/bottomStone.png">

    <span class="iconsTogether whiteLogo"></span>
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
    .littleRightTop {
      width: 454px;
      top: -20vh;
      right: -14vw;
    }
    .littleBottom {
      width: 362px;
      bottom: -27vh;
      right: -6vw;
    }
    .littleBottomStone {
      width: 225px;
      right: -9vw;
      bottom: -6vh;
      transform: rotateZ(50deg);
    }
    .littleMiddle {
      width: 454px;
      top: 18vh;
      right: -23vw;
      transform: rotateZ(60deg);

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
      top: -43vh;
      right: 15vw;
      width: 460px;
    }

    .leftTopDirec {
      top: 1vh;
      right: 12vw;
      width: 852px;
    }

    .leftBottomDirec {
      bottom: 8vh;
      right: 27vw;
      width: 743px;
    }

    .bottomStone {
      bottom: -0.5vh;
      right: 17vw;
      width: 462px;
    }

    .topStone {
      top: 6vh;
      right: 36vw;
      width: 217px;
    }
  }
</style>
