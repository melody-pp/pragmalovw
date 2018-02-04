<template>
  <div>
    <Nav/>
    <router-view/>
    <Footer/>
    <LeaveInfo/>
  </div>
</template>

<script>
  import Nav from './public/Nav'
  import Footer from './public/Footer'
  import LeaveInfo from './public/LeaveInfo'

  export default {
    name: 'main-view',
    components: {Nav, Footer, LeaveInfo},
  }
</script>

<style scoped>

</style>
