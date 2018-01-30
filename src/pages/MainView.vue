<template>
  <div>
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
  import Nav from './nav/Nav'

  export default {
    name: "main-view",
    components: {Nav}
  }
</script>

<style scoped>

</style>
