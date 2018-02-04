<template>
  <div class="bottomService" :style="{backgroundColor}"
       @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div><img :src="showUrl"></div>
    <div>
      <p class="secondPageParagraphTitle" :style="{color: titleColor}">{{title}}</p>
      <div class="secondPageParagraphText" :style="{color: contentColor}">
        <p v-for="(sentence, index) of content" :key="index" :class="{mt20: !!index}">{{sentence}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottom-service',
    props: ['imgUrl', 'gifUrl', 'color', 'title', 'content'],
    data () {
      return {
        hover: false
      }
    },
    computed: {
      showUrl () {
        return this.hover ? this.gifUrl : this.imgUrl
      },
      backgroundColor () {
        return this.hover ? this.color : '#fff'
      },
      titleColor () {
        return this.hover ? '#fff' : this.color
      },
      contentColor () {
        return this.hover ? 'rgba(255,255,255,.9)' : '#a7a7a7'
      }
    },
    methods: {
      mouseenter () {
        this.hover = true
      },
      mouseleave () {
        this.hover = false
      }
    }
  }
</script>

<style scoped lang="scss">
  .bottomService {
    display: flex;
    text-align: center;
    transition: all 1s;
    justify-content: space-around;
    border-bottom: 1px solid #d4d4d4;
    img {
      height: 270px;
    }
    > div {
      width: 50%;
      display: inline-block;
      padding: 100px 34px;
    }
  }
</style>
