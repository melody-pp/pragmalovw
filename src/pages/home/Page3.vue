<template>
  <div ref="page" class="page3">
    <span class="iconsTogether whiteLogo"></span>
    <ThemeText :content="ThemeText" @seemore="toWonderfulMoment"/>
    <img class="bigStone" src=../../assets/page3/bigStone.png>
    <div ref="leafShadow" class="leafShadow"></div>
    <img ref="leaf" class="leaf" src=../../assets/page3/leaf.png>
    <img class="littleStone" src=../../assets/page3/littleStone.png>
    <div ref="ballShadow" class="ballShadow"></div>
    <img ref="ball" class="ball" src=../../assets/page3/ball.png>
    <div ref="glassGreenShadow" class="glassGreenShadow"></div>
    <img ref="glassGreen" class="glassGreen" src=../../assets/page3/glass.png>
  </div>
</template>
<script>
  import { pageMoveMixin } from '../../mixins'
  import { TweenLite } from 'gsap'
  import ThemeText from '../public/ThemeText'

  export default {
    mixins: [pageMoveMixin],
    components: {ThemeText},
    computed: {
      ThemeText () {
        return this.$store.getters.getThemeText(1)
      }
    },
    methods: {
      toWonderfulMoment () {
        this.$router.push({path: '/wonderfulMoment'})
      },
      animate () {
        const {
          leaf, leafShadow, glassGreen, glassGreenShadow, ball, ballShadow
        }
          = this.$refs

        TweenLite.from(leaf, 1, {x: 30, y: -20, rotation: 15, delay: .5})
        TweenLite.from(leafShadow, 1, {x: 30, y: -20, rotation: 15, delay: .5})
        TweenLite.from(glassGreen, 1, {x: 20, y: -20, rotation: -10, delay: .5})
        TweenLite.from(glassGreenShadow, 1, {x: 5, y: -10, rotation: -5})
        TweenLite.from(ball, 1, {ease: Elastic.easeOut.config(1, 0.3), y: -50, delay: .5})
        TweenLite.from(ballShadow, 1, {ease: Elastic.easeOut.config(1, 0.3), y: -50, scale: 0.8, delay: .5})

      }
    }
  }
</script>
<style lang="scss">
  .page3 {
    width: 100%;
    height: 100%;
    background-color: #ec681f;
    overflow: hidden;
    .themeTxt span:hover {
      color: #ec681f;
    }
    img {
      position: absolute;
    }
    .leafShadow {
      width: 25vw;
      height: 15vw;
      top: -2vh;
      left: 22vw;
      -webkit-transform-origin: top;
      transform-origin: top;
      position: absolute;
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      border-radius: 15vw 0;
      transform: rotateZ(-6deg);
    }
    .leaf {
      width: 29.664vw;
      top: -11vh;
      left: 24vw;
      transform-origin: top;
    }
    .ballShadow {
      width: 10vw;
      height: 10vh;
      bottom: 19vh;
      left: 48vw;
      position: absolute;
      background-color: rgba(73, 41, 35, .5);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      border-radius: 50%;
    }
    .ball {
      width: 18.288vw;
      bottom: 21vh;
      left: 44vw
    }
    .bigStone {
      width: 58.752vw;
      top: -36vh;
      right: 3vw;
    }
    .littleStone {
      width: 31.624vw;
      bottom: -9vh;
      left: 40vw;
    }
    .glassGreenShadow {
      width: 4vw;
      height: 20vw;
      top: -1vh;
      right: 15vw;
      -webkit-transform-origin: top;
      transform-origin: top;
      position: absolute;
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      transform: rotateZ(38deg);
    }
    .glassGreen {
      width: 22.13vw;
      top: -23vh;
      right: 10vw;
      transform-origin: top;
    }
  }
</style>
