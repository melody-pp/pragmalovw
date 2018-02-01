<template>
  <div>
    <Nav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Nav from './nav/Nav'
  import Footer from './nav/Footer'

  export default {
    name: "main-view",
    components: {Nav,Footer}
  }
</script>

<style scoped>

</style>
