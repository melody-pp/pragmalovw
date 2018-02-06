<template>
  <div class="themeTxt">
    <div>{{content}}</div>
    <span class="pointer" @click="clickHandler">See More</span>
  </div>
</template>

<script>
  export default {
    name: 'theme-text',
    props:['content'],
    methods:{
      clickHandler(){
        this.$emit('seemore')
      }
    }
  }
</script>

<style scoped>

</style>
