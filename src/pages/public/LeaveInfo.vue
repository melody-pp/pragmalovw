<template>
  <div ref="modal" class="modal" @click="clickHandler">
    <div ref="envelope" class="envelope">
      <img ref="seal" class="seal" src="../../assets/leaveInfo/pic_03.png">
      <img ref="container" class="container" src="../../assets/leaveInfo/pic_04.png">
      <div ref="content" class="content">
        <div class="colorfulLogo"></div>
        <form>

        </form>
      </div>
      <div class="simpleColorfulLogo"></div>
    </div>
  </div>
</template>

<script>
  import { TimelineLite } from 'gsap'
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'leave-info',
    computed: {
      ...mapState(['leaveInfoVisible'])
    },
    methods: {
      ...mapMutations(['hideLeaveInfo']),
      clickHandler (evnet) {
        evnet.target.classList.contains('modal') && this.hideLeaveInfo()
      },
      openAnimate () {
        if (this.openTimeline) {
          return this.openTimeline.restart()
        }

        const {modal, seal, envelope, content} = this.$refs
        this.openTimeline = new TimelineLite()

        this.openTimeline
          .set(modal, {display: 'block', autoAlpha: 1, scale: 1, x: 0, y: 0})
          .from(modal, .5, {autoAlpha: 0, scale: 0})
          .from(envelope, 1, {autoAlpha: 0, y: 200, ease: Elastic.easeOut.config(1.4, 0.75)})
          .to(seal, 1, {rotationX: 0})
          .set(seal, {zIndex: 1})
          .set(content, {zIndex: 2})
          .to(content, 1, {y: -400, height: 700, ease: Back.easeOut.config(1.1)})
          .to(envelope, 1, {y: 0}, '-=1')
      },
      hideAnimate () {
        if (this.hideTimeline) {
          return this.hideTimeline.restart()
        }

        const {modal} = this.$refs
        this.hideTimeline = new TimelineLite()
        this.hideTimeline
          .to(modal, .2, {autoAlpha: .6, scale: .6})
          .to(modal, .5, {autoAlpha: 0, scale: 0, x: 500, y: -500, ease: Elastic.easeIn.config(1, 0.75),})
      }
    },
    watch: {
      leaveInfoVisible (newVal) {
        newVal
          ? this.openAnimate()
          : this.hideAnimate()
      }
    }
  }
</script>

<style scoped lang="scss">
  .modal {
    display: none;
    position: absolute;
    z-index: 101;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .6);
  }

  .envelope {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    height: 400px;
    text-align: center;

    > .simpleColorfulLogo {
      z-index: 5;
      left: 50%;
      bottom: 30px;
      position: absolute;
      transform: translateX(-50%);
    }
    .seal {
      left: 50%;
      top: -233px;
      z-index: 4;
      position: absolute;
      transform-origin: bottom;
      transform: translateX(-50%) rotateX(-180deg);
    }

    .container {
      left: 50%;
      z-index: 3;
      position: absolute;
      transform: translateX(-50%);
    }

    .content {
      left: 50%;
      z-index: 1;
      position: absolute;
      transform: translateX(-50%);
      width: 660px;
      height: 400px;
      text-align: left;
      padding: 50px;
      border-radius: 10px;
      background-color: #fff;
    }
  }
</style>
