<template>
  <div>
    <span class="iconsTogether whiteLogo"></span>
    <img class="w100" :src="unit.image">
    <p class="secondPageParagraphOnlyTitle wonderfulMomentColor margin152">{{unit.title}}</p>
    <div class="casesBox clearfix">
      <item-card v-for="(item, index) of goodtime" v-bind="item" :key="index"/>
    </div>
  </div>
</template>
<script>
  import ItemCard from './ItemCard'

  export default {
    components: {ItemCard},
    computed: {
      unit () {
        return this.$store.getters.getUnit('greate')
      },
      goodtime () {
        return this.$store.state.goodtime
      }
    }
  }
</script>
<style scoped lang="scss">
  .margin152 {
    margin: 152px 0;
  }

  .casesBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
