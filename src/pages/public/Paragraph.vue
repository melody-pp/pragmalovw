<template>
  <div ref="paragraph" class="paragraph">
    <p ref="title" class="secondPageParagraphTitle websiteIntroColor">
      {{title}}
    </p>
    <div ref="content" class="secondPageParagraphText">
      <p :class="{mt20: !!index}" v-for="(sentence, index) of content" :key="index">
        <span v-for="(char, index) of sentence" :key="index">{{char}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import { scrollIntoView } from '../../util/index'
  import { changeVisibleMixin } from '../../mixins'
  import { TimelineLite } from 'gsap'

  export default {
    name: 'paragraph',
    mixins:[changeVisibleMixin],
    props: ['title', 'content'],
    data () {
      return {visible: false, animated: false}
    },
    methods: {
      changeVisible () {
        this.visible = scrollIntoView(this.$refs.paragraph)
      },
      animate () {
        this.animated = true

        const timeline = new TimelineLite()
        const {paragraph, title, content} = this.$refs
        timeline
          .set(paragraph, {autoAlpha: 1})
          .from(title, .5, {autoAlpha: 0},'-=.5')
          .staggerFrom(content.querySelectorAll('span'), .4, {y: 30, autoAlpha: 0}, .01)
      }
    },
    watch: {
      visible (newVal) {
        newVal && !this.animated && this.animate()
      }
    }
  }
</script>

<style scoped lang="scss">
  .paragraph {
    opacity: 0;
    margin: 84px 0 116px;
    p {
      text-align: center;
      overflow: hidden;
      span {
        display: inline-block;
      }
    }
  }
</style>
