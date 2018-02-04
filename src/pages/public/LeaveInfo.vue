<template>
  <div ref="modal" class="modal" @click="clickHandler">
    <div ref="envelope" class="envelope">
      <img ref="seal" class="seal" src="../../assets/leaveInfo/pic_03.png">
      <img ref="container" class="container" src="../../assets/leaveInfo/pic_04.png">
      <div ref="content" class="content">
        <div class="colorfulLogo"></div>
        <form>
          <div>
            <label>
              您的姓名：<input class="name"/>
            </label>
            <label>
              <input type="radio" class="gender" name="gender" :value="1">新郎
            </label>
            <label>
              <input type="radio" class="gender" name="gender" :value="0">新娘
            </label>
          </div>
          <div>
            <label>
              远方的客人，请留下电话来！<input class="phone"/>
            </label>
          </div>
          <div>
            <label>
              字多字少，都是心意：
              <textarea class="comment"></textarea>
            </label>
          </div>
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
      clickHandler (event) {
        event.target.classList.contains('modal') && this.hideLeaveInfo()
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
          .to(content, 1, {y: -300, height: 600, ease: Back.easeOut.config(1.1)})
          .to(envelope, 1, {y: -50}, '-=1')
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
    background-color: rgba(0, 0, 0, .1);
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

  form {
    > div {
      line-height: 30px;
    }
    input, textarea {
      outline: none;
      border: none;
    }

    .name {
      width: 150px;
      margin-right: 150px;
      border-bottom: 1px solid #ccc;
    }
    .comment {
      width: 100%;
      display: block;
      resize: none;
    }
  }
</style>
