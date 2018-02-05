<template>
  <div ref="page" class="companyIntro">
    <img ref="littleRightTop" class="littleRightTop" src="../../assets/page1/littleRightTop.png">
    <img ref="littleBottom" class="littleBottom" src="../../assets/page1/littleBottom.png">
    <div ref="littleBottomStoneShadow" class="littleBottomStoneShadow"></div>
    <img ref="littleBottomStone" class="littleBottomStone" src="../../assets/page1/littleBottomStone.png">
    <img ref="littleMiddle" class="littleMiddle" src="../../assets/page1/littleRightTop.png">

    <img ref="leftTopDirec" class="leftTopDirec" src="../../assets/page1/leftTopDirec.png">
    <div ref="topStoneShadow" class="topStoneShadow"></div>
    <img ref="topStone" class="topStone" src="../../assets/page1/topStone.png">
    <div ref="leftBottomDirecShadow" class="leftBottomDirecShadow"></div>
    <img ref="leftBottomDirec" class="leftBottomDirec" src="../../assets/page1/leftBottomDirec.png">
    <div ref="topDirecShadow" class="topDirecShadow"></div>
    <img ref="topDirec" class="topDirec" src="../../assets/page1/topDirec.png">
    <div ref="bottomStoneShadow" class="bottomStoneShadow"></div>
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
          littleRightTop, littleBottom, littleBottomStone, littleBottomStoneShadow, littleMiddle,
          leftTopDirec, topStone, topStoneShadow, leftBottomDirec, leftBottomDirecShadow, topDirec, topDirecShadow, bottomStone, bottomStoneShadow
        } = this.$refs

        TweenLite.from(littleRightTop, 1, {x: 30, y: -20, delay: 1.5})
        TweenLite.from(littleBottom, 1, {x: 20, y: 30, delay: 1.5})
        TweenLite.from(littleBottomStone, 1, {x: 10, y: 15, delay: 1.5})
        TweenLite.from(littleBottomStoneShadow, 1, {x: 10, y: 15, delay: 1.5})
        TweenLite.from(littleMiddle, 1, {x: 30, y: 15, delay: 1.5})
        TweenLite.from(leftTopDirec, 1, {x: -30, y: -10, rotation: 10, delay: 1.5})
        TweenLite.from(topStone, 1, {x: -15, y: -5, delay: 1.5})
        TweenLite.from(topStoneShadow, 1, {x: -15, y: -5, delay: 1.5})
        TweenLite.from(leftBottomDirec, 1, {x: -20, y: 30, rotation: -10, delay: 1.5})
        TweenLite.from(leftBottomDirecShadow, 1, {x: -20, y: 30, rotation: -10, delay: 1.5})
        TweenLite.from(topDirec, 1, {y: -30, rotation: 10, delay: 1.5})
        TweenLite.from(topDirecShadow, 1, {y: -10, rotation: 1, delay: 1.5})
        TweenLite.from(bottomStone, 1, {x: 30, y: 20, delay: 1.5})
        TweenLite.from(bottomStoneShadow, 1, {x: 30, y: 20, delay: 1.5})
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
    img{
      position: absolute;
      perspective: 1500px;
    }
    .littleRightTop {
      width: 23.65vw;
      top: -20vh;
      right: -14vw;
    }
    .littleBottomStoneShadow {
      width: 13.85vw;
      height: 10vw;
      bottom: 1vh;
      right: -6vw;
      background-color: rgba(0, 0, 0, 0.3);
      -webkit-transform: rotateZ(-70deg);
      transform: rotateZ(-70deg);
      -webkit-filter: blur(6px);
      filter: blur(6px);
      position: absolute;
      border-radius: 50%;
      position: absolute;

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
      top: -7vh;
      right: 11vw;
      width: 21vw;
      height: 21vw;
      position: absolute;
      background-color: rgba(115, 35, 48, 0.4);
      -webkit-transform: rotateZ(-22deg);
      transform: rotateZ(-22deg);
      border-radius: 21vw 0;
      -webkit-filter: blur(6px);
      filter: blur(6px);
    }
    .leftTopDirec {
      top: 1vh;
      right: 12vw;
      width: 44.38vw;
    }
    .leftBottomDirecShadow {
      bottom: 9vh;
      right: 32vw;
      width: 29.7vw;
      height: 26vw;
      border-radius: 29.7vw 0;
      position: absolute;
      background-color: rgba(115, 35, 48, 0.4);
      -webkit-transform: rotateZ(-3deg);
      transform: rotateZ(-3deg);
      filter: blur(6px);
    }
    .leftBottomDirec {
      bottom: 8vh;
      right: 27vw;
      width: 38.7vw;
    }
    .bottomStoneShadow {
      bottom: 7.5vh;
      right: 15vw;
      width: 22.06vw;
      height: 10vw;
      background-color: rgba(115, 35, 48, 0.4);
      -webkit-transform: rotateZ(28deg);
      transform: rotateZ(28deg);
      -webkit-filter: blur(6px);
      filter: blur(6px);
      border-radius: 50%;
      position: absolute;

    }
    .bottomStone {
      bottom: -0.5vh;
      right: 17vw;
      width: 24.06vw;
    }
    .topStoneShadow {
      top: 6vh;
      right: 36vw;
      width: 9vw;
      height: 17vw;
      border-radius: 39%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.3);
      -webkit-transform: rotateZ(-20deg);
      transform: rotateZ(-20deg);
      filter: blur(6px);
    }
    .topStone {
      top: 6vh;
      right: 36vw;
      width: 11.3vw;
      z-index: 2;
    }
  }
</style>
