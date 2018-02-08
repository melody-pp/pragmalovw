<template>
  <div>
    <white-logo/>
    <img class="w100" :src="unit.image1">
    <Paragraph v-bind="paragraphs[0]"/>
    <img class="w100" :src="unit.image2">
    <Paragraph v-bind="paragraphs[1]"/>
    <div ref="verticalTitle" class="secondPageParagraphVerticalTitle websiteIntroColor verticalTitleMargin">
      <p v-for="(char, index) of unit.title3" :key="index">{{char}}</p>
    </div>
    <Paragraph v-bind="paragraphs[2]"/>
    <div class="jigsaw">
      <div>
        <img src="../../assets/websiteIntro/pic_2.jpg" alt="">
      </div>
      <div>
        <img src="../../assets/websiteIntro/pic_3.jpg" alt="">
      </div>
      <div>
        <img src="../../assets/websiteIntro/pic_4.jpg" alt="">
      </div>
      <div>
        <img src="../../assets/websiteIntro/pic_5.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Paragraph from '../public/Paragraph'
  import WhiteLogo from '../public/WhiteLogo'
  import { scrollIntoView } from '../../util'
  import { changeVisibleMixin, similarCaseMixin } from '../../mixins'

  export default {
    mixins: [changeVisibleMixin, similarCaseMixin],
    components: {Paragraph, WhiteLogo},
    data () {
      return {
        similarNum: 4,
        tjImgKey: 'gtj_thumb',
        titleVisible: false,
        titleAnimated: false,
      }
    },
    computed: {
      unit () {
        return this.$store.getters.getUnit('recept')
      },
      paragraphs () {
        return [
          {title: this.unit.title1, content: this.unit.con1.split(/\r?\n/)},
          {title: this.unit.title2, content: this.unit.con2.split(/\r?\n/)},
          {title: '', content: this.unit.con3.split(/\r?\n/)},
        ]
      }
    },
    methods: {
      changeVisible () {
        this.titleVisible = scrollIntoView(this.$refs.verticalTitle)
      },
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
    margin: 26.04vw 0 20.83vw;
  }

  .jigsaw {
    display: flex;
    justify-content: space-between;
    > div {
      width: 25%;
      img {
        width: 100%;
      }
    }
  }
</style>
