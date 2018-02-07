<template>
  <span class="iconsTogether whiteLogo" @click="toIndex"></span>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'white-logo',
    methods: {
      toIndex () {
        this.$router.push('/', this.moveFullpage, this.moveFullpage)
      },
      moveFullpage () {
        $('#fullpage').fullpage.moveTo(1)
      }
    }
  }
</script>