<template>
  <div>
    <img src="../../assets/wonderfulMoment/pic_top.jpg">
    <p class="themeTxt">动心，而且心动</p>
    <div class="casesBox clearfix">
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
    img {
      float: left;
      width: 50vw;
    }
  }

  .themeTxt {
    color: #ea6a1e;
    font-family: 'SourceHanSansCN-Regular';
    font-size: 2.4vw;
    text-align: center;
  }
</style>
