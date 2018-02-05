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
              你叫小明吗？<input class="name" v-model="name"/>
            </label>
            <label>
              <input type="radio" class="gender" name="gender" :value="1" v-model="gender">新郎
            </label>
            <label>
              <input type="radio" class="gender" name="gender" :value="0" v-model="gender">新娘
            </label>
          </div>
          <div>
            <label>
              远方的客人，请留下电话来！<input class="phone" v-model="phone"/>
            </label>
          </div>
          <div>
            <label>
              字多字少，都是心意：<textarea class="comment" v-model="comment"></textarea>
            </label>
          </div>
        </form>
      </div>
      <img class="envelopeLogo" src="../../assets/leaveInfo/The_envelope.png" alt="">
      <div ref="btn" class="btn-box">
        <button class="submit" @click="submit">确定</button>
      </div>
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
    data () {
      return {
        name: '',
        gender: 1,
        phone: null,
        comment: ''
      }
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

        const {modal, seal, envelope, content, btn} = this.$refs
        const _height = Math.min(1500, window.innerHeight)
        this.openTimeline = new TimelineLite()

        this.openTimeline
          .set(modal, {display: 'block', autoAlpha: 1, scale: 1, x: 0, y: 0})
          .from(modal, .5, {autoAlpha: 0, scale: 0})
          .from(envelope, 1, {autoAlpha: 0, y: 200, ease: Elastic.easeOut.config(1.4, 0.75)})
          .to(seal, 1, {rotationX: 0})
          .set(seal, {zIndex: 1})
          .set(content, {zIndex: 2})
          .to(content, 1, {y: -1 * 0.4 * _height, height: 200 + 0.4 * _height, ease: Back.easeOut.config(1.1)})
          .to(envelope, 1, {y: (_height - 1000) / 5}, '-=1')
          .from(btn, .5, {autoAlpha: 0, y: 10}, '-=.5')
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
      },
      submit () {
        if (!this.validateData()) {
          return
        }
        this.axios.post('/api/saveUserInfo', {
          name: this.name,
          gender: this.gender,
          phone: this.phone,
          comment: this.comment
        }).then(res => {
          console.log(res.msg)
        })
      },
      validateData () {
        return true
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
    position: fixed;
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
      width: 630px;
      height: 400px;
      text-align: left;
      padding: 40px 50px;
      border: 1px solid #a7a7a7;
      border-radius: 10px;
      background-color: #fff;
    }
    .envelopeLogo {
      position: absolute;
      bottom: 8vh;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      z-index: 10;
    }
  }

  form {
    margin-top: 20px;

    > div {
      line-height: 40px;
    }
    input, textarea {
      outline: none;
      border: none;
    }

    .name {
      width: 160px;
      margin: 0 80px 0 15px;
      border-bottom: 1px solid #a7a7a7;
    }
    .gender {
      margin: 0 10px 0 15px;
    }
    .phone {
      width: 270px;
      margin: 0 0 0 15px;
      border-bottom: 1px solid #a7a7a7;
    }
    .comment {
      width: 100%;
      margin-top: -10px;
      line-height: 40px;
      height: 152px;
      display: block;
      resize: none;
      overflow: hidden;
      background: url("../../assets/leaveInfo/commentBG.png");
    }
  }

  .btn-box {
    z-index: 5;
    left: 50%;
    bottom: 260px;
    position: absolute;
    transform: translateX(-50%);
    text-align: center;
    button {
      outline: none;
      font-size: 14px;
      cursor: pointer;
      padding: 5px 25px;
      border-radius: 5px;
      border: 1px solid #a7a7a7;
    }
  }

</style>
