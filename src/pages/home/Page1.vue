<template>
  <div ref="page" class="companyIntro">
    <img ref="littleRightTop" class="littleRightTop" src="../../assets/page1/littleRightTop.png">
    <img ref="littleBottom" class="littleBottom" src="../../assets/page1/littleBottom.png">
    <img ref="littleBottomStone" class="littleBottomStone" src="../../assets/page1/littleBottomStone.png">
    <img ref="littleMiddle" class="littleMiddle" src="../../assets/page1/littleRightTop.png">

    <img ref="leftTopDirec" class="leftTopDirec" src="../../assets/page1/leftTopDirec.png">
    <img ref="topStone" class="topStone" src="../../assets/page1/topStone.png">
    <img ref="leftBottomDirec" class="leftBottomDirec" src="../../assets/page1/leftBottomDirec.png">
    <img ref="topDirec" class="topDirec" src="../../assets/page1/topDirec.png">
    <img ref="bottomStone" class="bottomStone" src="../../assets/page1/bottomStone.png">

    <span class="iconsTogether whiteLogo"></span>
    <div class="themeTxt">
      <div>从开始，就是开始。</div>
      <span class="pointer" @click="toWebsiteIntro">See More</span>
    </div>
  </div>
</template>
<script>
  import { TweenLite } from 'gsap'
  import { pageMoveMixin } from '../../mixins'

  export default {
    mixins: [pageMoveMixin],
    mounted () {
      this.animate()
    },
    methods: {
      toWebsiteIntro () {
        this.$router.push({path: '/websiteIntro'})
      },
      animate () {
        const {
          littleRightTop, littleBottom, littleBottomStone, littleMiddle,
          leftTopDirec, topStone, leftBottomDirec, topDirec, bottomStone
        } = this.$refs

        TweenLite.from(littleRightTop, 1, {x: 30, y: -20, delay: .5})
        TweenLite.from(littleBottom, 1, {x: 20, y: 30, delay: .5})
        TweenLite.from(littleBottomStone, 1, {x: 10, y: 15, delay: .5})
        TweenLite.from(littleMiddle, 1, {x: 30, y: 15, delay: .5})
        TweenLite.from(leftTopDirec, 1, {x: -30, y: -10, rotation: 10, delay: .5})
        TweenLite.from(topStone, 1, {x: -15, y: -5, delay: .5})
        TweenLite.from(leftBottomDirec, 1, {x: -20, y: 30, rotation: -10, delay: .5})
        TweenLite.from(topDirec, 1, {y: -30, rotation: 10, delay: .5})
        TweenLite.from(bottomStone, 1, {x: 30, y: 20, delay: .5})
      }
    },
  }
</script>
<style scoped lang="scss">
  .companyIntro {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f091a0;
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
