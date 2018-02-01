<template>
  <keep-alive>
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
  </keep-alive>
</template>

<script>
  import $ from 'jquery'
  import { mapMutations } from 'vuex'
  import Page1 from './Page1'
  import Page2 from './Page2'
  import Page3 from './Page3'

  export default {
    name: 'home',
    data () {
      return {}
    },
    computed: {
      refreshable () {
        return this.$store.state.refreshable
      }
    },
    methods: {
      ...mapMutations(['moveTo', 'hideNav', 'disableRefresh', 'enableRefresh'])
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
          vm.moveTo(nextIndex)
          vm.hideNav()
        },
      })
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        const pageIndex = to.query.pageIndex
        
        if (pageIndex) {
          vm.moveTo(pageIndex)
          $('#fullpage').fullpage.moveTo(pageIndex)
        }
      })
    },
    beforeRouteLeave (to, from, next) {
      $('#fullpage').fullpage.destroy('all')
      next()
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
