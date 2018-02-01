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
      <div class="line"></div>
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
    height: 100%;
    position: absolute;
  }

  .show-nav-btn {
    top: 40px;
    right: 50px;
    width: 33px;
    height: 29px;
    position: absolute;
    background-position: 0 -219px;
  }

  .nav {
    height: 100vh;
    min-height: 400px;
    padding: 40px;
    background-color: #fff;

    .icons {
      margin-bottom: 90px;
      .logoTxt {
        width: 120px;
        height: 33px;
        background-position: 1px -127px;
        margin-right: 72px;
      }
      .closeIcon {
        width: 33px;
        height: 33px;
        background-position: 0 -68px;
      }
    }

    .menu {
      font-family: 'SourceHanSansCN-Bold';
      font-size: 30px;
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
        margin-bottom: 17px;
      }
      li:last-child {
        margin-bottom: 64px;
      }
    }

    .socialSoftware {
      font-family: 'SourceHanSansCN-Regular';
      font-size: 16px;
      li {
        margin-bottom: 10px;
      }
      li:last-child {
        margin-bottom: 233px;
      }
    }
    .language {
      font-family: 'SourceHanSansCN-Bold';
      font-size: 14px;
      li {
        margin-bottom: 0.96vh;
      }
    }
    .line {
      height: 1px;
      background-color: #f2acb6;
      margin: 14px 0;
    }
    .contactInfo {
      font-family: 'SourceHanSansCN-Regular';
      font-size: 13px;
      position: absolute;
      bottom: 3vh;
      li {
        margin-bottom: 16px;
        > span {
          font-family: 'SourceHanSansCN-Bold';
          display: block;
          margin-bottom: 9px;
        }
      }
    }
  }
</style>
