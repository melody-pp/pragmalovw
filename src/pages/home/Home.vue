<template>
  <div id="fullpage">
    <div class="section page-1">
      <Page1/>
    </div>
    <div class="section page-2">
      <Page2/>
    </div>
    <div class="section page-3">
      <Page3/>
    </div>
    <div class="section page-4">Some section</div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Page1 from './Page1'
  import Page2 from './Page2'
  import Page3 from './Page3'

  export default {
    name: 'home',
    data () {
      return {}
    },
    mounted () {
      const vm = this
      $('#fullpage').fullpage({
        scrollingSpeed: 750,
        responsiveWidth: 767,
        scrollOverflow: true,
        verticalCentered: true,
        easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
        onLeave (index, nextIndex, direction) {
          vm.$store.commit('moveTo', nextIndex)
        },
      })
    },
    components: {Page1, Page2, Page3}
  }
</script>

<style scoped lang="scss">
  .page-1 {
    background-color: #f091a0;
  }

  .page-2 {
    background-color: #ec681f;
  }

  .page-3 {
    background-color: #715ba5;
  }

  .page-4 {
    background-color: #8b8d8e;
  }
</style>
