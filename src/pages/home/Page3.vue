<template>
  <div ref="page" class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <div class="themeTxt">
      <div style="margin-bottom: 1vh;">如此，好看。</div>
      <div>还心动</div>
      <span class="pointer" @click="toWebsiteIntro">See More</span>
    </div>
    <div class="imgBox">
      <img class="bigStone" src=../../assets/page3/bigStone.png>
      <img class="leaf" src=../../assets/page3/leaf.png>
      <img class="littleStone" src=../../assets/page3/littleStone.png>
      <img class="ball" src=../../assets/page3/ball.png>
      <img class="glassGreen" src=../../assets/page3/glass.png>
    </div>
  </div>
</template>
<script>
  import { pageMoveMixin } from '../../mixins'
  import { TweenLite } from 'gsap'

  export default {
    mixins: [pageMoveMixin],
    methods: {
      toWebsiteIntro () {
        this.$router.push({path: '/wonderfulMoment'})
      },
      animate () {
      }
    }
  }
</script>
<style scoped lang="scss">
  .companyIntro {
    width: 100%;
    height: 100%;
    background-color: #ec681f;
    overflow: hidden;
    .imgBox {
      position: relative;
      height: 100%;
      img {
        position: absolute;
      }
      .leaf {
        width: 29.664vw;
        top: -11vh;
        left: 24vw;
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
      .glassGreen {
        width: 22.13vw;
        top: -23vh;
        right: 10vw;
      }
    }
  }
</style>
