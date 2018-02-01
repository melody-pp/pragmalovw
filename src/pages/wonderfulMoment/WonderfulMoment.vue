<template>
  <div>
    <img class="w100" src="../../assets/wonderfulMoment/pic_top.jpg">
    <p class="secondPageParagraphOnlyTitle wonderfulMomentColor margin152">动心，而且心动</p>
    <div class="casesBox">
      <img @click="toDetails" src="../../assets/wonderfulMoment/case10 (1).jpg">
      <img src="../../assets/wonderfulMoment/case10 (2).jpg">
      <img src="../../assets/wonderfulMoment/case10 (3).jpg">
      <img src="../../assets/wonderfulMoment/case10 (4).jpg">
      <img src="../../assets/wonderfulMoment/case10 (5).jpg">
      <img src="../../assets/wonderfulMoment/case10 (6).jpg">
      <img src="../../assets/wonderfulMoment/case10 (7).jpg">
      <img src="../../assets/wonderfulMoment/case10 (8).jpg">
      <img src="../../assets/wonderfulMoment/case10 (9).jpg">
      <img src="../../assets/wonderfulMoment/case10 (10).jpg">
    </div>

  </div>
</template>
<script>
  export default {
    methods: {
      toDetails () {
        this.$router.push({path: '/details'})
      }
    }
  }
</script>
<style scoped lang="scss">
  .casesBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      width: 50%;
    }
  }

  .margin152 {
    margin: 152px 0;
  }
</style>
