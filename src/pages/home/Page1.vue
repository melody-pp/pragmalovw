<template>
  <div class="homePage">
    <span class="colorfulLogo"></span>
    <img ref="banner1" class="banner1" src="../../assets/page1/banner1.png">
    <img ref="banner2" class="banner2" src="../../assets/page1/banner2.png">
    <img ref="banner3" class="banner3" src="../../assets/page1/banner3.png">
    <img ref="banner4" class="banner4" src="../../assets/page1/banner4.png">
    <img ref="banner5" class="banner5" src="../../assets/page1/banner5.png">
    <img ref="banner6" class="banner6" src="../../assets/page1/banner6.png">
    <img ref="banner7" class="banner7" src="../../assets/page1/banner7.png">
    <img ref="banner10" class="banner10" src="../../assets/page1/banner10.png">
    <img ref="banner8" class="banner8" src="../../assets/page1/banner8.png">
    <div ref="banner9Shadow" class="banner9Shadow"></div>
    <img ref="banner9" class="banner9" src="../../assets/page1/banner9.png">
    <img ref="banner11" class="banner11" src="../../assets/page1/banner11.png">
    <img ref="banner12" class="banner12" src="../../assets/page1/banner12.png">
  </div>
</template>

<script>
  import { TweenMax } from 'gsap'

  export default {
    name: 'page1',
    mounted () {
      const {banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9, banner10, banner11, banner12} = this.$refs
      TweenMax.to(banner1, 30, {rotationZ: 360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner2, 30, {rotationZ: 360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner3, 30, {rotationZ: 360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner4, 30, {rotationZ: 360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner5, 30, {rotationZ: -360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner6, 30, {rotationZ: -360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner7, 30, {rotationZ: -360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner8, 30, {rotationZ: 360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner9, 30, {rotationZ: -360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner10, 30, {rotationZ: 360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner11, 30, {rotationZ: -360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
      TweenMax.to(banner12, 30, {rotationZ: -360, repeat: Infinity, ease: Linear.easeNone, repeatDelay: 0})
    }
  }
</script>

<style scoped lang="scss">
  .homePage {
    height: 100%;
    background-color: #e1e1e1;
    img, div {
      position: absolute;
    }
    .banner1 {
      width: 36.25vw;
      top: 28.48vh;
      left: 13vw;
      transform-origin: 37vw 21.52vh;
    }
    .banner2 {
      width: 54.875vw;
      top: 39vh;
      left: 55vw;
      transform-origin: -5vw 11vh;
    }
    .banner3 {
      width: 33.75vw;
      top: -7.12vh;
      left: 53vw;
      transform-origin: -3vw 57.12vh;
    }
    .banner4 {
      width: 15.54vw;
      top: 50vh;
      left: 52vw;
      transform-origin: -2vw 0;
    }
    .banner5 {
      width: 15.83vw;
      top: 74vh;
      left: 57vw;
      transform-origin: -7vw -24vh;
    }
    .banner6 {
      width: 8.96vw;
      top: 30.79vh;
      left: 19vw;
      transform-origin: 31vw 19.21vh;
    }
    .banner7 {
      width: 12.04vw;
      top: 12.46vh;
      left: 63.5vw;
      transform-origin: -13.5vw 37.54vh;
    }
    .banner8 {
      width: 20vw;
      top: -14.24vh;
      left: 25vw;
      transform-origin: 25vw 64.24vh;
    }
    .banner9Shadow {
      width: 15.71vw;
      height: 5vw;
      top: -1.78vh;
      left: 25vw;
      border-radius: 50%;
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      transform: rotateZ(-23deg);
    }
    .banner9 {
      width: 18.71vw;
      top: -17.8vh;
      left: 20vw;
      transform-origin: 30vw 57.8vh;
    }
    .banner10 {
      width: 31vw;
      top: 52vh;
      left: 4vw;
      transform-origin: 46vw -2vh;
    }
    .banner11 {
      width: 19.29vw;
      top: 78vh;
      left: 24vw;
      transform-origin: 26vw -28vh;
    }
    .banner12 {
      width: 21.33vw;
      top: -5.34vw;
      left: 45vw;
      transform-origin: 5vw 55.34vh;
    }
  }

</style>
