<template>
  <keep-alive>
    <div id="fullpage">
      <div class="section page-1">
        <Page1 :moveIn="pageIndex === 1"/>
      </div>
      <div class="section page-2">
        <Page2 :moveIn="pageIndex === 2"/>
      </div>
      <div class="section page-3">
        <Page3 :moveIn="pageIndex === 3"/>
      </div>
      <div class="section page-4">
        <Page4 :moveIn="pageIndex === 4"/>
      </div>
      <!--<div class="section page-4">Some section</div>-->
    </div>
  </keep-alive>
</template>

<script>
  import $ from 'jquery'
  import { mapState, mapMutations } from 'vuex'
  import Page1 from './Page2'
  import Page2 from './Page3'
  import Page3 from './Page4'
  import Page4 from './Page4'

  export default {
    name: 'home',
    data () {
      return {}
    },
    computed: {
      ...mapState(['refreshable', 'pageIndex', 'leaveInfoVisible']),
    },
    methods: {
      ...mapMutations(['moveTo', 'hideNav'])
    },
    mounted () {
      const vm = this
      $('#fullpage').fullpage({
        scrollingSpeed: 750,
        easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
        onLeave (index, nextIndex, direction) {
          // 留资弹窗可见时，禁止fullpage滚动
          if (vm.leaveInfoVisible) {
            return false
          }
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
    components: {Page1, Page2, Page3, Page4}
  }
</script>

<style scoped lang="scss">
  .section {
    perspective: 1500px;
  }
</style>
