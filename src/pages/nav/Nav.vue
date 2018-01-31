<template>
  <div :class="['nav-box',{bgWhite: navVisible}]">
    <span class="show-nav-btn iconsTogether" v-show="!navVisible" @click="showNav"></span>
    <div class="nav" v-show="navVisible">
      <div class="icons clearfix">
        <span class="iconsTogether logoTxt fl"></span>
        <span class="iconsTogether closeIcon fr" @click="hideNav"></span>
      </div>

      <ul class="menu">
        <li @click="moveTo(1)" :class="{'menu-color-1': pageIndex===1}">感受三生石尚</li>
        <li @click="moveTo(2)" :class="{'menu-color-2': pageIndex===2}">美妙瞬间</li>
        <li @click="moveTo(3)" :class="{'menu-color-3': pageIndex===3}">服务</li>
        <li @click="moveTo(4)" :class="{'menu-color-4': pageIndex===4}">优惠</li>
      </ul>

      <ul class="socialSoftware">
        <li>微信</li>
        <li>微博</li>
        <li>留下您的信息</li>
      </ul>

      <ul class="language">
        <li>中文</li>
        <li>英文</li>
        <li>日语</li>
      </ul>

      <ul class="contactIfo">
        <li>Add:</li>
        <li>北京市朝阳区雅成一里甲三号</li>
        <li>Tel:</li>
        <li>4000 000</li>
      </ul>

      <a href="www.pragmalove4s.com">www.pragmalove4s.com</a>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState(['navVisible', 'pageIndex'])
    },
    methods: {
      ...mapMutations(['showNav', 'hideNav']),
      moveTo (pageIndex) {
        $('#fullpage').fullpage.moveTo(pageIndex)
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-box {
    top: 0;
    right: 0;
    z-index: 100;
    height: 100vh;
    padding: 2.8vw;
    position: absolute;
    overflow: auto;
  }

  .bgWhite {
    background-color: #fff;
  }

  .show-nav-btn {
    top: 0;
    left: 0;
    width: 33px;
    height: 29px;
    position: relative;
    background-position: 0 -219px;
  }

  .nav {
    .menu {
      font-family: 'SourceHanSansCN-Bold';
      font-size: 1.56vw;
      .menu-color-1 {
        color: #f091a0;
      }
      .menu-color-2 {
        color: #ec681f;
      }
      .menu-color-3 {
        color: #715ba5;
      }
      .menu-color-4 {
        color: #8b8d8e;
      }

      li {
        margin-bottom: 1.48vh;
      }
      li:last-child {
        margin-bottom: 5.93vh;
      }
    }

    .socialSoftware {
      font-family: 'SourceHanSansCN-Regular';
      font-size: 0.833vw;
      li {
        margin-bottom: 0.96vh;
      }
      li:last-child {
        margin-bottom: 35.56vh;
      }
    }
    .language {
      font-family: 'SourceHanSansCN-Bold';
      font-size: 0.73vw;
      li {
        margin-bottom: 0.96vh;
      }
    }
    .contactIfo {
      font-family: 'SourceHanSansCN-Regular';
      font-size: 0.68vw;
    }
    .icons {
      margin-bottom: 8.33vh;
      .logoTxt {
        width: 120px;
        height: 33px;
        background-position: 1px -127px;
      }
      .closeIcon {
        width: 33px;
        height: 33px;
        background-position: 0 -68px;
      }
    }
  }
</style>
