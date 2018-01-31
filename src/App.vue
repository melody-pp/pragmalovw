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
  html, body, ul, li {
    margin: 0;
    padding: 0;
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
  span.iconsTogether {
    display: inline-block;
    background: url("./assets/icons.png") no-repeat;
    background-size: 10.93vw 14.63vw;

  }
</style>
