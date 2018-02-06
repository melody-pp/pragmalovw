<template>
  <div ref="page" class="companyIntro">
    <span class="iconsTogether whiteLogo"></span>
    <ThemeText :content="ThemeText" @seemore="toService"/>
    <img class="stone" src="../../assets/page4/pic_06.png" alt="">
    <img class="water" src="../../assets/page4/pic_05.png" alt="">
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
  .companyIntro {
    .themeTxt span:hover {
      color: #715ba5;
    }
    width: 100%;
    height: 100%;
    background-color: #715ba5;
    img {
      position: absolute;
    }
    .water {
      width: 19.92vw;
      top: 21vh;
      left: 38.9vw;
    }
    .stone {
      width: 32.71vw;
      top: 40vh;
      left: 38vw;
    }
  }
</style>
