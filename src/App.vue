<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'App',
    created () {
      this.getText()
      this.getContact()
      this.getUnite()
      this.getGoodtime()
    },
    methods: {
      ...mapMutations(['setPageTextList', 'setContactInfo', 'setUnite', 'setGoodtime']),
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
    font-family: 'SourceHanSansCN-Bold';
    src: url('./font/SourceHanSansCN-Bold.otf');
  }

  @font-face {
    font-family: 'SourceHanSansCN-Heavy';
    src: url('./font/SourceHanSansCN-Heavy.otf');
  }

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
    margin-bottom: 20px;
  }

  .mt20 {
    margin-top: 20px;
  }

  .margin136 {
    margin: 136px 0;
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
  }

  span.iconsTogether {
    display: inline-block;
    background: url("./assets/icons.png") no-repeat;
  }

  .colorfulLogo {
    width: 208px;
    height: 35px;
    display: inline-block;
    background: url("./assets/icons.png") no-repeat 0 0;
    position: absolute;
    top: 2.08vw;
    left: 2.08vw;
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
      margin-bottom: 3vh;
      font-family: 'SourceHanSansCN-Bold';
      font-size: 2.4vw;
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
    font-size: 1.875vw;
    text-align: center;
    margin-bottom: 2.81vw;

  }

  .secondPageParagraphOnlyTitle,
  .secondPageParagraphVerticalTitle {
    font-family: 'SourceHanSansCN-Heavy';
    font-size: 2.4vw;
    text-align: center;
  }

  .secondPageParagraphText {
    font-family: 'SourceHanSansCN-Light';
    font-size: 1.04vw;
    text-align: center;
    color: #a7a7a7;
  }
</style>
