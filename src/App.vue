<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import { mapMutations } from 'vuex'

  export default {
    name: 'App',
    created () {
      const lang = this.getLang()
      Vue.prototype.axios = axios.create({
        headers: {'Content-Type': 'application/json'},
        baseURL: `/${lang}/index.php/Api`
      })
      this.setLang(lang)
      this.getText()
      this.getContact()
      this.getUnite()
      this.getGoodtime()
    },
    methods: {
      ...mapMutations(['setPageTextList', 'setContactInfo', 'setUnite', 'setGoodtime', 'setLang']),
      getLang () {
        let lang
        const language = navigator.language
        if (language.includes('zh')) {
          lang = 'cn'
        } else if (language === 'en') {
          lang = 'en'
        } else {
          lang = 'jp'
        }

        return this.$route.query.lang || lang
      },
      getText () {
        this.axios.get('/Api/getText').then(res => {
          this.setPageTextList(res.data)
        })
      },
      getContact () {
        this.axios.get('/Api/getContact').then(res => {
          this.setContactInfo(res.data[0])
        })
      },
      getUnite () {
        this.axios.get('/Api/getUnite').then(res => {
          this.setUnite(res.data)
        })
      },
      getGoodtime () {
        this.axios.get('/api/get_goodtime').then(res => {
          this.setGoodtime(res.data)
        })
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* @font-face {
     font-family: 'SourceHanSansCN-ExtraLight';
     src: url('./font/SourceHanSansCN-ExtraLight.otf');
   }

   @font-face {
     font-family: 'SourceHanSansCN-Medium';
     src: url('./font/SourceHanSansCN-Medium.otf');

   }

   @font-face {
     font-family: 'SourceHanSansCN-Normal';
     src: url('./font/SourceHanSansCN-Normal.otf');

   }*/
  @font-face {
    font-family: 'SourceHanSansCN-Regular';
    src: url('./font/SourceHanSansCN-Regular.otf');
  }

  @font-face {
    font-family: 'SourceHanSansCN-Light';
    src: url('./font/SourceHanSansCN-Light.otf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    canvas {
      display: none;
    }
    .fp-tableCell, .fp-section.fp-table {
      display: block;
    }
  }

  ul, li {
    list-style: none;
  }

  img {
    vertical-align: middle;
  }

  .clearfix {
    overflow: hidden;
    _zoom: 1;
    &:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden
    }
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .w100 {
    width: 100%;
    vertical-align: middle;
  }

  .mb20 {
    margin-bottom: 1.04vw;
  }

  .mt20 {
    margin-top: 1.04vw;
  }

  .margin136 {
    margin: 7.08vw 0;
  }

  .glass {
    filter: blur(5px);
  }

  .pointer {
    cursor: pointer;
  }

  .alertify {
    z-index: 103;
  }

  .alertify-logs {
    z-index: 103;
  }

  .spaceWidth {
    width: 1vw;
    height: 100%;
  }

  .animated {
    animation-duration: 200ms;
    animation-fill-mode: both
  }

  .fadeInRight {
    animation-name: fadeInRight
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate3d(100%, 0, 0)
    }

    to {
      opacity: 1;
      transform: none
    }
  }

  .fadeOutRight {
    animation-name: fadeOutRight
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1
    }

    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0)
    }
  }

  .websiteIntroColor {
    color: #f091a0;
  }

  .wonderfulMomentColor {
    color: #ec681f;
  }

  .serviceColor {
    color: #715ba5;
  }

  .whiteLogo {
    width: 210px;
    height: 34px;
    background-position: 0 -35px !important;
    position: absolute;
    top: 2.08vw;
    left: 2.08vw;
    cursor: pointer;
  }

  span.iconsTogether {
    display: inline-block;
    background: url("./assets/icons.png") no-repeat;
    cursor: pointer;
  }

  .colorfulLogo {
    width: 208px;
    height: 35px;
    display: inline-block;
    background: url("./assets/icons.png") no-repeat 0 0;
    position: absolute;
    top: 2.08vw;
    left: 2.08vw;
    cursor: pointer;
  }

  .simpleColorfulLogo {
    width: 120px;
    height: 33px;
    display: inline-block;
    background: url("./assets/icons.png") no-repeat 1px -127px;
  }

  .similarCases {
    display: flex;
    justify-content: space-around;
    .secondPageParagraphTitle {
      margin-bottom: 0.6vw;
    }
    > div {
      width: 33.33%;
      img {
        width: 100%;
      }
    }
  }

  .themeTxt {
    position: absolute;
    bottom: 12.24vw;
    left: 2.6vw;
    color: #fff;
    div {
      margin-bottom: 1vh;
      font-family: 'SourceHanSansCN-Regular';
      font-size: 2.4vw;
      font-weight: bolder;
      &:last-of-type {
        margin-bottom: 3vh;
      }
    }
    span {
      border: 1px solid #fff;
      padding: 0.93vh 2.92vw;
      border-radius: 0.3vw;
      font-family: 'SourceHanSansCN-Light';
      font-size: 0.94vw;
      transition: all .5s;
      transition-timing-function: ease-out;
      &:hover {
        background: #fff;
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .secondPageParagraphTitle {
    font-family: 'SourceHanSansCN-Regular';
    font-size: 2.4vw;
    text-align: center;
    margin-bottom: 1.8vw;

  }

  .secondPageParagraphOnlyTitle,
  .secondPageParagraphVerticalTitle {
    font-family: 'SourceHanSansCN-Regular';
    font-size: 2.4vw;
    text-align: center;
    font-weight: bolder;
  }

  .secondPageParagraphText {
    font-family: 'SourceHanSansCN-Light';
    font-size: 1.04vw;
    text-align: center;
    color: #a7a7a7;
  }

  .similarCases {
    .secondPageParagraphTitle {
      margin-bottom: 0.6vw;
    }
  }

  .moreCase {
    color: #878a8a;
    margin: 4.69vw 0;
  }
</style>
