<template>
  <div class="themeTxt">
    <div :class="[otherLine,{firstLine:index===0}]" v-for="(contentItem,index) of content" :key="index">{{contentItem}}
    </div>
    <span class="pointer" @click="clickHandler">See More</span>
  </div>
</template>

<script>
  export default {
    name: 'theme-text',
    props: ['content'],
    methods: {
      clickHandler () {
        this.$emit('seemore')
      }
    }
  }
</script>

<style scoped lang="scss">
  .themeTxt {
    .firstLine {
      margin-bottom: 1vh !important;
    }
    .otherLine {
      margin-bottom: 3vh;
    }
  }
</style>
