<template>
  <div class="companyIntro">
    <img class="leftTopDirec" src="../../assets/page1/leftTopDirec.png" alt="">
    <img class="leftBottomDirec" src="../../assets/page1/leftBottomDirec.png" alt="">
    <img class="topStone" src="../../assets/page1/topStone.png" alt="">
    <img class="topDirec" src="../../assets/page1/topDirec.png" alt="">
    <img class="bottomStone" src="../../assets/page1/bottomStone.png" alt="">
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="scss">
  .companyIntro img {
    position: absolute;
  }

  .topDirec {
    top: -50vh;
    right: 10vw;
    width: 25vw;
  }

  .leftTopDirec {
    top: 1vh;
    right: 10vw;
    width: 45vw;
  }

  .leftBottomDirec {
    bottom: 2vh;
    right: 27vw;
    width: 42vw;
  }

  .bottomStone {
    bottom: -1vh;
    right: 10vw;
    width: 24vw;
  }
  .topStone {
    top: 5vh;
    right: 34vw;
    width: 12vw;
  }
</style>
