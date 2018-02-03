<template>
  <div>
    <img class="w100" src="../../assets/websiteIntro/pic_top.jpg">
    <Paragraph v-bind="paragraphs[0]"/>
    <img class="w100" src="../../assets/websiteIntro/pic_1.jpg">
    <Paragraph v-bind="paragraphs[1]"/>
    <div ref="verticalTitle" class="secondPageParagraphVerticalTitle websiteIntroColor verticalTitleMargin">
      <p>从</p>
      <p>开</p>
      <p>始</p>
      <p>，</p>
      <p>就</p>
      <p>是</p>
      <p>开</p>
      <p>始</p>
      <p style="margin-left: 54px;">。</p>
    </div>
    <Paragraph v-bind="paragraphs[2]"/>
    <div class="jigsaw">
      <div>
        <img src="../../assets/websiteIntro/pic_2.jpg">
      </div>
      <div>
        <img src="../../assets/websiteIntro/pic_3.jpg">
      </div>
      <div>
        <img src="../../assets/websiteIntro/pic_4.jpg">
      </div>
      <div>
        <img src="../../assets/websiteIntro/pic_5.jpg">
      </div>
    </div>
  </div>
</template>

<script>
  import Paragraph from './Paragraph'
  import { scrollIntoView } from '../../util'

  export default {
    components: {Paragraph},
    data () {
      return {
        titleVisible: false,
        titleAnimated: false,
        paragraphs: [
          {
            title: '感受 三生石·尚',
            content: [
              '三生石尚婚礼策划，主营高端婚礼定制、宴会等服务。为了让每一对新人都能拥有一场独一无二的高品质婚礼，高端定制成为“三生石·尚”永恒不变的品牌定位。',
              '用心做婚礼，对每场婚礼都献出最饱满的热情与执着， 认真策划，坚持创意，注重细节，完美执行。'
            ]
          },
          {
            title: '在每场婚礼的策划中注入独特的格调与优雅品味',
            content: [
              '与新人进行最深度的沟通，以照顾这个难忘时刻当中的每一个细节，',
              '完美展现新人的个人风格与品味，确保每场婚礼都将成为浪漫完美的典范。'
            ]
          },
          {
            title: '',
            content: [
              '我们拥有经验丰富的婚礼统筹团队，时刻在你左右提供建议与帮助，让你和你的家人可以轻松的享受每个珍贵难忘的时刻，',
              '透过每一个细节，把你心中梦幻的婚礼幻化成为专属你的高格调盛宴。'
            ]
          }
        ]
      }
    },
    mounted () {
      window.addEventListener('scroll', () => {
        this.titleVisible = scrollIntoView(this.$refs.verticalTitle)
      })
    },
    methods: {
      titleAnimate () {
        this.titleAnimated = true

        const timeline = new TimelineLite()
        const {verticalTitle} = this.$refs
        timeline
          .set(verticalTitle, {autoAlpha: 1})
          .staggerFrom(verticalTitle.querySelectorAll('p'), .5, {x: -10, autoAlpha: 0}, .2)
      }
    },
    watch: {
      titleVisible (newVal) {
        newVal && !this.titleAnimated && this.titleAnimate()
      }
    }

  }
</script>
<style scoped lang="scss">
  .verticalTitleMargin {
    opacity: 0;
    margin: 500px 0 400px;
  }

  .jigsaw {
    display: flex;
    justify-content: space-between;
    > div {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
</style>
