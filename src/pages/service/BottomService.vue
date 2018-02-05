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
  import { serviceItemMixin } from '../../mixins'

  export default {
    name: 'bottom-service',
    mixins: [serviceItemMixin]
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
