<template>
  <div>
    <main class="main">
      <div class="icon">
        404
      </div>
      <p class="desc">这个页面不存在哦 ╮(╯_╰)╭</p>
      <p><a href="/">返回首页</a></p>
    </main>
    <footer class="footer">
      <div class="copyRight">
        © 2018 三生石·尚 &nbsp; 京 ICP 备 17071436 号
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'error'
  }
</script>

<style scoped>
  html,
  body,
  iframe,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  .main {
    margin-top: 130px;
    text-align: center;
  }

  .main .icon {
    width: 120px;
    height: 120px;
    border: 4px solid #5f7d8c;
    border-radius: 50%;
    margin: 0px auto;
    position: relative;
    line-height: 120px;
    font-size: 30px;
    color: #5f7d8c;
  }

  .main .icon .line {
    width: 80px;
    height: 4px;
    background-color: #5f7d8c;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 20px;
  }

  .main .desc {
    margin-top: 30px;
    margin-bottom: 70px;
    font-size: 18px;
    line-height: 1.5em;
    color: #a7a7a7;
    padding: 0 20px;

  }

  .main a {
    text-decoration: none;
    font-size: 14px;
    color: #545454;
  }

  .footer {
    margin-top: 100px;
    margin-bottom: 20px;
    color: #AAACB4;
    font-size: 13px;
    font-weight: 100;
    text-align: center;

  }
</style>
