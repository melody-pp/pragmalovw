<template>
  <div class="nav-box">
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

      <ul class="contactInfo">
        <li>
          <span>Add:</span>
          北京市朝阳区雅成一里甲三号
        </li>
        <li>
          <span>Tel:</span>
          4000 000
        </li>
        <li>
          <a href="www.pragmalove4s.com">www.pragmalove4s.com</a>
        </li>
      </ul>
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
        this.$route.path === '/home'
          ? $('#fullpage').fullpage.moveTo(pageIndex)
          : this.$router.push({path: '/home', query: {pageIndex}})
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
    position: absolute;
  }

  .show-nav-btn {
    top: 2.8vw;
    right: 2.8vw;
    width: 33px;
    height: 29px;
    position: relative;
    background-position: 0 -219px;
  }

  .nav {
    height: 100vh;
    min-height: 400px;
    padding: 2.8vw;
    background-color: #fff;

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
        margin-bottom: 5.93vh;
      }
    }
    .language {
      font-family: 'SourceHanSansCN-Bold';
      font-size: 0.73vw;
      li {
        margin-bottom: 0.96vh;
      }
    }

    .contactInfo {
      font-family: 'SourceHanSansCN-Regular';
      font-size: 0.68vw;
      position: absolute;
      bottom: 3vh;
      li {
        margin-bottom: 0.96vh;
        > span {
          font-family: 'SourceHanSansCN-Bold';
          display: block;
        }
      }
    }
  }
</style>
