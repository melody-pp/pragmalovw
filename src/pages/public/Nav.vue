<template>
  <div class="nav-box">
    <div class="show-nav-btn" v-show="!navVisible" @click="showNav">
      <span class="icon-line line1"></span>
      <span class="icon-line"></span>
      <span class="icon-line line3"></span>
    </div>
    <transition enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOutRight">
      <div id="nav-bar" class="nav" v-show="navVisible">
        <div class="icons clearfix">
          <span class="iconsTogether logoTxt fl" @click="moveTo(1)"></span>
          <span class="closeIcon fr" @click="hideNav">
          <span class="icon-line line1"></span>
          <span class="icon-line line2"></span>
        </span>
        </div>

        <ul class="menu">
          <li v-for="(pageText, index) of pageTextList" :key="pageText.id" @click="moveTo(index+1)"
              :class="{[`menu-color-${index+1}`]: pageIndex===index+1}">
            {{pageText.title}}
          </li>
        </ul>

        <ul class="socialSoftware">
          <li @click="pragmaloveEWM=!pragmaloveEWM">微信</li>
          <li @click="microblog">微博</li>
          <li @click="showLeaveInfo">留下您的信息</li>
        </ul>
        <div v-if="pragmaloveEWM" class="pragmaloveEWM">
          <img src="../../assets/pragmaloveEWM.jpg">
        </div>

        <div class="langContactBox">
          <ul class="language">
            <li @click="changLang('cn')" :class="{active: lang==='cn'}">中文</li>
            <!-- <li @click="changLang('en')" :class="{active: lang==='en'}">英文</li>
             <li @click="changLang('jp')" :class="{active: lang==='jp'}">日语</li>-->
          </ul>

          <div class="line"></div>

          <ul class="contactInfo">
            <li><span>Add:</span>{{contactInfo.addr}}</li>
            <li><span>Tel:</span>{{contactInfo.tel}}</li>
            <li><a class="www" href="http://www.pragmalove4s.com">http://www.pragmalove4s.com</a></li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { mapState, mapMutations } from 'vuex'

  export default {
    data () {
      return {
        pragmaloveEWM: false
      }
    },
    computed: {
      ...mapState(['navVisible', 'pageIndex', 'leaveInfoVisible', 'pageTextList', 'contactInfo', 'lang'])
    },
    methods: {
      ...mapMutations(['showNav', 'hideNav', 'showLeaveInfo']),
      moveTo (pageIndex) {
        this.$router.push('/', () => {
          this.moveFullpage(pageIndex)
        }, () => {
          this.moveFullpage(pageIndex)
        })
      },
      moveFullpage (pageIndex) {
        setTimeout(() => $('#fullpage').fullpage.moveTo(pageIndex))
      },
      changLang (lang) {
        location.href = `?lang=${lang}`
      },
      microblog () {
        window.open('https://weibo.com/u/6281744904')
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
    position: fixed;
    .icon-line {
      display: block;
      width: 30px;
      height: 4px;
      transition: all 100ms;
      transition-timing-function: ease-out;
    }
  }

  .navVisible {
    .show-nav-btn {
      .line1 {
        transform: rotate(45deg);
      }
      .line3 {
        transform: rotate(-45deg);
      }
    }

    .closeIcon {
      .line1 {
        transform: rotate(45deg);
      }
      .line2 {
        transform: rotate(-45deg);
      }
    }
  }

  .show-nav-btn {
    top: 2.08vw;
    right: 2.08vw;
    cursor: pointer;
    position: absolute;

    .icon-line {
      background: #fff;
      margin-bottom: 5px;
    }
  }

  .menu {
    li {
      cursor: pointer;
      &:nth-child(1):hover {
        color: #f091a0;
      }
      &:nth-child(2):hover {
        color: #ec681f;
      }
      &:nth-child(3):hover {
        color: #715ba5;
      }
    }
  }

  .nav {
    height: 100%;
    min-height: 400px;
    padding: 2.08vw;
    background-color: #fff;

    .icons {
      margin-bottom: 8.33vh;
      .logoTxt {
        width: 120px;
        height: 33px;
        background-position: 1px -127px;
        margin-right: 6.67vh;
      }
      .closeIcon {
        position: relative;
        cursor: pointer;
        height: 30px;
        width: 30px;
        .icon-line {
          top: 12px;
          position: absolute;
          background: #000;
          transform-origin: 50% 50%;
        }
      }
    }

    .menu {
      font-family: 'SourceHanSansCN-Regular';
      font-weight: bolder;
      font-size: 2.78vh;

      .menu-color-1 {
        color: #f091a0;
      }
      .menu-color-2 {
        color: #ec681f;
      }
      .menu-color-3 {
        color: #715ba5;
      }

      li {
        margin-bottom: 1.6vh;
      }
      li:last-child {
        margin-bottom: 9vh;
      }
    }

    .socialSoftware {
      font-family: 'SourceHanSansCN-Regular';
      font-size: 1.48vh;
      color: #6f6c6c;
      li {
        margin-bottom: 1vh;
        cursor: pointer;
        &:hover {
          color: #333333;
        }
      }
      li:last-child {
        margin-bottom: 21.57vh;
      }
    }

    .langContactBox {
      position: absolute;
      bottom: 3vh;
    }

    .language {
      font-family: 'SourceHanSansCN-Regular';
      font-size: 1.3vh;
      color: #a7a7a7;
      font-weight: bolder;

      li {
        margin-bottom: 0.96vh;
        cursor: pointer;
        &:hover, &.active {
          color: #333333;
        }
      }
    }

    .line {
      height: 1px;
      background-color: #f2acb6;
      margin: 14px 0;
    }

    .contactInfo {
      font-family: 'SourceHanSansCN-Regular';
      font-size: 1.3vh;
      li {
        margin-bottom: 1.48vh;
        > span {
          font-family: 'SourceHanSansCN-Regular';
          display: block;
          margin-bottom: 0.83vh;
          font-weight: bolder;
        }
      }
    }
  }

  .www {
    color: #808080;
    text-decoration: none;
    font-family: 'SourceHanSansCN-Light';
    font-size: 1.2vh;
  }

  .pragmaloveEWM {
    position: absolute;
    left: -18vw;
    top: 10vw;
    width: 18vw;
    img {
      width: 100%;
    }
  }
</style>
