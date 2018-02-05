<template>
  <div ref="item" class="item-card" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <img ref="img" :src="imgUrl">
    <div ref="modal" class="modal">
      <div class="contentBox">
        <div ref="title" class="title" @click="toDetail">
          <span class="secondPageParagraphTitle" v-for="(char, index) of title" :key="index">{{char}}</span>
        </div>
        <div ref="content" class="content secondPageParagraphText">
          {{content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { TimelineLite, Power4 } from 'gsap'

  export default {
    name: 'item-card',
    props: ['imgUrl', 'title', 'content'],
    methods: {
      mouseenter () {
        if (this.enterTimeline) {
          return this.enterTimeline.restart()
        }

        const {img, modal, title, content} = this.$refs
        this.enterTimeline = new TimelineLite()

        this.enterTimeline
          .to(modal, .5, {autoAlpha: 1})
          .to(img, .5, {scale: 1.2}, '-=.5')
          .from(content, .5, {x: -50, autoAlpha: 0})
          .staggerFromTo(title.querySelectorAll('span'), .5, {alpha: 0, x: -100,},
            {alpha: 1, x: 0, ease: Power4.easeOut}, -.05, '-=0.5')
      },
      mouseleave () {
        if (this.leaveTimeline) {
          return this.leaveTimeline.restart()
        }

        const {img, modal} = this.$refs
        this.leaveTimeline = new TimelineLite()

        this.leaveTimeline
          .to(modal, .5, {autoAlpha: 0})
          .to(img, .5, {scale: 1}, '-=.5')
      },
      toDetail () {
        this.$router.push({path: '/details/1'})
      }
    }
  }
</script>

<style scoped lang="scss">
  .item-card {
    width: 50%;
    float: left;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #000;
    opacity: 0;
    background-color: rgba(255, 255, 255, .6);
    .contentBox {
      position: absolute;
      left: 0;
      bottom: 18%;
      letter-spacing: 3px;
      padding-left: 10%;
      letter-spacing: 3px;

      .title {
        cursor: pointer;
        > span {
          display: inline-block;
        }
      }
      .content {
        color: #000;
        text-align: left;
        width: 80%;
      }
    }

  }
</style>
