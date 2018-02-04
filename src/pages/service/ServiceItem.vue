<template>
  <div class="service-item" :style="{backgroundColor}"
       @mouseenter="mouseenter" @mouseleave="mouseleave">

    <img :src="showUrl">

    <p class="secondPageParagraphTitle" :style="{color: titleColor}">{{title}}</p>

    <div class="secondPageParagraphText" :style="{color: contentColor}">
      <p v-for="(sentence, index) of content" :key="index" :class="{mt20: !!index}">{{sentence}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'service-item',
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
  .service-item {
    width: 50%;
    padding: 100px 34px;
    text-align: center;
    border-bottom: 1px solid #d4d4d4;
    transition: all 1s;
    img {
      height: 320px;
      margin-bottom: 70px;
    }
  }
</style>
