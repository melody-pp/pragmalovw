<template>
  <div class="nav">
    <div class="icons clearfix">
      <span class="iconsTogether logoTxt fl"></span>
      <span class="iconsTogether closeIcon fr"></span>
    </div>
    <ul class="menu">
      <li>感受三生石尚</li>
      <li>美妙瞬间</li>
      <li>服务</li>
      <li>优惠</li>
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
    <a href="javascript:;">www.pragmalove4s.com</a>
  </div>
</template>
<style scoped lang="scss">
  .nav {
    /*height: 100vh;*/
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    padding: 2.8vw;
    .menu {
      font-family: 'SourceHanSansCN-Bold';
      font-size: 1.56vw;
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
      li:last-child{
        margin-bottom: 35.56vh;
      }
    }
    .language {
      font-family: 'SourceHanSansCN-Bold';
      font-size: 0.73vw;
      li{
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
        background-position: 0 -132px;
      }
      .closeIcon {
        width: 1.72vw;
        height: 1.72vw;
        background-position: 0 -3.85vw;

      }
    }
  }

</style>
