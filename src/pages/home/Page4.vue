<template>
  <div ref="page" class="page4">
    <white-logo/>
    <ThemeText :content="ThemeText" @seemore="toService"/>
    <img class="stone" src="../../assets/page4/pic_06.png" alt="">
    <img class="water" src="../../assets/page4/pic_05.png" alt="">
  </div>
</template>
<script>
  import { pageMoveMixin } from '../../mixins'
  import { TweenLite } from 'gsap'
  import ThemeText from '../public/ThemeText'
  import WhiteLogo from '../public/WhiteLogo'

  export default {
    mixins: [pageMoveMixin],
    components: {ThemeText, WhiteLogo},
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
    img {
      position: absolute;
    }
    .water {
      width: 19.92vw;
      top: 10.3vw;
      left: 38.9vw;
    }
    .stone {
      width: 32.71vw;
      top: 20vw;
      left: 38vw;
    }
  }
</style>
