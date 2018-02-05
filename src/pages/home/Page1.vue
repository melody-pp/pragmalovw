<template>
  <div ref="page" class="companyIntro">
    <img ref="littleRightTop" class="littleRightTop" src="../../assets/page1/littleRightTop.png">
    <img ref="littleBottom" class="littleBottom" src="../../assets/page1/littleBottom.png">
    <img ref="littleBottomStone" class="littleBottomStone" src="../../assets/page1/littleBottomStone.png">
    <img ref="littleMiddle" class="littleMiddle" src="../../assets/page1/littleRightTop.png">

    <img ref="leftTopDirec" class="leftTopDirec" src="../../assets/page1/leftTopDirec.png">
    <img ref="topStone" class="topStone" src="../../assets/page1/topStone.png">
    <img ref="leftBottomDirec" class="leftBottomDirec" src="../../assets/page1/leftBottomDirec.png">
    <div class="topDirecShadow"></div>
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

        TweenLite.from(littleRightTop, 1, {x: 30, y: -20, delay: 1.5})
        TweenLite.from(littleBottom, 1, {x: 20, y: 30, delay: 1.5})
        TweenLite.from(littleBottomStone, 1, {x: 10, y: 15, delay: 1.5})
        TweenLite.from(littleMiddle, 1, {x: 30, y: 15, delay: 1.5})
        TweenLite.from(leftTopDirec, 1, {x: -30, y: -10, rotation: 10, delay: 1.5})
        TweenLite.from(topStone, 1, {x: -15, y: -5, delay: 1.5})
        TweenLite.from(leftBottomDirec, 1, {x: -20, y: 30, rotation: -10, delay: 1.5})
        TweenLite.from(topDirec, 1, {y: -30, rotation: 10, delay: 1.5})
        TweenLite.from(bottomStone, 1, {x: 30, y: 20, delay: 1.5})
      }
    },
  }
</script>
<style scoped lang="scss">
  .themeTxt span:hover {
    color: #f091a0;
  }

  .companyIntro {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f091a0;
    perspective: 1500px;
    img {
      position: absolute;
      perspective: 1500px;
    }
    .littleRightTop {
      width: 23.65vw;
      top: -20vh;
      right: -14vw;
    }
    .littleBottom {
      width: 18.85vw;
      bottom: -27vh;
      right: -6vw;
    }
    .littleBottomStone {
      width: 11.72vw;
      right: -9vw;
      bottom: -6vh;
      transform: rotateZ(50deg);
    }
    .littleMiddle {
      width: 23.65vw;
      top: 18vh;
      right: -23vw;
      transform: rotateZ(60deg);
    }
    .topDirec {
      top: -43vh;
      right: 15vw;
      width: 23.96vw;
    }
    .topDirecShadow {
      top: 6vh;
      right: 36vw;
      width: 9vw;
      height: 16vw;
      border-radius: 39%;
      position: absolute;
      -webkit-box-shadow: 10px 10px 10px #a7a7a7;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 1;
      transform: rotateZ(-23deg);
    }
    .leftTopDirec {
      top: 1vh;
      right: 12vw;
      width: 44.38vw;
    }
    .leftBottomDirec {
      bottom: 8vh;
      right: 27vw;
      width: 38.7vw;
    }
    .bottomStone {
      bottom: -0.5vh;
      right: 17vw;
      width: 24.06vw;
    }
    .topStone {
      top: 6vh;
      right: 36vw;
      width: 11.3vw;
      z-index: 2;
    }
  }
</style>
