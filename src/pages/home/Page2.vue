<template>
  <div ref="page" class="page2">
    <img ref="littleRightTop" class="littleRightTop" src="../../assets/page2/littleRightTop.png">
    <img ref="littleBottom" class="littleBottom" src="../../assets/page2/littleBottom.png">
    <div ref="littleBottomStoneShadow" class="littleBottomStoneShadow"></div>
    <img ref="littleBottomStone" class="littleBottomStone" src="../../assets/page2/littleBottomStone.png">
    <img ref="littleMiddle" class="littleMiddle" src="../../assets/page2/littleRightTop.png">

    <img ref="leftTopDirec" class="leftTopDirec" src="../../assets/page2/leftTopDirec.png">
    <div ref="topStoneShadow" class="topStoneShadow"></div>
    <img ref="topStone" class="topStone" src="../../assets/page2/topStone.png">
    <div ref="leftBottomDirecShadow" class="leftBottomDirecShadow"></div>
    <img ref="leftBottomDirec" class="leftBottomDirec" src="../../assets/page2/leftBottomDirec.png">
    <div ref="topDirecShadow" class="topDirecShadow"></div>
    <img ref="topDirec" class="topDirec" src="../../assets/page2/topDirec.png">
    <div ref="bottomStoneShadow" class="bottomStoneShadow"></div>
    <img ref="bottomStone" class="bottomStone" src="../../assets/page2/bottomStone.png">

    <white-logo/>
    <ThemeText :content="ThemeText" @seemore="toWebsiteIntro"/>
  </div>
</template>
<script>
  import { TweenLite } from 'gsap'
  import { pageMoveMixin } from '../../mixins'
  import ThemeText from '../public/ThemeText'
  import WhiteLogo from '../public/WhiteLogo'

  export default {
    mixins: [pageMoveMixin],
    components: {ThemeText, WhiteLogo},
    mounted () {
      this.animate()
    },
    computed: {
      ThemeText () {
        return this.$store.getters.getThemeText(0)
      }
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

        TweenLite.from(littleRightTop, 1, {x: 30, y: -20, delay: .5})
        TweenLite.from(littleBottom, 1, {x: 20, y: 30, delay: .5})
        TweenLite.from(littleBottomStone, 1, {x: 10, y: 15, delay: .5})
        TweenLite.from(littleBottomStoneShadow, 1, {x: 10, y: 15, delay: .5})
        TweenLite.from(littleMiddle, 1, {x: 30, y: 15, delay: .5})
        TweenLite.from(leftTopDirec, 1, {x: -30, y: -10, rotation: 10, delay: .5})
        TweenLite.from(topStone, 1, {x: -15, y: -5, delay: .5})
        TweenLite.from(topStoneShadow, 1, {x: -15, y: -5, delay: .5})
        TweenLite.from(leftBottomDirec, 1, {x: -20, y: 30, rotation: -10, delay: .5})
        TweenLite.from(leftBottomDirecShadow, 1, {x: -20, y: 30, rotation: -10, delay: .5})
        TweenLite.from(topDirec, 1, {y: -30, rotation: 10, delay: .5})
        TweenLite.from(topDirecShadow, 1, {y: -10, rotation: 1, delay: .5})
        TweenLite.from(bottomStone, 1, {x: 30, y: 20, delay: .5})
        TweenLite.from(bottomStoneShadow, 1, {x: 30, y: 20, delay: .5})
      }
    },
  }
</script>
<style lang="scss">
  .page2 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f0a3ab;
    perspective: 1500px;
    .themeTxt span:hover {
      color: #f091a0;
    }
    img {
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
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-transform: rotateZ(-70deg);
      transform: rotateZ(-70deg);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      position: absolute;
      border-radius: 50%;
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
      top: -46vh;
      right: 18vw;
      width: 25.96vw;
    }
    .topDirecShadow {
      top: -19vh;
      right: 14.7vw;
      width: 27vw;
      height: 27vw;
      position: absolute;
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-transform: rotateZ(-38deg);
      transform: rotateZ(-38deg);
      border-radius: 20vw 0;
      -webkit-filter: blur(12px);
      filter: blur(12px);
    }
    .leftTopDirec {
      top: 8vh;
      right: 17vw;
      width: 45.38vw;
    }
    .leftBottomDirecShadow {
      bottom: 3vh;
      right: 39vw;
      width: 29.7vw;
      height: 26vw;
      border-radius: 29.7vw 0;
      position: absolute;
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-transform: rotateZ(-7deg);
      transform: rotateZ(-7deg);
      -webkit-filter: blur(12px);
      filter: blur(12px);
    }
    .leftBottomDirec {
      bottom: -1vh;
      right: 34vw;
      width: 40.7vw;
    }
    .bottomStoneShadow {
      bottom: 9.5vh;
      right: 15vw;
      width: 24.06vw;
      height: 10vw;
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-transform: rotateZ(28deg);
      transform: rotateZ(28deg);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      border-radius: 50%;
      position: absolute;
    }
    .bottomStone {
      bottom: -0.5vh;
      right: 17vw;
      width: 26.06vw;
    }
    .topStoneShadow {
      top: 11vh;
      right: 39vw;
      width: 9vw;
      height: 18vw;
      border-radius: 39%;
      position: absolute;
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-transform: rotateZ(-20deg);
      transform: rotateZ(-20deg);
      -webkit-filter: blur(12px);
      filter: blur(12px);
    }
    .topStone {
      top: 12vh;
      right: 40vw;
      width: 11.3vw;
    }
  }
</style>
