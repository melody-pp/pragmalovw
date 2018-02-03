<template>
  <div ref="item" class="item-card" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <img ref="img" :src="imgUrl">
    <div ref="modal" class="modal">
      <div class="contentBox">
        <div ref="title" class="title">
          <span class="secondPageParagraphTitle" v-for="(char, index) of title" :key="index">{{char}}</span>
        </div>
        <div ref="content" class="content secondPageParagraphText">
          <span class="secondPageParagraphText" v-for="(char, index) of content" :key="index">{{char}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { TimelineLite } from 'gsap'

  export default {
    name: 'item-card',
    props: ['imgUrl', 'title', 'content'],
    methods: {
      mouseenter () {
        const {img, modal, title, content} = this.$refs
        if (this.enterTimeline) {
          this.enterTimeline.restart()
        } else {
          this.enterTimeline = new TimelineLite()

          this.enterTimeline
            .to(modal, .5, {autoAlpha: 1})
            .to(img, .5, {scale: 1.2}, '-=.5')
            .staggerFrom(Array.from(title.querySelectorAll('span')).reverse(), .5, {x: -100, autoAlpha: 0}, .1)
            .staggerFrom(content.querySelectorAll('span'), .5, {y: 20, autoAlpha: 0}, .03)
        }
      },
      mouseleave () {
        const {img, modal} = this.$refs

        if (this.leaveTimeline) {
          this.leaveTimeline.restart()
        } else {
          this.leaveTimeline = new TimelineLite()

          this.leaveTimeline
            .to(modal, .5, {autoAlpha: 0})
            .to(img, .5, {scale: 1}, '-=.5')
        }
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
    color: #fff;
    opacity: 0;
    background-color: rgba(0, 0, 0, .6);
    .contentBox {
      position: absolute;
      width: 100%;
      left: 14%;
      bottom: 18%;
      letter-spacing: 3px;

      .title, .content {
        > span {
          display: inline-block;
        }
      }

      .content {
        color: #fff;
        text-align: left;
        width: 84%;
      }
    }

  }
</style>
