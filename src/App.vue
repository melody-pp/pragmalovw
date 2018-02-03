<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
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

  .margin136 {
    margin: 136px 0;
  }

  img {
    vertical-align: middle;
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

  span.iconsTogether {
    display: inline-block;
    background: url("./assets/icons.png") no-repeat;
  }

  .pointer {
    cursor: pointer;
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
    bottom: 235px;
    left: 50px;
    color: #fff;
    div {
      margin-bottom: 20px;
      font-family: 'SourceHanSansCN-Bold';
      font-size: 46px;
    }
    span {
      border: 1px solid #fff;
      padding: 0.93vh 2.92vw;
      border-radius: 0.3vw;
      font-family: 'SourceHanSansCN-Light';
      font-size: 18px;
    }
  }

  .secondPageParagraphTitle {
    font-family: 'SourceHanSansCN-Regular';
    font-size: 36px;
    text-align: center;
    margin-bottom: 54px;

  }

  .secondPageParagraphOnlyTitle, .secondPageParagraphVerticalTitle {
    font-family: 'SourceHanSansCN-Heavy';
    font-size: 46px;
    text-align: center;
  }

  .secondPageParagraphText {
    font-family: 'SourceHanSansCN-Light';
    font-size: 20px;
    text-align: center;
    color: #a7a7a7;
  }
</style>
