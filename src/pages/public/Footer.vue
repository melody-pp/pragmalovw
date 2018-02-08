<template>
  <div class="footerBox">
    <span class="iconsTogether footerLogo" @click="toIndex"></span>
    <div>
      <p style="margin-bottom: 6px;">Copyright &copy; 2018 Pragmalove4s.com All Rights Reserved</p>
      <div class="clearfix">
        <p class="fl">版权所有·三生石·尚 京ICP备17071436号 北京四维空间咨询有限公司</p>
        <p class="fr">By Pragmalove</p>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    methods: {
      toIndex () {
        this.$router.push('/', this.moveFullpage, this.moveFullpage)
      },
      moveFullpage () {
        setTimeout(() => $('#fullpage').fullpage.moveTo(1))
      }
    }
  }
</script>
<style scoped lang="scss">
  .footerBox {
    margin: 50px;
    .footerLogo {
      width: 204px;
      height: 56px;
      display: block;
      background-position: 0 -247px;
      margin-bottom: 74px;
    }
    p {
      text-align: left;
      font-family: 'SourceHanSansCN-Light';
      font-size: 12px;
    }
  }

</style>
