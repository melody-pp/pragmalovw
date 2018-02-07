<template>
  <div ref="page" class="page4">
    <white-logo/>
    <ThemeText :content="ThemeText" @seemore="toService"/>
    <canvas class="together" ref="canvas" width="785" height="1537"></canvas>
  </div>
</template>
<script>
  import { pageMoveMixin } from '../../mixins'
  import { TweenLite } from 'gsap'
  import ThemeText from '../public/ThemeText'
  import WhiteLogo from '../public/WhiteLogo'
  import Ripple from '../../lib/Ripple/Ripple'

  export default {
    mixins: [pageMoveMixin],
    components: {ThemeText, WhiteLogo},
    mounted () {
      const ctx = this.$refs.canvas.getContext('2d')
      const mainImg = document.createElement('img')

      ctx.fillStyle = "#715ba5";
      ctx.fillRect(0, 0, 785, 1537);
      mainImg.src = require('../../assets/page4/together.png')
      mainImg.onload = () => {
        ctx.drawImage(mainImg, 0, 0)
        new Ripple(ctx, 200, 0, 380, mainImg)
      }
    },
    computed: {
      ThemeText () {
        return this.$store.getters.getThemeText(2)
      }
    },
    methods: {
      toService () {
        this.$router.push({path: '/service'})
      },
      animate () {

      }
    }
  }
</script>
<style lang="scss">
  .page4 {
    .themeTxt span:hover {
      color: #715ba5;
    }
    width: 100%;
    height: 100%;
    background-color: #715ba5;
    img, canvas {
      position: absolute;
    }
    .water {
      width: 19.92vw;
      top: 10.3vw;
      left: 38.9vw;
    }
    .together {
      width: 32.7vw;
      top: 12vw;
      left: 38vw;
    }
  }
</style>
