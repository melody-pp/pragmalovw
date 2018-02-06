<template>
  <div class="homePage">
    <span class="colorfulLogo"></span>
    <img class="banner1" src="../../assets/page1/banner1.png">
    <img class="banner2" src="../../assets/page1/banner2.png">
    <img class="banner3" src="../../assets/page1/banner3.png">
    <img class="banner4" src="../../assets/page1/banner4.png">
    <img class="banner5" src="../../assets/page1/banner5.png">
    <img class="banner6" src="../../assets/page1/banner6.png">
    <img class="banner7" src="../../assets/page1/banner7.png">
    <img class="banner10" src="../../assets/page1/banner10.png">
    <img class="banner8" src="../../assets/page1/banner8.png">
    <div class="banner9Shadow"></div>
    <img class="banner9" src="../../assets/page1/banner9.png">
    <img class="banner11" src="../../assets/page1/banner11.png">
    <img class="banner12" src="../../assets/page1/banner12.png">
  </div>
</template>

<script>
  export default {
    name: 'page1'
  }
</script>

<style scoped lang="scss">
  .homePage {
    height: 100%;
    background-color: #e1e1e1;
    img, div {
      position: absolute;
    }
    .banner1 {
      width: 36.25vw;
      top: 16vw;
      left: 13vw;
    }
    .banner2 {
      width: 54.875vw;
      top: 20vw;
      right: -7vw;
    }
    .banner3 {
      width: 33.75vw;
      top: -4vw;
      right: 13vw;
    }
    .banner4 {
      width: 15.54vw;
      bottom: -14vw;
      right: 33vw;
    }
    .banner5 {
      width: 15.83vw;
      bottom: 0vw;
      right: 28vw;
    }
    .banner6 {
      width: 8.96vw;
      top: 17.3vw;
      left: 21vw;
    }
    .banner7 {
      width: 12.04vw;
      top: 7vw;
      right: 26.5vw;
    }
    .banner8 {
      width: 20vw;
      top: -8vw;
      left: 25vw;
    }
    .banner9Shadow {
      width: 15.71vw;
      height: 5vw;
      top: -1vw;
      left: 25vw;
      border-radius: 50%;
      background-color: rgba(73, 41, 35, 0.25);
      -webkit-filter: blur(12px);
      filter: blur(12px);
      transform: rotateZ(-23deg);
    }
    .banner9 {
      width: 18.71vw;
      top: -10vw;
      left: 20vw;
    }
    .banner10 {
      width: 31vw;
      bottom: -0.5vw;
      left: 4vw;
    }
    .banner11 {
      width: 19.29vw;
      bottom: -1vw;
      left: 24vw;
    }
    .banner12 {
      width: 21.33vw;
      top: -3vw;
      right: 36vw;
    }
  }

</style>
