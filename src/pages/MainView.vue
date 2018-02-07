<template>
  <div>
    <Nav/>
    <router-view/>
    <Footer/>
    <LeaveInfo/>
    <Loader v-show="isLoading"/>
  </div>
</template>

<script>
  import Nav from './public/Nav'
  import Footer from './public/Footer'
  import LeaveInfo from './public/LeaveInfo'
  import Loader from './public/Loader'

  export default {
    name: 'main-view',
    components: {Nav, Footer, LeaveInfo, Loader},
    created () {
      window.addEventListener('load', () => {
        this.$store.commit('setLoadingStatus', false)
      })
    },
    computed: {
      isLoading () {
        return this.$store.state.isLoading
      },
      setLoadingStatus (status) {
        return this.$store.commit('setLoadingStatus', status)
      }
    }
  }
</script>

<style scoped>

</style>
