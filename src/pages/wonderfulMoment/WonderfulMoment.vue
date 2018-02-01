<template>
  <div>
    <img class="w100" src="../../assets/wonderfulMoment/pic_top.jpg">
    <p class="secondPageParagraphOnlyTitle wonderfulMomentColor margin152">动心，而且心动</p>
    <div class="casesBox">
      <div>
        <img @click="toDetails" src="../../assets/wonderfulMoment/case10 (1).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (2).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (3).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (4).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (5).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (6).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (7).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (8).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (9).jpg">
      </div>
      <div>
        <img src="../../assets/wonderfulMoment/case10 (10).jpg">
      </div>
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
    > div {
      width: 50%;
    }
    img {
      width: 100%;
    }
  }

  .margin152 {
    margin: 152px 0;
  }
</style>
